import Link from "next/link";

const navItems = [
  {
    id: 1,
    name: "Dashboard",
    link: "/",
  },
  {
    id: 2,
    name: "Profile",
    link: "/",
  },
  {
    id: 3,
    name: "Settings",
    link: "/",
  },
];

export default function Sidemenu() {
  return (
    <>
      {navItems.map((item) => (
        <li key={item.id}>
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
    </>
  );
}
