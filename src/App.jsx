import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import Dashboard from "./page_admin/Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <div className="flex">
          <Sidebar />
          <div>
            
          <div className="flex-1 p-3 w-full">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/room" element={<h1>Room</h1>} />
              <Route path="/student" element={<h1>Student</h1>} />
              <Route path="/fees" element={<h1>Fees</h1>} />
            </Routes>
          </div>
         </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
