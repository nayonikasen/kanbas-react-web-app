import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img alt="React" src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img alt="CLanguage" src="https://i.pinimg.com/564x/6e/46/e7/6e46e7dbe2bb73dacc055e5dbd85c3ad.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1235/Home">
              C Language
            </Link>
            <p className="wd-dashboard-course-title">
              C Language Course
            </p>
            <Link to="/Kanbas/Courses/1235/Home"> Go </Link>
        </div>
        </div>
        <div className="wd-dashboard-course">
        <img alt="Python" src="https://i.pinimg.com/564x/ed/66/63/ed666327dd3ce274d94f2b3547155891.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1236/Home">
              Python Language
            </Link>
            <p className="wd-dashboard-course-title">
              Python Language Course
            </p>
            <Link to="/Kanbas/Courses/1236/Home"> Go </Link>
            </div>
        </div>

        <div className="wd-dashboard-course">
        <img alt="Java" src="https://i.pinimg.com/564x/86/ad/01/86ad01aac334ed269e9d33dab95a2217.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1237/Home">
              Java Language
            </Link>
            <p className="wd-dashboard-course-title">
              Java Language Course
            </p>
            <Link to="/Kanbas/Courses/1237/Home"> Go </Link>
            </div>
        </div>

        <div className="wd-dashboard-course">
        <img alt="RProg" src="https://m.media-amazon.com/images/I/51zW0MBJAVL._SY522_.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1238/Home">
              R Programming Language
            </Link>
            <p className="wd-dashboard-course-title">
              R Programming Language Course
            </p>
            <Link to="/Kanbas/Courses/1238/Home"> Go </Link>
            </div>
        </div>

        <div className="wd-dashboard-course">
        <img alt="Django" src="https://i.pinimg.com/564x/7a/60/10/7a601005ffcb17881cf848b4eea6ccc4.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1239/Home">
              Django
            </Link>
            <p className="wd-dashboard-course-title">
              Django Course
            </p>
            <Link to="/Kanbas/Courses/1239/Home"> Go </Link>
            </div>
        </div>

        <div className="wd-dashboard-course">
        <img alt="MLCourse" src="https://m.media-amazon.com/images/I/416FCCO5tqL._SY445_SX342_.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1240/Home">
              Machine Learning
            </Link>
            <p className="wd-dashboard-course-title">
              Machine Learning Course
            </p>
            <Link to="/Kanbas/Courses/1240/Home"> Go </Link>
            </div>
        </div>

        <div className="wd-dashboard-course">
        <img alt="AICourse" src="https://i.pinimg.com/564x/4d/8c/55/4d8c559a20d1bc6e505d940288261648.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1240/Home">
              Artificial Intelligence
            </Link>
            <p className="wd-dashboard-course-title">
              AI Course
            </p>
            <Link to="/Kanbas/Courses/1240/Home"> Go </Link>
            </div>
        </div>

      </div>
    </div>
  );
}