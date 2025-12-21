import rooms from "../data/room";
import { FaEdit, FaTrash } from "react-icons/fa";



const Room = () =>{
    const header = ["Room Number", "Total Beds", "Occupied Bed", "Status of the Room", "Action"]

  const tableStyle ={
    th:"text-white text-center  px-6  py-3 text-lg font-semibold text-xl border-r border-gray-600 last:border-r-0",
    td: "px-6 py-3 text-gray-500 text-center border-r border-gray-600 last:border-r-0  hover:text-gray-800 cursor-default"
  }
    return <>
     <div className=" mt-10 mx-10">
      <div>
        <h2 className="font-extrabold text-7xl text-blue-500  ">Room</h2>
      </div>
      
      <div className="shadow-lg rounded-lg overflow-hidden mt-5  ml-5 ">
        <table className="border-collapse border border-gray-600 ">
          <thead className="bg-blue-500">
            <tr>
                {header.map((head)=>(
                  <th key={head} className={tableStyle.th}>
                    {head}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {rooms.map((room)=>
            <tr key={room.id} className="border border-gray-600">
              <td className={tableStyle.td}>{room.name}</td>
              <td className={tableStyle.td}>{room.totalBeds}</td>
              <td className={tableStyle.td}>{room.occupiedBeds}</td>
              <td className={tableStyle.td}>{room.status}</td>
              <td className="pl-7 w-[150px]">
                <button className=" flex items-center gap-1 bg-red-500 hover:bg-green-600 text-white font-semibold px-3 py-1 rounded-md transition duration-300">
                 <FaTrash  /> Delete
                </button>
                
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
      </div>
      
    </>
}

export default Room;