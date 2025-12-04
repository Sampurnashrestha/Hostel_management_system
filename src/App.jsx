import Sidebar from "./layout/Sidebar";
import Dashboard from "./page_admin/Dashboard"

const App = () =>{
  return(<>
  <div className="flex">
    <Sidebar />

    <div>
    <Dashboard />
    </div>
    </div>
    </>
  )
}

export default App;