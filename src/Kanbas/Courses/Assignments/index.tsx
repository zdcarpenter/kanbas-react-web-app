import { BsGripVertical, BsPlus } from 'react-icons/bs';
import AssignmentControls from './AssignmentControls';
import AssignmentTitleControls from './AssignmentTitleControls';
import LessonControlButtons from '../Modules/LessonControlButtons';
import { FaPenSquare } from 'react-icons/fa';
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from './reducer';

export default function Assignments() {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const dispatch = useDispatch();
    return (
        <div id="wd-assignments">
            <AssignmentControls />
            <div className='wd-title wd-title p-3 ps-2 bg-secondary'>
                <BsGripVertical className="me-2 fs-3" />
                <strong>ASSIGNMENTS</strong>
                <AssignmentTitleControls />
            </div>
            <ul className="wd-assignment-list list-group rounded-0" style={{ borderLeft: '4px solid green' }}>
                {assignments
                    .filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any) => (
                        <div>
                            <li className="wd-assignment-list-item list-group-item p-1 fs-5 border-gray d-flex justify-content-between">
                                <div className="col-1 d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    {currentUser.role === "FACULTY" &&
                                        <a className="wd-assignment-link text-success"
                                            href={"#/Kanbas/Courses/" + cid + "/Assignments/" + assignment._id}>
                                            <FaPenSquare className="fs-3" />
                                        </a>}
                                    {currentUser.role === "FACULTY" &&
                                        <button className="btn" onClick={()=> {if (window.confirm('Are you sure you want to delete this assignment?')) {
                                            dispatch(deleteAssignment(assignment._id)); 
                                        }}}>
                                            <FaTrash className='text-danger me-2 mb-1 fs-4' />
                                        </button>}
                                </div>
                                <div className="col-7">
                                    <a className="wd-assignment-link text-decoration-none text-dark"
                                        href={"#/Kanbas/Courses/" + cid + "/Assignments/" + assignment._id}>
                                        <div><strong>{assignment.title}</strong></div>
                                    </a>
                                    <div>
                                        <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {new Date(assignment.avail_date).toDateString()} at {assignment.avail_time} |
                                        <strong> Due</strong> {new Date(assignment.due_date).toDateString()} at {assignment.due_time} | {assignment.pts} pts
                                    </div>
                                </div>
                                <div className="col-3 d-flex align-items-center justify-content-end p-3">
                                    <LessonControlButtons />
                                </div>
                            </li></div>))}

            </ul >

        </div >
    );
}
