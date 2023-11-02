import React from "react";
import { SiJavascript, SiTypescript, SiReact } from "react-icons/si";
import { FaNodeJs, FaCss3Alt, FaGithub, FaSass, FaFigma } from "react-icons/fa";

//TODO:Complete the styles of the grid
export const SkillsGrid = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex flex-col gap-8 text-secondary">
        <div className="flex flex-row items-center gap-10  ">
          <span>
            <SiJavascript size={50} />
          </span>
          <span>
            <SiTypescript size={50} />
          </span>
        </div>

        <div className="flex flex-row items-center gap-10 ">
          <span>
            <SiReact size={50} />
          </span>
          <span>
            <FaNodeJs size={50} />
          </span>
        </div>

        <div className="flex flex-row items-center gap-10 ">
          <span>
            <FaSass size={50} />
          </span>
          <span>
            <FaCss3Alt size={50} />
          </span>
        </div>

        <div className="flex flex-row items-center gap-10 ">
          <span>
            <FaGithub size={50} />
          </span>
          <span>
            <FaFigma size={50} />
          </span>
        </div>
      </div>
    </div>
  );
};
