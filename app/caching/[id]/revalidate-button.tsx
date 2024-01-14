"use client";

import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

const RevalidateButton = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => startTransition(() => router.refresh())}
        className="flex items-center gap-4 rounded-md border px-4 py-2"
      >
        <span>Revalidate</span>
        {isPending && <Loader className="ml-2 animate-spin" />}
      </button>
    </div>
  );
};

export default RevalidateButton;
