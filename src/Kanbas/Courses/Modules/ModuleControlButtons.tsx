import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function ModulesControlButtons(
  { moduleId, deleteModule, editModule }: { moduleId: string; deleteModule: (moduleId: string) => void; 
    editModule: (moduleId: string) => void }
) {
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  return (
    <div className="float-end">
      {currentUser.role === "FACULTY" &&
      <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />}
      {currentUser.role === "FACULTY" && <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>}
      <GreenCheckmark /> 
      {currentUser.role === "FACULTY" && <BsPlus />}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}