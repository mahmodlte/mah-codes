import Link from "next/link";
const Nav = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex">
        <Link className="text-5xl font-OsWald dark:text-white" href="/">
          <h1 className="my-5">
            Mahmoud<span className="text-5xl text-teal-400">.</span>Mansour
          </h1>
        </Link>
        <div className=" mx-3 my-3 h-[75px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-carmine to-transparent opacity0 dark:opacity-100 dark:via-teal-500"></div>
      </div>
      <div className="flex my-9">
        <Link
          className=" mx-3 dark:text-teal-400 hover:border-b dark:border-teal-600 border-carmine "
          href="#about"
        >
          <h2>About</h2>
        </Link>
        <Link
          className=" mx-3 dark:text-teal-400 hover:border-b  dark:border-teal-600 border-carmine "
          href="/"
        >
          <h2>Experiences</h2>
        </Link>
        <Link
          className="mx-3 dark:text-teal-400 hover:border-b dark:border-teal-600 border-carmine "
          href="/"
        >
          <h2>Skills</h2>
        </Link>
        <Link
          className="mx-3  dark:text-teal-400 hover:border-b dark:border-teal-600 border-carmine "
          href="/"
        >
          <h2>Contact</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
