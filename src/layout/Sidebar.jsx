import { NavLink } from "react-router-dom";
import { MdDashboard, MdMeetingRoom, MdPeople, MdPayments } from  "react-icons/md"


const Sidebar = () => {
  const linkClasses=({ isActive }) =>
            `flex items-center mx-auto px-4 py-2 w-50 justify-start rounded transition-transform duration-200
            ${isActive ? "bg-blue-600 text-white shadow-md" : "text-gray-500"} 
          hover:bg-blue-500 hover:text-white cursor-pointer`;

  return (
    <div className="flex flex-col h-screen bg-white shadow-xl w-60">
      <nav className="flex flex-col gap-15 mt-35 text-[20px]">
        <NavLink
          to="/"
          className={linkClasses}
        >
         <MdDashboard size={22} className="mr-2"/>Dashboard
        </NavLink>

        <NavLink
          to="/room"
         className={linkClasses}
        >
          <MdMeetingRoom size={22} className="mr-2"/>Room
        </NavLink>

        <NavLink
          to="/student"
         className={linkClasses}
        >
          <MdPeople size={22} className="mr-2"/>Student
        </NavLink>

        <NavLink
          to="/fees"
          className={linkClasses}
        >
          <MdPayments size={22} className="mr-2"/>Fees
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
