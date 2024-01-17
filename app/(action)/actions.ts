"use server";

import * as z from "zod";
import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export const getNotes = async () => {
  const notes = await db.note.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
  return notes;
};

export const addNote = async (
  prevState: { message: string; status?: number },
  formData: FormData,
) => {
  try {
    const schema = z.object({
      title: z.string().min(1),
      date: z.string().transform((dt) => new Date(dt)),
      message: z.string().min(1),
    });

    const data = schema.parse({
      title: formData.get("title"),
      date: formData.get("date"),
      message: formData.get("message"),
    });

    console.log(data);

    await db.note.create({
      data: data,
    });
    revalidatePath("/");

    return { status: 201, message: "Note Created" };
  } catch (error) {
    console.log({ error: error });
    return {
      message: "Note not created!",
      status: 500,
    };
  }
  // return note;
};
