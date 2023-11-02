import { proyects } from "../../../utils/proyects";
import { ProjectsGrid } from "./ProjectsGrid";

export const Projects = () => {
  return (
    <section
      className="text-terciary pt-[50px]  h-[700px] flex flex-col   md:flex-row md:justify-between items-center md:items-start"
      id="projects"
    >
      <div className="md:hidden flex flex-col items-center text-center p-4 text-terciary">
        <h1 className="text-5xl font-bold text-secondary">My projects</h1>
        <div className="flex flex-col">
          <span className="text-2xl mt-12">
            Take a look at my latest projects
          </span>
          <span className="text-2xl">projects I've working on.</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 md:gap-6">
        {proyects.map((proyect) => (
          <ProjectsGrid key={proyect.id} proyectData={proyect} />
        ))}
      </div>
      <div className="hidden md:flex md:flex-col md:justify-center md:items-start text-terciary">
        <h1 className="text-5xl font-bold text-secondary">My projects</h1>
        <div className="flex flex-col">
          <span className="text-2xl mt-12">
            Take a look at my latest projects
          </span>
          <span className="text-2xl">projects I've working on.</span>
        </div>
      </div>
    </section>
  );
};
