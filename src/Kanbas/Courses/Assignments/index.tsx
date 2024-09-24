export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment"
                placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/123">
                        A1 - ENV + HTML
                    </a>
                    <br />
                    Multple Modules | <strong>Not Available until</strong> May 6 at 11:59pm | <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </li>
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/123">
                        A2 - CSS + BOOTSTRAP
                    </a>
                    <br />
                    Multple Modules | <strong>Not Available until</strong> May 15 at 11:59pm | <strong>Due</strong> May 22 at 11:59pm | 100 pts
                </li>
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/123">
                        A3 - JS + REACT
                    </a>
                    <br />
                    Multple Modules | <strong>Not Available until</strong> May 25 at 11:59pm | <strong>Due</strong> June 1 at 11:59pm | 100 pts
                </li>
            </ul>
        </div>
    );
}
