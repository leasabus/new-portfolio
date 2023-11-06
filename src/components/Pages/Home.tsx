import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Home = () => {
  return (
    <>
      <section
        className="text-terciary w-full mt-32 h-[300px] flex items-center justify-center md:items-start md:justify-start flex-col tracking-wider"
        id="about"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Hello,</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          I'm <span className="text-secondary font-bold">Leandro.</span>
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold mt-4">
          Front-end Developer
        </h2>
        <h4 className="text-xl text-text mt-4"></h4>

        <div className="flex flex-row items-center mt-6 gap-6 text-secondary">
          <a
            className="cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:text-terciary"
            href="https://github.com/leasabus"
            target="_blank"
          >
            <BsGithub size={30} />
          </a>

          <a
            className="cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:text-terciary "
            href="https://www.linkedin.com/in/leandro-sabus-a3873515a/"
            target="_blank"
          >
            <BsLinkedin size={30} />
          </a>
        </div>

        <button className="mt-6 bg-transparent  font-semibold  py-2 px-4 border border-secondary hover:bg-secondary rounded">
          <a href="#contact">Contact Me</a>
        </button>
      </section>
    </>
  );
};
