import { AiFillCloseCircle } from "react-icons/ai";
import { ProjectTypes } from "../types/types";
import { RenderStack } from "./RenderStack";

interface Props {
  open: boolean;
  onClose: () => void;
  proyectData: ProjectTypes;
}

export const Modal = ({ open, onClose, proyectData }: Props) => {
  if (!open) return null;

  return (
    <>
      <div
        onClick={() => onClose()}
        className="cursor-pointer fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center overflow-y-auto animate__animated animate__fadeIn "
      >
        <div
          className="bg-[#343a40] w-[350px] md:w-[500px] h-[400px] md:h-[450px] rounded-xl flex flex-col justify-center items-center text-center my-auto"
          key={proyectData.id}
        >
          <button
            onClick={() => onClose()}
            className="absolute top-2 right-2 text-white bg-[#343a40] hover:bg-[#3e444a] p-2 rounded-full z-10"
          >
            <AiFillCloseCircle size={24} />
          </button>
          <h1 className=" mt-0 md:mt-4 text-2xl font-bold  text-secondary">
            {proyectData.proyect}
          </h1>

          <span className=" mt-1 md:mt-2 px-4 md:px-12 py-4 md:text-xl ">
            {proyectData.description}
          </span>
          <span className="mt-4 font-bold text-secondary text-xl ">
            Tech Stack
          </span>
          <div className="flex flex-row items-center mt-2 gap-6">
            {proyectData.stack?.map((stacks, index) => (
              <RenderStack key={index} stack={stacks} />
            ))}
          </div>
          <div className="flex flex-row items-center gap-4 mt-1 md:mt-2">
            <button
              onClick={() => onClose()}
              className="mt-4 md:mt-6 bg-transparent  font-semibold  py-2 px-4 border border-secondary hover:bg-secondary rounded"
            >
              <a href={proyectData.demo} target="_blank" className="font-bold">
                Demo
              </a>
            </button>
            <button
              onClick={() => onClose()}
              className="mt-4 md:mt-6 bg-transparent  font-semibold  py-2 px-4 border border-secondary hover:bg-secondary rounded"
            >
              <a
                href={proyectData.repository}
                target="_blank"
                className="font-bold"
              >
                Repository
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
