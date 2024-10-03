import { Link, NavLink } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink
        id="wd-account-signin-link"
        to="/Kanbas/Account/Signin"
        className={({ isActive }) =>
          `list-group-item border border-0 ${
            isActive ? "active" : "text-danger"
          }`
        }
      >
        Signin
      </NavLink>

      <NavLink
        id="wd-account-signup-link"
        to="/Kanbas/Account/Signup"
        className={({ isActive }) =>
          `list-group-item border border-0 ${
            isActive ? "active" : "text-danger"
          }`
        }
      >
        Signup
      </NavLink>
      <NavLink
        id="wd-account-profile-link"
        to="/Kanbas/Account/Profile"
        className={({ isActive }) =>
          `list-group-item border border-0 ${
            isActive ? "active" : "text-danger"
          }`
        }
      >
        Profile
      </NavLink>
    </div>
  );
}
