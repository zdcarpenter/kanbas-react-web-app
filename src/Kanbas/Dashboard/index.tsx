import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addEnrollment, deleteEnrollment, setEnrollments } from "./reducer";
import * as coursesClient from "../Courses/client";
import * as client from "./client";
export default function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const [displayAll, setDisplayAll] = useState(false);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const dispatch = useDispatch();
  const fetchEnrollments = async () => {
    const enrollments = await client.findEnrollments();
    dispatch(setEnrollments(enrollments));
  };
  useEffect(() => {
    fetchEnrollments();
  }, []);
  const fetchAllCourses = async () => {
    const courses = await coursesClient.fetchAllCourses();
    setAllCourses(courses);
  };
  useEffect(() => {
    fetchAllCourses();
  }, []);
  const unenroll = async (userId: string, courseId: string) => {
    await client.deleteEnrollment(userId, courseId);
    dispatch(deleteEnrollment({ user: userId, course: courseId }));
  };
  const enroll = async (userId: string, courseId: string) => {
    await client.addEnrollment(userId, courseId);
    dispatch(addEnrollment({ user: userId, course: courseId }));
  };
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "FACULTY" &&
        <h5>New Course
          <button className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse} > Add </button>
          <button className="btn btn-warning float-end me-2"
            onClick={updateCourse} id="wd-update-course-click">
            Update
          </button>
        </h5>}
      {currentUser.role === "STUDENT" &&
        <button className="btn btn-primary float-end me-2" onClick={() => setDisplayAll(!displayAll)}>Enrollments</button>}<br />
      {currentUser.role === "FACULTY" && <input value={course.name} className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />}
      {currentUser.role === "FACULTY" && <textarea value={course.description} className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />}
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {(displayAll ? allCourses : courses)
          .map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name} </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description} </p>
                      <button className="btn btn-primary"> Go </button>
                      {currentUser.role === "FACULTY" &&
                        <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }} className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete
                        </button>}
                      {currentUser.role === "FACULTY" && <button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                      </button>}
                      {currentUser.role === "STUDENT" && enrollments.some(
                        (enrollment: { user: any; course: any; }) =>
                          enrollment.user === currentUser._id &&
                          enrollment.course === course._id) &&
                        <button className="btn btn-danger float-end"
                          onClick={(event) => {
                            event.preventDefault();
                            unenroll(currentUser._id, course._id);
                          }}>
                          Unenroll</button>}
                      {currentUser.role === "STUDENT" && !enrollments.some(
                        (enrollment: { user: any; course: any; }) =>
                          enrollment.user === currentUser._id &&
                          enrollment.course === course._id) &&
                        <button className="btn btn-success float-end"
                          onClick={(event) => {
                            event.preventDefault();
                            enroll(currentUser._id, course._id);
                          }}>
                          Enroll
                        </button>}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>);
}