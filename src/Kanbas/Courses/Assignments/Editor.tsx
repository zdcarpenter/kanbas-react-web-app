import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { updateAssignment, addAssignment, setAssignments } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as client from "./client";
import * as coursesClient from "../client";
export default function AssignmentEditor() {
    const { aid, cid } = useParams();
    const isNew = aid === "ANEW";
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const dispatch = useDispatch();
    const maybeAssignment = assignments.find((a: any) => a._id === aid);
    const [assignment, setAssignment] = useState(
        {
            _id: maybeAssignment?._id || aid,
            course: maybeAssignment?.course || cid,
            title: maybeAssignment?.title || "New Assignment",
            desc: maybeAssignment?.desc || "New Assignment Description",
            pts: maybeAssignment?.pts || 100,
            due_date: maybeAssignment?.due_date || "",
            avail_date: maybeAssignment?.avail_date || "",
            due_time: maybeAssignment?.due_time || "",
            avail_time: maybeAssignment?.avail_time || "",
        });
    const saveAssignment = async () => {
        await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };
    const createAssignment = async () => {
        await client.createAssignment(assignment);
        dispatch(addAssignment(assignment));
    };
    return (
        <div id="wd-assignments-editor d-flex ms-2">
            <h3 className="fs-6">
                <label htmlFor="wd-name" className="form-label"> Assignment Name </label>
            </h3>
            <input id="wd-name" className="form-control mb-3" defaultValue={assignment.title} onChange={(x) => setAssignment({ ...assignment, title: x.target.value })} />
            <textarea id="wd-description" className="form-control mb-3" defaultValue={assignment && assignment.desc}
                onChange={(x) => setAssignment({ ...assignment, desc: x.target.value })}>
            </textarea>
            <div className="row">
                <label htmlFor="wd-points" className="form-label col-3 text-end mb-3">Points</label>
                <input id="wd-points" className="form-control col mb-3" defaultValue={assignment && assignment.pts}
                    onChange={(x) => setAssignment({ ...assignment, pts: x.target.value })} />
            </div>
            <div className="row">
                <label htmlFor="wd-group" className="form-label col-3 text-end nb-3">Assignment Group</label>
                <select id="wd-group" className="form-select col mb-3">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="PROJECT">PROJECT</option>
                </select>
            </div>
            <div className="row">
                <label htmlFor="wd-display-grade-as" className="form-label col-3 text-end mb-3">Display Grade as</label>
                <select id="wd-display-grade-as" className="col mb-3">
                    <option value="Percentage">Percentage</option>
                </select>
            </div>
            <div className="row">
                <label htmlFor="wd-submission-type" className="form-label col-3 text-end">Submission Type</label>
                <div className="col border mb-3">
                    <select id="wd-submission-type" className="form-select">
                        <option value="Online">Online</option>
                    </select>
                    <fieldset className="p-2">
                        <legend className="w-auto p-2"><strong>Online Entry Options</strong></legend>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                            <label className="form-check-label" htmlFor="wd-text-entry">
                                Text Entry
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" id="wd-website-url" defaultChecked />
                            <label className="form-check-label" htmlFor="wd-website-url">
                                Website URL
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                            <label className="form-check-label" htmlFor="wd-media-recordings">
                                Media Recordings
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                            <label className="form-check-label" htmlFor="wd-student-annotation">
                                Student Annotation
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                            <label className="form-check-label" htmlFor="wd-file-upload">
                                File Uploads
                            </label>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div className="row">
                <div className="col text-end mb-3">
                    <label>Assign</label>
                </div>
                <div className="col border p-2">
                    <div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="wd-assign-to" className="form-label"><strong>Assign to</strong></label><br />
                                <input type="text" id="wd-assign-to" value="Everyone" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="wd-due-date" className="form-label col"><strong>Due</strong></label>
                        </div>
                        <div className="row mb-3 p-2">
                            <input type="date" id="wd-due-date" defaultValue={assignment.due_date} className="form-control col"
                                onChange={(x) => setAssignment({ ...assignment, due_date: x.target.value })} />
                        </div>
                        <div className="row mb-3">
                            <div>
                                <div className="row">
                                    <div className="col-3"><label htmlFor="wd-available-from"><strong>Available from</strong></label></div>
                                    <div className="col"><label htmlFor="wd-available-until"><strong>Until</strong></label></div>
                                </div>
                                <div className="row">
                                    <div className="col-3"><input type="date" id="wd-available-from" defaultValue={assignment.avail_date}
                                        onChange={(x) => setAssignment({ ...assignment, avail_date: x.target.value })} /></div>
                                    <div className="col"><input type="date" id="wd-available-until" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div>
                    <hr />
                </div>
            </div>
            <div className="text-end">
                <Link to={"/Kanbas/Courses/" + cid + "/Assignments"}><button className="btn btn-secondary">Cancel</button></Link>
                <Link to={"/Kanbas/Courses/" + cid + "/Assignments"}> <button className="btn btn-danger" onClick={() => isNew ? createAssignment : saveAssignment}>Save</button></Link>
            </div>
        </div>
    );
}
