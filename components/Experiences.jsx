import Badge from "./Badge";

const Experiences = () => {
  return (
    <section id="experiences" className=" antialiased h-full my-14">
      <div>
        <h1 className="text-center text-5xl dark:text-white my-16 font-OsWald">
          Experiences
        </h1>
        <hr className="my-12 h-px border-t-0 bg-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-teal-400 opacity-25 dark:opacity-100 bg-gradient-to-r from-transparent via-neutral-900 " />
      </div>
      <div className="h-full w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border dark:border-teal-500">
        <div className="m-14">
          <h3 className="text-3xl  dark:text-white font-lato ">
            Scopic Software Oct \ 2021 - Oct \ 2022
          </h3>
          <h4 className="dark:text-white text-2xl">Junior Web developer</h4>
          <hr className="my-5 w-56 h-px border-t-0 bg-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-teal-400 opacity-25 dark:opacity-100 bg-gradient-to-r from-transparent via-neutral-900 " />

          <p className="dark:text-white w-2/3 ">
            I have got trained for full stack technologies like, NodeJs,
            Express, Nginx, MongoDB, MySQL, PostgreSQL, Redis, and Docker and
            collaborated with different teams on different mid to big corporate
            sized projects on building the front-end of websites and fixing bugs
            on these websites
          </p>
          <div className="sm:flex hidden  w-2/3 flex-wrap">
            <Badge title="React" />
            <Badge title="JavaScript" />
            <Badge title="HTML" />
            <Badge title="CSS" />
            <Badge title="Redux" />
            <Badge title="TypeScript" />
            <Badge title="NodeJs" />
            <Badge title="ExpressJs" />
            <Badge title="Redis" />
            <Badge title="MongoDB" />
            <Badge title="MYSQL" />
            <Badge title="PostgreSQL" />
            <Badge title="Chakra UI" />
            <Badge title="Tailwind" />
          </div>
        </div>
      </div>
      <div className="my-10 h-full w-full bg-white  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border dark:border-teal-500">
        <div className="m-14">
          <h3 className="text-3xl  dark:text-white font-lato ">
            Re:Coded 2021
          </h3>
          <h4 className="dark:text-white text-2xl">
            Volunteer Trainer Assistent - React bootcamp
          </h4>
          <hr className="my-5 w-56 h-px border-t-0 bg-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-teal-400 opacity-25 dark:opacity-100 bg-gradient-to-r from-transparent via-neutral-900 " />

          <p className="dark:text-white w-2/3 ">
            In this volunteering opportunity that started at the 2021 React
            bootcamp. my role was to help trainers team of the bootcamp in
            prepring online classroom and helping student with the tecnhical
            issues they face during the bootcamp.
          </p>
        </div>
      </div>
      <a
        className="dark:text-teal-400 text-lg text-carmine hover:border-b hover:border-carmine"
        href="/assets/Resume.pdf"
        download
      >
        Download Résumé
      </a>
    </section>
  );
};

export default Experiences;
