import About from "@/components/About";
import Experiences from "@/components/Experiences";
export default function Home() {
  return (
    <section className="w-full my-20 flex flex-col selection:text-black selection:bg-teal-400">
      <About />
      <Experiences />
    </section>
  );
}
