import ThemeModeToggle from "./ThemeModeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-5 absolute w-full px-8 sm:px-16 md:px-28 lg:px-44 xl:px-52">
      <div className="flex justify-between">
        <div>
          <p className="text-3xl font-bold font-sans">Stjernberg</p>
        </div>
        <div className="flex gap-7 items-center text-sm">
          <Link
            href="#home"
            className="cursor-pointer hover:text-rose-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="cursor-pointer  hover:text-rose-500 transition-colors"
          >
            About
          </Link>

          <Link
            href="#projects"
            className="cursor-pointer hover:text-rose-500 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="cursor-pointer hover:text-rose-500 transition-colors"
          >
            Contact
          </Link>
          <ThemeModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
