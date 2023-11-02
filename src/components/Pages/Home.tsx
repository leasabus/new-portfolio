import ReactTyped from "react-typed";

export const Home = () => {
  return (
    <>
      <section
        className="text-terciary mt-32 h-[300px] flex items-center justify-center md:items-start md:justify-start flex-col tracking-wider"
        id="about"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Hello,</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          I'm <span className="text-secondary font-bold">Leandro</span>
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold mt-4">
          Full-Stack Developer
        </h2>
        <h4 className="text-xl text-text mt-4">
          <ReactTyped
            strings={[
              "React.",
              "NodeJS.",
              "Typescript.",
              "Javascript.",
              "TailwindCSS.",
              "SASS.",
              "MongoDB",
            ]}
            typeSpeed={30}
            backSpeed={30}
            loop
          />
        </h4>

        <button className="mt-6 bg-transparent  font-semibold  py-2 px-4 border border-secondary hover:bg-secondary rounded">
          <a href="#contact">Contact Me</a>
        </button>
      </section>
    </>
  );
};
