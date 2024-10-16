import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assign = assignments.find((i) => i._id == aid);

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <h5>Assignment Name</h5>
      </label>
      <div className="input-group mb-4">
        <input id="wd-name" className="form-control" value={assign?.title} />
      </div>

      <div className="input-group mb-4">
        <div
          contentEditable
          className="form-control"
          style={{ minHeight: "11em", border: "1px solid #ced4da" }}
        >
          {assign?.description}
        </div>
      </div>

      <div id="wd-css-responsive-forms-2">
        <form>
          <div className="row mb-3">
            <label
              htmlFor="wd-points"
              className="text-end col-sm-3 col-form-label"
            >
              Points
            </label>
            <div className="col-sm-9">
              <input
                id="wd-points"
                className="form-control"
                value={assign?.points}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="wd-group"
              className="text-end col-sm-3 col-form-label"
            >
              Assignment Group
            </label>
            <div className="col-sm-9">
              <select id="wd-group" className="form-select">
                <option selected value="Publish All">
                  Assignment
                </option>
                <option value="Publish Selected">Non-Assignment</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <label
              id="wd-display-grade-as"
              htmlFor="wd-group"
              className="text-end col-sm-3 col-form-label"
            >
              Display Grade as
            </label>
            <div className="col-sm-9">
              <select id="wd-display-grade-as" className="form-select">
                <option selected value="Publish All">
                  Percentage
                </option>
                <option value="Publish Selected">GPA</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <label
              id="wd-submission-type"
              htmlFor="wd-group"
              className="text-end col-sm-3 col-form-label"
            >
              Submission Type
            </label>
            <div className="col-sm-9 border">
              <select id="wd-submission-type" className="form-select mt-3 mb-3">
                <option selected value="Publish All">
                  Online
                </option>
                <option value="Publish Selected">Offline</option>
              </select>
              <h5>
                <strong>Online entry options</strong>
              </h5>
              <div className="form-check">
                <input
                  className="form-check-input mt-2"
                  type="checkbox"
                  name="check-genre"
                  id="wd-chkbox-comedy"
                />
                <label
                  className="form-check-label mt-2"
                  id="wd-text-entry"
                  htmlFor="wd-text-entry"
                >
                  Text Entry
                </label>
                <br />

                <input
                  className="form-check-input mt-2"
                  type="checkbox"
                  name="check-genre"
                  id="wd-chkbox-drama"
                />
                <label
                  className="form-check-label mt-2"
                  id="wd-website-url"
                  htmlFor="wd-website-url"
                >
                  Website URL
                </label>
                <br />

                <input
                  className="form-check-input mt-2"
                  type="checkbox"
                  name="check-genre"
                  id="wd-chkbox-scifi"
                />
                <label
                  className="form-check-label mt-2"
                  id="wd-media-recordings"
                  htmlFor="wd-media-recordings"
                >
                  Media Recordings
                </label>
                <br />

                <input
                  className="form-check-input mt-2"
                  type="checkbox"
                  name="check-genre"
                  id="wd-chkbox-fantasy"
                />
                <label
                  className="form-check-label mt-2"
                  id="wd-student-annotation"
                  htmlFor="wd-student-annotation"
                >
                  Student Annotation
                </label>
                <br />

                <input
                  className="form-check-input mt-2"
                  type="checkbox"
                  name="check-genre"
                  id="wd-chkbox-fantasy"
                />
                <label
                  className="form-check-label mt-2 mb-4"
                  id="wd-file-upload"
                  htmlFor="wd-file-upload"
                >
                  File Uploads
                </label>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <label
              id="wd-assign"
              htmlFor="wd-assign"
              className="text-end col-sm-3 col-form-label"
            >
              Assign
            </label>
            <div className="col-sm-9 border">
              <label htmlFor="wd-assign-to" className="mt-3">
                <h5>
                  <strong>Assign to</strong>
                </h5>
              </label>
              <input
                className="form-control mb-4"
                id="wd-assign-to"
                value={"Everyone"}
              />

              <label htmlFor="wd-due-date">
                <strong>Due </strong>
              </label>
              <input
                className="form-control mb-4"
                type="date"
                id="wd-due-date"
                defaultValue={assign?.dueDate}
              />
              <div className="d-flex mb-4">
                <div className="flex-fill">
                  <label htmlFor="wd-available-from">
                    <strong>Available from</strong>
                  </label>
                  <div>
                    <input
                      className="form-control"
                      type="date"
                      id="wd-available-from"
                      defaultValue={assign?.availableFrom} // Set to May 20, 2024
                    />
                  </div>
                </div>

                <div className="flex-fill">
                  <label htmlFor="wd-available-until">
                    <strong>Until</strong>
                  </label>
                  <div>
                    <input
                      className="form-control"
                      type="date"
                      id="wd-available-until"
                      value={assign?.availableUntil}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <hr />

      <div className="d-flex justify-content-end">
        <Link to="./..">
          <button className="btn btn-secondary me-1">Cancel</button>
        </Link>
        <Link to="./..">
          <button className="btn btn-danger">Save</button>
        </Link>
      </div>
    </div>
  );
}
