"use client";
import { useState } from "react";
import ThemeModeToggle from "./ThemeModeToggle";
import Link from "next/link";

const navData = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <div className="fixed left-0 top-0 z-20  flex w-full flex-col gap-3 bg-white px-8 py-5 shadow-xl dark:bg-slate-800 sm:px-16 md:px-28 lg:px-44 xl:px-52">
        <div className="flex justify-between">
          {/* HEADER */}
          <div>
            <p className="font-sans text-3xl font-bold">Stjernberg</p>
          </div>

          {/* NAV ITEMS */}
          <div
            className={`transition-[top] absolute left-0 z-[-1] flex w-full flex-col items-end gap-5  px-8 py-5 text-lg sm:text-base text-end shadow-xl bg-white duration-500 dark:bg-slate-800 sm:static sm:z-auto sm:w-auto sm:flex-row sm:items-center sm:gap-10 sm:bg-transparent sm:p-0 sm:shadow-none ${
              isDrawerOpen ? "top-16" : "top-[-490px]"
            }`}
          >
            {navData.map((i) => (
              <button key={i.name}>
                <Link
                  href={i.link}
                  onClick={() => setIsDrawerOpen(false)}
                  className="transition-colors hover:text-rose-500"
                >
                  {i.name}
                </Link>
              </button>
            ))}

            <ThemeModeToggle />
          </div>

          {/* HAMBUGER MENU AND CLOSE */}
          <div className="flex w-7 cursor-pointer items-center justify-center sm:hidden">
            {isDrawerOpen ? (
              <>
                <svg
                  onClick={() => setIsDrawerOpen(false)}
                  className="h-7 fill-slate-900 dark:fill-slate-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </>
            ) : (
              <>
                <svg
                  onClick={() => setIsDrawerOpen(true)}
                  className="h-6 fill-slate-900 dark:fill-slate-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
