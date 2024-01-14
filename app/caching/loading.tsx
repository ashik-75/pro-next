import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex w-full max-w-md shrink-0 items-center justify-center rounded-3xl border p-5">
        <Loader2 className="animate-spin" size={30} />
      </div>
    </div>
  );
};

export default Loading;
