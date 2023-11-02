import { useState } from "react";
import { Modal } from "./Modal";
import { ProjectTypes } from "../types/types";

interface Props {
  proyectData: ProjectTypes;
}

export const CardProject = ({ proyectData }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Modal
        open={openModal}
        onClose={onCloseModal}
        proyectData={proyectData}
      />

      <div
        onClick={() => setOpenModal(true)}
        className="hover:shadow-secondary hover:shadow-lg cursor-pointer rounded-xl "
      >
        <img
          className="project-image rounded-xl "
          src={proyectData.image}
          alt="project-image"
        ></img>
      </div>
    </>
  );
};
