import { FaSearch, FaPlus} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
export default function AssignmentControls() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const { pathname } = useLocation();
  return (
    <div className="d-flex align-items-center justify-content-start pb-1 mb-3 text-nowrap">
      <div className="input-group me-5">
        <span className="input-group-text bg-white border-end-0">
          <FaSearch />
        </span>
        <input
          type="text"
          id="wd-search-assignment"
          className="form-control border-start-0"
          placeholder="Search for assignments"
        />
      </div>
      {currentUser.role === "FACULTY" && 
      <div className="d-flex  mb-3">
        <button id="wd-add-assignment-group" className="btn btn-secondary float-end">
          <FaPlus className="me-1" /> 
          <span>Group</span>
        </button>
        <Link to={pathname + "/" + "ANEW"} id="wd-add-assignment" className="btn btn-danger float-end">
          <FaPlus className="me-1" /> 
          <span>Assignment</span>
        </Link>
      </div>}
    </div>
  )
}