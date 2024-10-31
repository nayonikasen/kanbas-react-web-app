import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignment = useSelector((state: any) =>
    state.assignmentsReducer.assignments.find((a: any) => a._id === aid)
  );

  const [title, setTitle] = useState(assignment?.title || "");
  const [description, setDescription] = useState(assignment?.description || "");
  const [points, setPoints] = useState(assignment?.points || 100);
  const [dueDate, setDueDate] = useState(assignment?.dueDate || "");
  const [availableFrom, setAvailableFrom] = useState(
    assignment?.availableFrom || ""
  );
  const [availableUntil, setAvailableUntil] = useState(
    assignment?.availableUntil || ""
  );
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (assignment) {
      setTitle(assignment.title);
      setDescription(assignment.description);
      setPoints(assignment.points);
      setDueDate(assignment.dueDate);
      setAvailableFrom(assignment.availableFrom);
      setAvailableUntil(assignment.availableUntil);
    }
  }, [assignment]);

  const handleSubmissionTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOption(event.target.value);
  };

  const handleSave = () => {
    const updatedAssignment = {
      _id: assignment?._id || new Date().getTime().toString(),
      title,
      description,
      points,
      dueDate,
      availableFrom,
      availableUntil,
      course: cid,
    };

    if (assignment) {
      dispatch(updateAssignment(updatedAssignment));
    } else {
      dispatch(addAssignment(updatedAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="form-check ms-5 ps-5 me-3">
      <h3>
        <label htmlFor="wd-name">Assignment Name</label>
      </h3>
      <input
        id="wd-name"
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <textarea
        id="wd-description"
        className="form-control"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <div className="container mt-5">
        {/* Points */}
        <div className="row">
          <div className="col-md-3">
            <label
              htmlFor="wd-points"
              className="col-form-label text-end d-block"
            >
              Points
            </label>
          </div>
          <div className="col-md-9">
            <input
              id="wd-points"
              className="form-control"
              type="number"
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-3">
            <label
              htmlFor="wd-group"
              className="col-form-label text-end d-block"
            >
              Assignment Group
            </label>
          </div>
          <div className="col-md-9">
            <select
              name="assignment-group"
              id="wd-group"
              className="form-select"
            >
              <option value="">--select--</option>
              <option value="assignment">Assignment</option>
              <option value="quiz">Quiz</option>
              <option value="exam">Exam</option>
              <option value="project">Project</option>
            </select>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-3">
            <label
              htmlFor="wd-display-grade-as"
              className="col-form-label text-end d-block"
            >
              Display grade as
            </label>
          </div>
          <div className="col-md-9">
            <select
              name="assignment-display-grade-type"
              id="wd-display-grade-as"
              className="form-select"
            >
              <option value="">--select--</option>
              <option value="percentage">Percentage</option>
              <option value="letter">Letter</option>
            </select>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-3">
            <label
              htmlFor="wd-submission-type"
              className="col-form-label text-end d-block"
            >
              Submission type
            </label>
          </div>
          <div className="col-md-9">
            <div className="border border-1 p-3 rounded">
              <select
                name="assignment-submission-type"
                id="wd-submission-type"
                className="form-select"
                onChange={handleSubmissionTypeChange}
              >
                <option value="">--select--</option>
                <option value="online">Online</option>
                <option value="in-person">In Person</option>
              </select>

              {selectedOption === "online" && (
                <div className="mt-3">
                  <label>Online Entry Options:</label>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="text"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Text Entry</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="website-url"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Website URL</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="media-recordings"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Media Recordings</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="student-annotations"
                      className="form-check-input"
                    />
                    <label className="form-check-label">
                      Student Annotations
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="file-uploads"
                      className="form-check-input"
                    />
                    <label className="form-check-label">File Uploads</label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-3">
            <label className="col-form-label text-end d-block">Assign</label>
          </div>
          <div className="col-md-9">
            <div className="border border-1 p-4">
              <div className="mb-3">
                <label htmlFor="wd-assign-to">Assign to</label>
                <select
                  name="assign-to"
                  id="wd-assign-to"
                  className="form-select"
                >
                  <option value="everyone">Everyone</option>
                  <option value="everyone">Students</option>
                  <option value="everyone">Manas Aggrawal</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="wd-due-date">Due date</label>
                <input
                  type="date"
                  name="due-date"
                  id="wd-due-date"
                  className="form-control"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="wd-available-from" className="form-label">
                    Available from
                  </label>
                  <input
                    type="date"
                    name="available-from"
                    id="wd-available-from"
                    className="form-control"
                    value={availableFrom}
                    onChange={(e) => setAvailableFrom(e.target.value)}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="wd-available-until" className="form-label">
                    Until
                  </label>
                  <input
                    type="date"
                    name="available-until"
                    id="wd-available-until"
                    className="form-control"
                    value={availableUntil}
                    onChange={(e) => setAvailableUntil(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="float-end">
        <button
          className="bg-gray btn btn-secondary me-2 border-1"
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
        >
          Cancel
        </button>
        <button className="bg-danger text-white btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
