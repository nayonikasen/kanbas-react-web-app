import { Routes, Route, Navigate } from "react-router-dom";
import Accounts from "./Account";
import Dashboard from "./Dashboard/index";
import Courses from "./Courses/index";
import AccountNavigation from "./Navigation";
import "./styles.css";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import { fetchAllCourses } from "./Courses/client";

const Kanbas = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [enrollments, setEnrollments] = useState<any[]>([]);

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchCourses = async () => {
    let courses = [];
    try {
      courses = await userClient.findMyCourses();
    } catch (error) {
      console.error(error);
    }
    setCourses(courses);
  };

  const getAllCourses = async () => {
    try {
      const fetchedCourses = await fetchAllCourses();
      setAllCourses(fetchedCourses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
    getAllCourses();
  }, [currentUser]);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
    setAllCourses([...allCourses, newCourse]);
  };

  const deleteCourse = async (courseId: any) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
    setAllCourses(allCourses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    const updatedCourse = await courseClient.updateCourse(course);

    setEnrollments(
      enrollments.map((c: { _id: any }) => {
        if (c._id === course._id) {
          return updatedCourse;
        } else {
          return c;
        }
      })
    );

    setAllCourses(
      allCourses.map((c) => {
        if (c._id === course._id) {
          return updatedCourse;
        } else {
          return c;
        }
      })
    );
  };

  return (
    // <Provider store={store}>
    <div id="wd-kanbas" className="kanbas">
      <Session>
        <div>
          <table>
            <tbody>
              <AccountNavigation />
              <div className="wd-main-content-offset p-3">
                <Routes>
                  <Route
                    path="/"
                    // element={<Navigate to="Accounts/SignIn" replace />}
                    element={<Navigate to="Dashboard" replace />}
                  />
                  <Route path="Account/*" element={<Accounts />} />
                  <Route
                    path="Dashboard/*"
                    element={
                      <ProtectedRoute>
                        <Dashboard
                          courses={enrollments}
                          course={course}
                          setCourse={setCourse}
                          addNewCourse={addNewCourse}
                          deleteCourse={deleteCourse}
                          updateCourse={updateCourse}
                          fetchCourses={fetchCourses}
                          allCourses={allCourses}
                          fetchAllCourses={fetchAllCourses}
                        />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="Courses/:cid/*"
                    element={
                      <ProtectedRoute>
                        <Courses courses={courses} />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="Calendar" element={<h1>Calendar</h1>} />
                  <Route path="Inbox" element={<h1>Inbox</h1>} />
                </Routes>
              </div>
            </tbody>
          </table>
        </div>
      </Session>
    </div>
    // </Provider>
  );
};

export default Kanbas;
