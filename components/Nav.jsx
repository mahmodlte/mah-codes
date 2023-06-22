"use client";
import Link from "next/link";
import useDarkMode from "@/hooks/useDarkMode";
const Nav = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <nav className="flex antialiased justify-between">
      <div className="flex">
        <Link className="text-5xl font-OsWald dark:text-white" href="/">
          <h1 className="my-5">
            Mahmoud
            <span className="text-5xl text-teal-400">.</span>Mansour
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
          href="/"
        >
          <h2>Skills</h2>
        </Link>
        <Link
          className="mx-3  dark:text-teal-400 hover:border-b hover:transition-all duration-500 hover:text-carmine dark:hover:text-carmine dark:border-teal-600 border-carmine "
          href="/"
        >
          <h2>Contact</h2>
        </Link>
      </div>
      <div className=" mr-2 my-3 h-[75px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-carmine to-transparent opacity0 dark:opacity-100 dark:via-teal-500">
        <div className="dark:text-white cursor-pointer mx-3 my-5">
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
  );
};

export default Nav;
