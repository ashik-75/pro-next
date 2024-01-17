import db from "@/lib/db";
import Link from "next/link";
import { getNotes } from "./actions";
import { Suspense } from "react";
import { Await } from "@/lib/utils";
import { cookies } from "next/headers";

const getNotessss = async (): Promise<{
  notes: { title: string; message: string; date: string }[];
}> => {
  const response = fetch("http://localhost:3000/api/note", {
    next: {
      tags: ["notes"],
    },
  }).then((dt) => dt.json());

  return response;
};

const Notes = () => {
  cookies();
  const response = getNotessss();

  return (
    <div className="space-y-5 font-nunito">
      <Link href={"/create"}>Create Note</Link>

      <Suspense fallback={<div>Loading ...</div>}>
        <Await promise={response}>
          {(response) => {
            return (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {response.notes.map((note) => (
                  <div key={note.title} className="rounded-3xl border p-5">
                    <h1>{note.title}</h1>
                    <p>{note.message}</p>
                    <p>{new Date(note.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default Notes;
