import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiChakraui,
  SiVite,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

import { FaCss3Alt, FaHtml5 } from "react-icons/fa";

interface Props {
  stack: string;
}

export const RenderStack = ({ stack }: Props) => {
  switch (stack) {
    case "React":
      return <FaReact className="text-[#0096c7]" size={28} />;
    case "Typescript":
      return <SiTypescript className="text-[#00b4d8]" size={28} />;
    case "ChakraUI":
      return <SiChakraui className="text-[#90e0ef]" size={28} />;
    case "Vite":
      return <SiVite className="text-[#e76f51]" size={28} />;
    case "TailwindCSS":
      return <SiTailwindcss className="text-[#023e8a]" size={28} />;
    case "Javascript":
      return <SiJavascript className="text-[#ffbe0b]" size={28} />;
    case "CSS":
      return <FaCss3Alt className="text-[#023e8a]" size={30} />;
    case "HTML":
      return <FaHtml5 className="text-[#fb5607]" size={30} />;
    default:
      return null;
  }
};
