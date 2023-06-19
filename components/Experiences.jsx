import Badge from "./Badge";

const Experiences = () => {
  return (
    <section className=" my-14">
      <div>
        <h1 className="text-center text-5xl dark:text-white my-16 font-OsWald">
          Experiences
        </h1>
        <hr class="my-12 h-px border-t-0 bg-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-teal-400 opacity-25 dark:opacity-100 bg-gradient-to-r from-transparent via-neutral-900 " />
      </div>
      <div className="h-full w-full bg-white  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border dark:border-teal-500">
        <div className="m-14">
          <h3 className="text-3xl drop-shadow-2xl dark:text-white font-lato ">
            Scopic Software Oct \ 2021 - Oct \ 2022
          </h3>
          <h4 className="dark:text-white text-2xl">Junior Web developer</h4>
          <hr class="my-5 w-56 h-px border-t-0 bg-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-teal-400 opacity-25 dark:opacity-100 bg-gradient-to-r from-transparent via-neutral-900 " />

          <p className="dark:text-white w-2/3 ">
            I have got trained for full stack technologies like, NodeJs,
            Express, Nginx, MongoDB, MySQL, PostgreSQL, Redis, and Docker and
            collaborated with different teams on different mid to big corporate
            sized projects on building the front-end of websites and fixing bugs
            on these websites
          </p>
          <div className="flex justify-evenly w-2/3 flex-wrap">
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
    </section>
  );
};

export default Experiences;
