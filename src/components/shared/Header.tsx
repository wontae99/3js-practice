"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * The shared header component.
 */
const nav = [
  {
    name: "Transformation",
    path: "/",
  },
  {
    name: "Geometry",
    path: "/geometry",
  },
  {
    name: "Material",
    path: "/material",
  },
  {
    name: "Light",
    path: "/light",
  },
  {
    name: "Camera",
    path: "/camera",
  },
  {
    name: "Shadow",
    path: "/shadow",
  },
  {
    name: "Animation",
    path: "/animation",
  },
];

const ALink = ({ href, title }: { href: string; title: string }) => {
  const pathname = usePathname();
  const isCurrent = pathname === href;

  return (
    <Link prefetch={false} href={href}>
      <p
        className={
          "text-lg transition-all hover:drop-shadow-lg " +
          (isCurrent ? "font-bold" : "text-gray-500")
        }
      >
        {title}
      </p>
    </Link>
  );
};

export default function Header() {
  return (
    <header className="mx-auto max-w-3xl pb-10">
      <nav className="flex flex-wrap items-center gap-4">
        {nav.map((item, index) => (
          <ALink href={item.path} title={item.name} key={index} />
        ))}
      </nav>
    </header>
  );
}
