import db from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [categories, count] = await Promise.all([
      db.category.findMany({
        orderBy: {
          updatedAt: "desc",
        },
      }),
      db.category.count(),
    ]);

    return NextResponse.json({
      count,
      categories,
    });
  } catch (error) {
    console.log("[Category-GET]", error);
    return new NextResponse("Something wrong", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    console.log("CATEGORY_POST");
    const body = await req.json();

    console.log(body);

    const categories = await db.category.create({
      data: body,
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.log("[Category Creation]", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
