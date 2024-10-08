import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
export default function AssignmentTitleControls() {
    return (
        <div className='text-end'>
            40% of Total
            <BsPlus className="fs-4" />
            <IoEllipsisVertical className="fs-4" />
        </div>
        );
}