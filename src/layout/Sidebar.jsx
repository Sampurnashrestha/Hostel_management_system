import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdMeetingRoom,
  MdPeople,
  MdPayments,
} from "react-icons/md";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState(location.pathname);

  const linkClass = (value) =>
    `flex items-center px-4 py-3 w-full rounded-md
     box-border
     transition-colors duration-200
     shadow-md shadow-transparent
     ${
       active === value
         ? "bg-blue-600 text-white shadow-blue-500/30"
         : "text-gray-600"
     }
     hover:bg-blue-500 hover:text-white`;

  return (
    <aside className="h-screen w-60 min-w-[15rem] bg-white shadow-xl box-border">
      <nav className="flex flex-col pt-35 h-full gap-5 text-[20px] px-2 gap-15">
        
        <NavLink
          to="/dashboard"
          onClick={() => setActive("dashboard")}
          className={linkClass("dashboard")}
        >
          <MdDashboard size={22} className="mr-3" />
          Dashboard
        </NavLink>

        <NavLink
          to="/room"
          onClick={() => setActive("room")}
          className={linkClass("room")}
        >
          <MdMeetingRoom size={22} className="mr-3" />
          Room
        </NavLink>

        <NavLink
          to="/student"
          onClick={() => setActive("student")}
          className={linkClass("student")}
        >
          <MdPeople size={22} className="mr-3" />
          Student
        </NavLink>

        <NavLink
          to="/fees"
          onClick={() => setActive("fees")}
          className={linkClass("fees")}
        >
          <MdPayments size={22} className="mr-3" />
          Fees
        </NavLink>

      </nav>
    </aside>
  );
};

export default Sidebar;
