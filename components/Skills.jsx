import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  TbBrandRedux,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandMongodb,
  TbBrandHtml5,
  TbBrandBootstrap,
  TbBrandGit,
  TbBrandGithub,
  TbBrandNpm,
} from "react-icons/tb";
const Skills = () => {
  return (
    <section className="my-14 antialiased">
      <h1 className="text-center text-5xl dark:text-white my-16 font-OsWald">
        Skills
      </h1>

      <hr className="my-12 h-px border-t-0 bg-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-teal-400 opacity-25 dark:opacity-100 bg-gradient-to-r from-transparent via-neutral-900 " />
      <p className="dark:text-white ">
        {" "}
        Skills that are as robust as a Swiss army knife, your project at hands
        of an expert, pixel perfect implementation, fast and scalable using
        latest technologies
      </p>
      <div className="m-14  flex justify-evenly flex-wrap">
        <div className="dark:text-white flex justify-center items-center flex-col">
          <TbBrandJavascript fontSize={45} className=" text-teal-400" />
          JavaScript
        </div>
        <div className="dark:text-white flex justify-center items-center flex-col">
          <TbBrandTypescript fontSize={45} className="text-teal-400" />{" "}
          TypeScript
        </div>
        <div className="dark:text-white flex justify-center items-center flex-col">
          <FaReact fontSize={45} className="text-teal-400" /> React
        </div>
        <div className="dark:text-white flex justify-center items-center flex-col">
          <TbBrandNextjs fontSize={45} className="text-teal-400" /> Next Js
        </div>{" "}
        <div className="dark:text-white flex justify-center items-center flex-col">
          <TbBrandRedux fontSize={45} className="text-teal-400" /> Redux
        </div>{" "}
        <div className="dark:text-white flex justify-center items-center flex-col">
          <TbBrandTailwind fontSize={45} className="text-teal-400" /> Tailwind
          CSS
        </div>
        <div className="dark:text-white flex justify-center items-center flex-col">
          <TbBrandBootstrap fontSize={45} className="text-teal-400" /> Bootstrap
        </div>
        <div className="dark:text-white flex justify-center items-center flex-col">
          <TbBrandHtml5 fontSize={45} className="text-teal-400" /> HTML
        </div>
        <div className="dark:text-white flex justify-center items-center flex-col">
          <TbBrandCss3 fontSize={45} className="text-teal-400" /> CSS
        </div>
        <div className="dark:text-white flex justify-center items-center flex-col">
          <TbBrandGit fontSize={45} className="text-teal-400" /> Git
        </div>
        <div className="dark:text-white flex justify-center items-center flex-col">
          <TbBrandGithub fontSize={45} className="text-teal-400" /> GitHub
        </div>
        <div className="dark:text-white flex justify-center items-center flex-col">
          <TbBrandNpm fontSize={45} className="text-teal-400" /> NPM
        </div>
        <div className="dark:text-white flex justify-center items-center flex-col">
          <TbBrandMongodb fontSize={45} className="text-teal-400" /> MongoDb
        </div>
      </div>
    </section>
  );
};

export default Skills;
