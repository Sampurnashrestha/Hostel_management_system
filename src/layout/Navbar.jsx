import { CgProfile } from "react-icons/cg";

const Navbar = () =>{
    return <div className="bg-blue-500 h-13 w-full flex flex-row  shadow-md sticky top-0">
        <div className="text-3xl font-bold mt-[7px] text-white ">
            <h1 className="ml-14 cursor-default">Everest Hostel</h1>
        </div>
        <div className="text-white pl-[300px] flex flex-row justify-center ml-210 mt-3 cursor-pointer">
            <CgProfile  className=" mr-1 text-[22px] mt-[2px] "/><span className="text-[16px]">Admin</span> 
        </div>
            
    </div>
}

export default Navbar;

