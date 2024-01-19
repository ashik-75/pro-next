import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { noteId: string } },
) {
  try {
    const note = await db.note.findUnique({
      where: {
        id: Number(params.noteId),
      },
      include: {
        category: true,
      },
    });

    if (!note) {
      return new NextResponse("Nothing found", {
        status: 404,
        statusText: "uffs",
      });
    }

    return NextResponse.json(note);
  } catch (error) {
    console.log("[Note-GET]", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { noteId: string } },
) {
  try {
    const noteId = Number(params.noteId);
    const body = await request.json();

    const oldNote = await db.note.findUnique({
      where: {
        id: noteId,
      },
    });

    if (!oldNote) {
      return NextResponse.json({ message: "Note not found" }, { status: 404 });
    }

    const note = await db.note.update({
      where: {
        id: noteId,
      },
      data: {
        ...body,
      },
    });

    return NextResponse.json(note);
  } catch (error) {
    console.log("[Note-PUT]", error);
    return NextResponse.json({ message: "Internal Error" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { noteId: string } },
) {
  try {
    const findNote = await db.note.findUnique({
      where: {
        id: Number(params.noteId),
      },
    });

    if (!findNote) {
      return NextResponse.json(
        { message: "Nothing Found here" },
        { status: 404 },
      );
    }

    await db.note.delete({
      where: {
        id: Number(params.noteId),
      },
    });

    return NextResponse.json({
      message: "Note Deleted",
    });
  } catch (error) {
    console.log("[Note-DELETE]", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
