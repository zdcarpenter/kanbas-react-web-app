import { BsGripVertical, BsPlus } from 'react-icons/bs';
import AssignmentControls from './AssignmentControls';
import AssignmentTitleControls from './AssignmentTitleControls';
import LessonControlButtons from '../Modules/LessonControlButtons';
import { FaPenSquare } from 'react-icons/fa';

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentControls />
            <div className='wd-title wd-title p-3 ps-2 bg-secondary'>
                <BsGripVertical className="me-2 fs-3" />
                <strong>ASSIGNMENTS</strong>
                <AssignmentTitleControls />
            </div>
            <ul className="wd-assignment-list list-group rounded-0" style={{ borderLeft: '4px solid green' }}>
                <li className="wd-assignment-list-item list-group-item p-1 fs-5 border-gray d-flex justify-content-between">
                    <div className='col-1 d-flex align-items-center'>
                        <BsGripVertical className="me-2 fs-3" />
                        <a className="wd-assignment-link text-success"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                            <FaPenSquare className="fs-3" />
                        </a>
                    </div>
                    <div className="col-7">
                        <a className="wd-assignment-link text-decoration-none text-dark"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                            <div><strong>A1</strong></div>
                        </a>
                        <div>
                            <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 11:59am |
                            <strong> Due</strong> May 13 at 11:59pm | 100 pts
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center justify-content-end p-3">
                        <LessonControlButtons />
                    </div>
                </li>
                <li className="wd-assignment-list-item list-group-item p-1 fs-5 border-gray d-flex justify-content-between">
                    <div className='col-1 d-flex align-items-center'>
                        <BsGripVertical className="me-2 fs-3" />
                        <a className="wd-assignment-link text-success"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                            <FaPenSquare className="fs-3" />
                        </a>
                    </div>
                    <div className="col-7">
                        <a className="wd-assignment-link text-decoration-none text-dark"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                            <div><strong>A2</strong></div>
                        </a>
                        <div>
                            <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 11:59am |
                            <strong> Due</strong> May 20 at 11:59pm | 100 pts
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center justify-content-end p-3">
                        <LessonControlButtons />
                    </div>
                </li>
                <li className="wd-assignment-list-item list-group-item p-1 fs-5 border-gray d-flex justify-content-between">
                    <div className='col-1 d-flex align-items-center'>
                        <BsGripVertical className="me-2 fs-3" />
                        <a className="wd-assignment-link text-success"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                            <FaPenSquare className="fs-3" />
                        </a>
                    </div>
                    <div className="col-7">
                        <a className="wd-assignment-link text-decoration-none text-dark"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                            <div><strong>A3</strong></div>
                        </a>
                        <div>
                            <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 11:59am |
                            <strong> Due</strong> May 27 at 11:59pm | 100 pts
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center justify-content-end p-3">
                        <LessonControlButtons />
                    </div>
                </li>
            </ul>
        </div>
    );
}
