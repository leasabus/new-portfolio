import React from "react";
import { SkillsDescription } from "./SkillsDescription";
import { SkillsGrid } from "./SkillsGrid";

export const Skills = () => {
  return (
    <section id="skills">
      <div className=" h-[400px] md:h-[300px] mt-40  flex flex-col justify-center items-center  md:flex-row md:justify-between md:items-start ">
        <SkillsDescription />
        <SkillsGrid />
      </div>
    </section>
  );
};
