import { useState } from "react";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const onClose = () => {
    setNav(true);
  };
  return (
    <>
      <section className=" text-terciary h-[50px] md:h-[80px] w-full flex flex-row  justify-between items-center py-4  bg-primary ">
        <div className="flex flex-row items-center text-center gap-2 p-2">
          <span className="text-secondary font-bold text-3xl">Leandro</span>
          <span>
            <PiBracketsCurlyBold size={30} />
          </span>
        </div>

        <div className="md:flex md:flex-row gap-6 text-xl hidden">
          <a
            href="#about"
            className="cursor-pointer hover:-translate-y-1 hover:scale-110  transition ease-in-out delay-150 hover:border-b-secondary hover:border-b "
          >
            <small className="text-secondary m-1">01.</small>
            About
          </a>
          <a
            href="#projects"
            className="cursor-pointer hover:-translate-y-1 hover:scale-110  transition ease-in-out delay-150 hover:border-b-secondary hover:border-b  "
          >
            <small className="text-secondary m-1">02.</small>Projects
          </a>
          <a
            href="#skills"
            className="cursor-pointer hover:-translate-y-1 hover:scale-110  transition ease-in-out delay-150 hover:border-b-secondary hover:border-b  "
          >
            <small className="text-secondary m-1">03.</small>Skills
          </a>
          <a
            href="#contact"
            className="cursor-pointer hover:-translate-y-1 hover:scale-110  transition ease-in-out delay-150 hover:border-b-secondary hover:border-b  "
          >
            <small className="text-secondary m-1">04.</small>Contact
          </a>
        </div>

        <div
          className="block md:hidden p-2 cursor-pointer  text-white"
          onClick={handleNav}
        >
          {!nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </section>

      <section
        className={
          !nav
            ? " top-0 w-[60%] h-[350px] border-r border-r-secondary bg-secondary text-terciary ease-in-out duration-500 rounded flex flex-col"
            : "fixed left-[100%]"
        }
      >
        <div
          onClick={() => onClose()}
          className="flex flex-col items-start p-10 gap-6 text-xl font-bold"
        >
          <a href="#about">
            <small className="font-bold text-primary mr-1">01.</small>Home
          </a>
          <a href="#projects">
            <small className="font-bold text-primary mr-1">02.</small>Projects
          </a>
          <a href="#skills">
            <small className="font-bold text-primary mr-1">03.</small>Skills
          </a>
          <a href="#contact">
            <small className="font-bold text-primary mr-1">04.</small>Contact
          </a>
          <button
            className="mt-[50px] ml-40 bg-primary p-2 rounded text-terciary"
            onClick={() => onClose()}
          >
            <AiOutlineClose />
          </button>
        </div>
      </section>
    </>
  );
};
