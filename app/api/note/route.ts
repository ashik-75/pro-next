import db from "@/lib/db";
import {
  revalidateTag,
  unstable_noStore as noStore,
  revalidatePath,
} from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search");
    const currentPage = Math.max(Number(searchParams.get("page") || 1), 1);
    const limit = Math.max(Number(searchParams.get("limit") || 1), 5);

    const [notes, count] = await Promise.all([
      db.note.findMany({
        where: {
          title: {
            contains: search || undefined,
            mode: "insensitive",
          },
        },
        orderBy: {
          title: "desc",
        },
        include: {
          category: true
        },
        take: limit,
        skip: (currentPage - 1) * limit,
      }),
      db.note.count({
        where: {
          title: {
            contains: search || undefined,
            mode: "insensitive",
          },
        },
      }),
    ]);

    return NextResponse.json({
      count,
      page: currentPage,
      totalPage: Math.ceil(count / limit),
      limit,
      notes,
    });
  } catch (error) {
    return new NextResponse("Something wrong", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // const data = createNoteSchema.parse(body);

    const note = await db.note.create({
      data: body,
    });

    revalidateTag("notes");
    revalidatePath("/");

    return NextResponse.json(note);
  } catch (error) {
    console.log("[Note Creation]", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
