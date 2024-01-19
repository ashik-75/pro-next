import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { categoryId: string } },
) {
  try {
    const category = await db.category.findUnique({
      where: {
        id: Number(params.categoryId),
      },
    });

    if (!category) {
      return NextResponse.json(
        { message: "Category Not Found" },
        { status: 404 },
      );
    }

    return NextResponse.json(category);
  } catch (error) {
    console.log("[Category-GET]", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { categoryId: string } },
) {
  try {
    const categoryId = Number(params.categoryId);
    const body = await request.json();

    const oldCategory = await db.category.findUnique({
      where: {
        id: categoryId,
      },
    });

    if (!oldCategory) {
      return NextResponse.json(
        { message: "Category not found" },
        { status: 404 },
      );
    }

    const category = await db.category.update({
      where: {
        id: categoryId,
      },
      data: {
        ...body,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("[Category-PUT]", error);
    return NextResponse.json({ message: "Internal Error" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { categoryId: string } },
) {
  try {
    const category = await db.category.findUnique({
      where: {
        id: Number(params.categoryId),
      },
    });

    if (!category) {
      return NextResponse.json(
        { message: "Nothing Found here" },
        { status: 404 },
      );
    }

    await db.category.delete({
      where: {
        id: Number(params.categoryId),
      },
    });

    return NextResponse.json({
      message: "Category Deleted",
    });
  } catch (error) {
    console.log("[Category-DELETE]", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
