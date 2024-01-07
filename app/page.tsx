import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    href: "/example/table",
    label: "Table",
  },
  {
    id: 2,
    href: "/example/testimonial-carousel",
    label: "Testimonial Carousel",
  },
  {
    id: 3,
    href: "/example/featured-card",
    label: "Featured Card",
  },
  {
    id: 4,
    href: "/example/image-gallery",
    label: "Image Gallery",
  },
  {
    id: 5,
    href: "/example/timeline",
    label: "Timeline",
  },
];

const Home = () => {
  return (
    <div className="min-h-full space-y-5 p-5 md:p-10">
      <div className="grid-col-1 md:grid-col-2 grid gap-5 lg:grid-cols-4">
        {links.map((link) => (
          <div key={link.id}>
            <Card key={link.id} href={link.href} title={link.label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

const Card = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      href={href}
      className="block cursor-pointer space-y-2  rounded-3xl border p-5 font-inter duration-200 hover:border-gray-200 dark:border-gray-600  dark:hover:border-gray-400 "
    >
      <div className="relative h-[100px] w-[100px] overflow-hidden rounded-2xl">
        <Image
          src={"/image/four.jpg"}
          fill
          alt="fuck"
          className="object-cover"
        />
      </div>
      <h1 className="text-lg font-bold text-gray-600 dark:text-gray-300">
        {title}
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        The all in one starter kit for building multi tenant applications
      </p>

      <div>
        <span className="rounded-xl border px-2 py-1 text-xs dark:border-gray-500 dark:text-gray-300">
          UI Components
        </span>
      </div>
    </Link>
  );
};
