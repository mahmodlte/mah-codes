"use client";
import Link from "next/link";
import useDarkMode from "@/hooks/useDarkMode";
import { useState } from "react";
const Nav = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      <nav className="flex md:hidden  antialiased justify-between items-center">
        <div className="flex">
          <Link className="text-5xl font-OsWald dark:text-white" href="/">
            <h1 className="my-5">
              M
              <span className="text-5xl  text-carmine dark:text-teal-400">
                .
              </span>
              M
            </h1>
          </Link>
          <div className=" mx-3 my-3 h-[75px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-carmine to-transparent opacity0 dark:opacity-100 dark:via-teal-500"></div>
        </div>
        <div className="block  lg:hidden">
          <button
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
            className="flex items-center px-3 py-2 rounded dark:text-teal-400 text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-6 w-6 ${
                openMobileMenu ? "hidden" : "block"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-6 w-6 ${
                openMobileMenu ? "block" : "hidden"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full  block flex-grow ${
            openMobileMenu ? "block " : "hidden"
          }`}
        >
          <div className="text-sm ">
            <Link
              className=" mx-3 mt-2 block dark:text-teal-400 hover:border-b hover:transition-all duration-500 hover:text-carmine dark:hover:text-carmine dark:border-teal-600 border-carmine "
              href="#about"
            >
              <h2>About</h2>
            </Link>
            <Link
              className=" mx-3 mt-2 block dark:text-teal-400 hover:border-b hover:transition-all duration-500 hover:text-carmine dark:hover:text-carmine dark:border-teal-600 border-carmine "
              href="#experiences"
            >
              <h2>Experiences</h2>
            </Link>
            <Link
              className="mx-3 mt-2 block dark:text-teal-400 hover:border-b hover:transition-all duration-500 hover:text-carmine dark:hover:text-carmine dark:border-teal-600 border-carmine "
              href="#skills"
            >
              <h2>Skills</h2>
            </Link>
            <Link
              className="mx-3 mt-2 block dark:text-teal-400 hover:border-b hover:transition-all duration-500 hover:text-carmine dark:hover:text-carmine dark:border-teal-600 border-carmine "
              href="#projects"
            >
              <h2>projects</h2>
            </Link>
            <Link
              className="mx-3 mt-2  block dark:text-teal-400 hover:border-b hover:transition-all duration-500 hover:text-carmine dark:hover:text-carmine dark:border-teal-600 border-carmine "
              href="#contact"
            >
              <h2>Contact</h2>
            </Link>
          </div>
        </div>
      </nav>
      {/* Desktop Nav */}
      <nav className="hidden sm:flex  antialiased justify-between">
        <div className="flex">
          <Link className="text-5xl font-OsWald dark:text-white" href="/">
            <h1 className="my-5">
              Mahmoud
              <span className="text-5xl text-carmine  dark:text-teal-400">
                .
              </span>
              Mansour
            </h1>
          </Link>
          <div className=" mx-3 my-3 h-[75px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-carmine to-transparent opacity0 dark:opacity-100 dark:via-teal-500"></div>
        </div>
        <div className="flex my-9">
          <Link
            className=" mx-3 dark:text-teal-400 hover:border-b hover:transition-all duration-500 hover:text-carmine dark:hover:text-carmine dark:border-teal-600 border-carmine "
            href="#about"
          >
            <h2>About</h2>
          </Link>
          <Link
            className=" mx-3 dark:text-teal-400 hover:border-b hover:transition-all duration-500 hover:text-carmine dark:hover:text-carmine dark:border-teal-600 border-carmine "
            href="#experiences"
          >
            <h2>Experiences</h2>
          </Link>
          <Link
            className="mx-3 dark:text-teal-400 hover:border-b hover:transition-all duration-500 hover:text-carmine dark:hover:text-carmine dark:border-teal-600 border-carmine "
            href="#skills"
          >
            <h2>Skills</h2>
          </Link>
          <Link
            className="mx-3 dark:text-teal-400 hover:border-b hover:transition-all duration-500 hover:text-carmine dark:hover:text-carmine dark:border-teal-600 border-carmine "
            href="#projects"
          >
            <h2>Projects</h2>
          </Link>
          <Link
            className="mx-3  dark:text-teal-400 hover:border-b hover:transition-all duration-500 hover:text-carmine dark:hover:text-carmine dark:border-teal-600 border-carmine "
            href="#contact"
          >
            <h2>Contact</h2>
          </Link>
        </div>
        <div className=" mr-2 my-3 h-[75px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-carmine to-transparent opacity0 dark:opacity-100 dark:via-teal-500">
          <div className="dark:text-white cursor-pointer dark:hover:text-teal-400 hover:text-carmine mx-3 my-5">
            {colorTheme === "light" ? (
              <svg
                onClick={() => setTheme("light")}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setTheme("dark")}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
