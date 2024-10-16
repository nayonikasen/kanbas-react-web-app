import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { FaRegEdit } from "react-icons/fa";
import AssignmentControls from "./AssignmentControls";
import { useParams } from "react-router";
import { assignments } from "../../Database";

export default function Assignments() {
  const { cid } = useParams();

  return (
    <div id="wd-assignments">
      {/* <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button> */}
      {/* <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3> */}
      <AssignmentControls /> <br />
      <br />
      <br />
      <br />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div
            id="wd-assignments-title"
            className="wd-title p-3 ps-2 bg-secondary"
          >
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-1" />
            ASSIGNMENTS
            <AssignmentControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((a: any) => a.course === cid)
              .map((a) => (
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <div className="d-flex">
                    <div className="align-self-center me-3">
                      <BsGripVertical className="me-2 fs-3" />
                      <FaRegEdit className="me-1 text-success" />
                    </div>
                    <div className="align-self-center flex-grow-1">
                      <a
                        className="wd-assignment-link"
                        href={`#/Kanbas/Courses/${cid}/Assignments/${a._id}`}
                      >
                        {a.title}
                      </a>
                      <br />
                      <div className="wd-float-left text-danger me-1">
                        Multiple module
                      </div>
                      <div className="wd-float-left me-1">
                        | <b>Not available until</b> {a.availableUntil} | <br />
                      </div>
                      <div className="wd-float-left me-1">
                        <b>Due</b> {a.dueDate}| {a.points}
                      </div>
                    </div>
                    <div className="align-self-center">
                      <LessonControlButtons />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
