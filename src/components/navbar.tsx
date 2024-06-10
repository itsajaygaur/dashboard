import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 sticky top-0 ">
      <div>
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button md:hidden"
        >
          open
        </label>
        <h1>Navbar</h1>
      </div>

      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
