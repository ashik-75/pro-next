import db from "@/lib/db";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    cookies();
    const page = 1;
    const limit = 5;
    const notes = await db.note.findMany({
      orderBy: {
        updatedAt: "desc",
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return NextResponse.json({
      notes,
      page: 1,
      totalPage: notes.length / limit,
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
    console.log({ note });

    revalidateTag("notes");

    return NextResponse.json({
      note,
      message: "Note Created",
    });
  } catch (error) {
    console.log("[Note Creation]", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
