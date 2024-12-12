import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import Quizzes from "./Quizzes";
import QuizDetails from "./Quizzes/Details";
import QuizDetailsTabs from "./Quizzes/DetailsTabs";
import QuizView from "./Quizzes/View";
import GradedQuiz from "./Quizzes/GradedQuiz";


export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="Quizzes" element={<div><Quizzes /></div>} />
            <Route path="Quizzes/new" element={<QuizDetailsTabs />} />
            <Route path="Quizzes/:qid" element={<QuizDetails />} />
            <Route path="Quizzes/:qid/view" element={<QuizView />} />
            <Route path="Quizzes/:qid/edit" element={<div style={{ width: "700px" }}><QuizDetailsTabs /></div>} />
            <Route path="Quizzes/:qid/Graded" element={<GradedQuiz />} />
          </Routes>
        </div></div>
    </div>
  );
}

