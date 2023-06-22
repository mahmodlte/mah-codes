import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <section className="w-full my-20 flex flex-col selection:text-black selection:bg-teal-400">
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
}
