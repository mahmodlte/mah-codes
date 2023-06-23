import projects from "@/data/projectsList";
import Badge from "./Badge";
const Projects = () => {
  return (
    <section id="projects" className="antialiased">
      <h1 className="text-center text-5xl dark:text-white my-16 font-OsWald">
        Projects
      </h1>
      <div className="flex flex-wrap">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="my-9 mx-4 h-auto max-w-[450px] w-full over:backdrop-blur-xl hover:bg-carmine hover:dark:bg-teal-400 hover:dark:bg-clip-padding hover:backdrop-filter hover:dark:bg-opacity-20 hover:bg-clip-padding hover:bg-opacity-20 bg-white  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border dark:border-teal-500"
            >
              <div className="m-7">
                <h3 className="text-3xl text-center dark:text-white font-lato ">
                  {project.name}
                </h3>

                <p className="dark:text-white  text-center ">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    className="dark:text-teal-400 text-carmine hover:cursor-pointer hover:underline text-lg "
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="dark:text-teal-400 text-carmine  hover:cursor-pointer hover:underline text-lg "
                  >
                    Demo
                  </a>
                </div>
                <div className="flex justify-center">
                  {project.stack.map((stack, idx) => {
                    return <Badge key={idx} title={stack} />;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
