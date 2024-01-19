import Link from "next/link";

const Page = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/api/note"}>Notes</Link>
        </li>
        <li>
          <Link href={"/api/category"}>Category</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
