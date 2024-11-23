import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: "0",
  });
  const [module, setModule] = useState({
    id: 1,
    name: "md-name",
    description: "ms-description",
    course: "md-course",
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <hr />
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <a
        id="wd-update-assignment-score"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update score
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-score"
        defaultValue={assignment.score}
        type="Number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.value })
        }
      />
      <a
        id="wd-update-assignment-completed"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      <input
        id="wd-assignment-completed"
        checked={assignment.completed}
        type="checkbox"
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
      />
      completed
      <hr />
      <h4>Module</h4>
      <a href={`${MODULE_API_URL}`} className="btn btn-primary float-end">
        Get Module
      </a>
      <h4>Module Name</h4>
      <a href={`${MODULE_API_URL}/name`} className="btn btn-primary float-end">
        Get Module Name
      </a>
      <h4>Modify Module</h4>
      <a
        id="wd-update-module-name"
        href={`${MODULE_API_URL}/name/${module.name}`}
        className="btn btn-primary float-end"
      >
        Update module name
      </a>
      <input
        className="form-control w-75"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <a
        id="wd-update-module-description"
        href={`${MODULE_API_URL}/description/${module.description}`}
        className="btn btn-primary float-end"
      >
        Update module description
      </a>
      <input
        className="form-control w-75"
        id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
    </div>
  );
}
