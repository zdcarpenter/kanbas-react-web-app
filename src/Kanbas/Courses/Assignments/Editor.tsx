export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <h3>
                <label htmlFor="wd-name">Assignment Name</label><br />
            </h3>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                        </select>
                        <table>
                            <tr>
                                <td align="left" valign="top">
                                    <label>Online Entry Options</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" id="wd-text-entry" />
                                    <label htmlFor="wd-text-entry">Text Entry</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" id="wd-website-url" />
                                    <label htmlFor="wd-website-url">Website URL</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" id="wd-media-recordings" />
                                    <label htmlFor="wd-media-recordings">Media Recordings</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" id="wd-student-annotation" />
                                    <label htmlFor="wd-student-annotation">Student Annotation</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" id="wd-file-uploads" />
                                    <label htmlFor="wd-file-uploads">File Uploads</label>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label>Assign</label>
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="wd-assign-to">Assign to</label><br />
                                    <input type="text" id="wd-assign-to" value="Everyone" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="wd-due-date">Due</label><br />
                                    <input type="date" id="wd-due-date" value="2024-05-13" />
                                </td>
                            </tr>
                            <tr>
                                <table>
                                    <tr>
                                        <td><label htmlFor="wd-available-from">Available from</label></td>
                                        <td><label htmlFor="wd-available-until">Until</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="date" id="wd-available-from" value="2024-05-06" /></td>
                                        <td><input type="date" id="wd-available-until" value="2024-05-20" /></td>
                                    </tr>
                                </table>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td colSpan={3}>
                        <hr />
                    </td>
                </tr>
                <tr>
                    <td colSpan={3} align="right">
                        <button>Cancel</button> <button>Save</button>
                        
                    </td>
                </tr>
            </table>
        </div>
    );
}
