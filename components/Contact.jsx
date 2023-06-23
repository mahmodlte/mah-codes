import { FaLinkedin, FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <section id="contact" className="antialiased dark:text-white">
      <h1 className="text-center text-5xl dark:text-white my-16 font-OsWald">
        Contact
      </h1>
      <p className="text-xl">{`I'm open to full-time, part-time roles and freelance projects. if you are intrested in hiring me please email me at `}</p>
      <p className="text-center text-xl">mahmodlte@gmail.com</p>
      <p className="text-center">Or feel free to contact me on</p>
      <div className="flex justify-center items-center">
        <a
          href="https://github.com/mahmodlte"
          target="_blank"
          className="mx-2 hover:dark:text-teal-400 hover:text-carmine"
        >
          <FaGithub fontSize={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/mahmoodma/"
          target="_blank"
          className="mx-2 hover:dark:text-teal-400 hover:text-carmine"
        >
          <FaLinkedin fontSize={40} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
