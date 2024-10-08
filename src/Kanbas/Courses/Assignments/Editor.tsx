export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor d-flex ms-2">
            <h3 className="fs-6">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
            </h3>
            <input id="wd-name" className="form-control mb-3" value="A1" />
            <textarea id="wd-description" className="form-control mb-3">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <div className="row">
                <label htmlFor="wd-points" className="form-label col-3 text-end mb-3">Points</label>
                <input id="wd-points" className="form-control col mb-3" value={100} />
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
                            <input type="date" id="wd-due-date" value="2024-05-13" className="form-control col" />
                        </div>
                        <div className="row mb-3">
                            <div>
                                <div className="row">
                                    <div className="col-3"><label htmlFor="wd-available-from"><strong>Available from</strong></label></div>
                                    <div className="col"><label htmlFor="wd-available-until"><strong>Until</strong></label></div>
                                </div>
                                <div className="row">
                                    <div className="col-3"><input type="date" id="wd-available-from" value="2024-05-06" /></div>
                                    <div className="col"><input type="date" id="wd-available-until" value="2024-05-20" /></div>
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
                    <button className="btn btn-secondary">Cancel</button> <button className="btn btn-danger">Save</button>
            </div>
        </div>
    );
}
