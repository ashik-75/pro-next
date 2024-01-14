import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="h-full p-20">
      <ul className="list-disc">
        <li>
          <Link href={"/caching"}>Cacking</Link>
        </li>

        <li>
          <Link href={"/ppr"}>PPR</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
