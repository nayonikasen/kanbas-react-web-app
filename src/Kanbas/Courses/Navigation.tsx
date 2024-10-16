import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();

  const links = [
    { name: "Home", path: `/Kanbas/Courses/${cid}/Home` },
    { name: "Modules", path: `/Kanbas/Courses/${cid}/Modules` },
    { name: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza` },
    { name: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom` },
    { name: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments` },
    { name: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes` },
    { name: "Grades", path: `/Kanbas/Courses/${cid}/Grades` },
    { name: "People", path: `/Kanbas/Courses/${cid}/People` },
  ];

  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0 me-3"
    >
      {links.map((link) => (
        <Link
          id="wd-course-home-link"
          to={`${link.path}`}
          className={`list-group-item border-0 ${
            pathname.includes(`${link.name}`) ? "active" : "text-danger"
          }`}
        >
          {link.name}
        </Link>
      ))}
      {/* <Link
        id='wd-course-home-link'
        to='/Kanbas/Courses/5610/Home'
        className={`list-group-item border-0 ${
          pathname.includes("Home") ? "active" : "text-danger"
        }`}
      >
        Home
      </Link>

      <Link
        id='wd-course-modules-link'
        to='/Kanbas/Courses/5610/Modules'
        className={`list-group-item border-0 ${
          pathname.includes("Modules") ? "active" : "text-danger"
        }`}
      >
        Modules
      </Link>

      <Link
        id='wd-course-piazza-link'
        to='/Kanbas/Courses/5610/Piazza'
        className={`list-group-item border-0 ${
          pathname.includes("Piazza") ? "active" : "text-danger"
        }`}
      >
        Piazza
      </Link>

      <Link
        id='wd-course-zoom-link'
        to='/Kanbas/Courses/5610/Zoom'
        className={`list-group-item border-0 ${
          pathname.includes("Zoom") ? "active" : "text-danger"
        }`}
      >
        Zoom
      </Link>

      <Link
        id='wd-course-quizzes-link'
        to='/Kanbas/Courses/5610/Assignments'
        className={`list-group-item border-0 ${
          pathname.includes("Assignments") ? "active" : "text-danger"
        }`}
      >
        Assignments
      </Link>

      <Link
        id='wd-course-assignments-link'
        to='/Kanbas/Courses/5610/Quizzes'
        className={`list-group-item border-0 ${
          pathname.includes("Quizzes") ? "active" : "text-danger"
        }`}
      >
        Quizzes
      </Link>

      <Link
        id='wd-course-grades-link'
        to='/Kanbas/Courses/5610/Grades'
        className={`list-group-item border-0 ${
          pathname.includes("Grades") ? "active" : "text-danger"
        }`}
      >
        Grades
      </Link>

      <Link
        id='wd-course-people-link'
        to='/Kanbas/Courses/5610/People'
        className={`list-group-item border-0 ${
          pathname.includes("People") ? "active" : "text-danger"
        }`}
      >
        People
      </Link> */}
    </div>
  );
}
