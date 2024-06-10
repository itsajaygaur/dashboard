"use client";

import { useTheme } from "next-themes";
import { FaCaretDown } from "react-icons/fa";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost m-1">
        Theme
        <FaCaretDown />
      </div>
      <ul
        tabIndex={0}
        className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32 border border-white/5 outline-black/5"
      >
        <li onClick={() => setTheme("light")}>
          <a>Light</a>
        </li>
        <li onClick={() => setTheme("dark")}>
          <a>Dark</a>
        </li>
        <li onClick={() => setTheme("cupcake")}>
          <a>Cupcake</a>
        </li>
      </ul>
    </div>
  );
}
