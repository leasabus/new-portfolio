import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
export const ContactDescription = () => {
  return (
    <div className="hidden md:flex flex-col items-start gap-6">
      <h1 className="text-5xl font-bold text-secondary">Let's get in touch</h1>
      <h3 className="text-2xl text-terciary ">
        Contact me and let's make your project a reality!
      </h3>
      <div className="flex flex-row items-center mt-6 gap-6 text-secondary">
        <a
          className="cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:text-terciary"
          href="https://github.com/leasabus"
          target="_blank"
        >
          <BsGithub size={40} />
        </a>

        <a
          className="cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:text-terciary "
          href="https://www.linkedin.com/in/leandro-sabus-a3873515a/"
          target="_blank"
        >
          <BsLinkedin size={40} />
        </a>
      </div>
    </div>
  );
};
