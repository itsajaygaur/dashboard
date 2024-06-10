"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    id: 1,
    name: "Dashboard",
    link: "/",
  },
  {
    id: 2,
    name: "Leads",
    link: "/leads",
  },
  {
    id: 3,
    name: "Settings",
    link: "/settings",
  },
];

export default function Sidemenu() {
  const path = usePathname();

  return (
    <>
      {navItems.map((item) => (
        <li key={item.id} className="">
          <Link
            className={` ${path === item.link ? "active" : ""} `}
            href={item.link}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
}
