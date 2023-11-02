import { CardProject } from "../../CardProject";
import { ProjectTypes } from "../../../types/types";

interface Props {
  proyectData: ProjectTypes;
}

export const ProjectsGrid = ({ proyectData }: Props) => {
  return <CardProject proyectData={proyectData} />;
};
