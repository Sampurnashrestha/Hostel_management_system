import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import Dashboard from "./page_admin/Dashboard";
import Room from "./page_admin/Room";
import Student from "./page_admin/Student";
import Fee from "./page_admin/Fee";
import Main from "./page_admin/main";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <div className="flex">
          <Sidebar />
          <div>
            
          <div className="flex-1  w-full">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/room" element={<Room />} />
              <Route path="/student" element={<Student />} />
              <Route path="/fees" element={<Fee />} />
            </Routes>
          </div>
         </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
