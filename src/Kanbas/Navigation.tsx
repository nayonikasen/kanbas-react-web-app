import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import "./styles.css";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <>
      <img
        src="/images/Canvas_Stacked_ByInstructure_Color_RGB.webp"
        alt="Menu"
        className="navbar-toggler-icon custom-toggler d-md-none position-fixed top-0 start-0 mt-2 ms-2 z-3"
        data-bs-toggle="offcanvas"
        data-bs-target="#kanbasNavOffcanvas"
      />

      {/* TOGGLE KANBAS NAVIGATION */}
      <div
        className="offcanvas offcanvas-start d-md-none w-100"
        data-bs-backdrop="false"
        tabIndex={-1}
        id="kanbasNavOffcanvas"
      >
        <div className="offcanvas-header">
          <img
            src="/images/Canvas_Stacked_ByInstructure_Color_RGB.webp"
            className="toggle-menu-img d-md-none position-fixed top-0 start-0 mt-2 ms-2 z-3 me-5"
            alt=""
          />{" "}
          <h5
            className="offcanvas-title ms-5 text-danger"
            id="kanbasNavOffcanvasLabel"
          >
            Kanbas
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div
            id="wd-kanbas-navigation"
            className="list-group rounded-0 bg-white"
          >
            {/* navigation items */}
            <a
              id="wd-neu-link"
              target="_blank"
              href="https://www.northeastern.edu/"
              className="list-group-item text-center border-0 bg-white text-danger"
              rel="noreferrer"
            >
              <img
                src="/images/Northeastern_Huskies_.webp"
                width="75px"
                alt=""
              />
            </a>
            <br />
            <Link
              to="/Kanbas/Account"
              id="wd-account-link"
              className={`list-group-item text-center border-0 bg-white text-danger`}
            >
              <FaRegCircleUser className={`fs-1 text-danger`} />
              <br />
              Account{" "}
            </Link>
            {/* DYNAMIC CONTENT RENDERING FOR TOGGLE NAVIGATION */}
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="list-group-item text-center border-0 bg-white text-danger"
              >
                {link.icon({ className: "fs-1 text-danger" })}
                <br />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN KANBAS NAVIGATION */}
      <div
        id="wd-kanbas-navigation"
        style={{ width: 120 }}
        className="list-group rounded-0 position-fixed
           bottom-0 top-0 d-none d-md-block bg-black z-2"
      >
        {/* navigation items */}
        <a
          id="wd-neu-link"
          target="_blank"
          href="https://www.northeastern.edu/"
          className="list-group-item text-center border-0 bg-black text-white"
          rel="noreferrer"
        >
          <img src="/images/Northeastern_Huskies_.webp" width="75px" alt="" />
        </a>
        <br />
        <Link
          to="/Kanbas/Account"
          id="wd-account-link"
          className={`list-group-item text-center border-0  ${
            pathname.includes("Account")
              ? "bg-white text-danger"
              : "bg-black text-white"
          }`}
        >
          <FaRegCircleUser
            className={`fs-1 ${
              pathname.includes("Account") ? "text-danger" : "text-white"
            }`}
          />
          <br />
          Account{" "}
        </Link>
        <br />
        {/* DYNAMIC CONTENT RENDERING FOR MAIN NAVIGATION */}
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`list-group-item bg-black text-center border-0
              ${
                pathname.includes(link.label)
                  ? "text-danger bg-white"
                  : "text-white bg-black"
              }`}
          >
            {link.icon({ className: "fs-1 text-danger" })}
            <br />
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
