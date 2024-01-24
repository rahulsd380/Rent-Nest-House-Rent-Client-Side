import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserCog } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { CiLogout } from "react-icons/ci";


const Navbar = () => {
    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout()
        .then(result => {
          console.log(result.user);
          navigate('/')
        })
        .then(error => {
          console.log(error);
        })
      }
    return (
        <div className="max-w-7xl mx-auto py-3">
            <div className="flex justify-between items-center">
                <Link to={"/"}>
                <img className="w-52" src="https://i.ibb.co/7rX3hSD/logo.png" alt="" />
                </Link>

                <div className="flex gap-7">
                    <Link to={"/"} className="text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Home</Link>
                    <Link className="text-gray-500 font-semibold hover:text-blue-500 transition duration-300">About Us</Link>
                    <Link to={"/allHouses"} className="text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Available House</Link>
                    <Link className="text-gray-500 font-semibold hover:text-blue-500 transition duration-300">FAQ</Link>
                    <Link className="text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Contact Us</Link>
                </div>

                {
                    user?
                    <div className="flex items-center gap-5">

                        {/* Bathrooms filtering dropdown */}
        <details className="dropdown">
          <summary className="hover:cursor-pointer transition duration-300 p-2 rounded-md flex items-center gap-3">
          <div className="text-gray-500 flex items-center gap-2 font-semibold hover:text-blue-500 transition duration-300">
                        <FaRegUser></FaRegUser>
                        <p>{user?.displayName}</p>
                    </div> <IoIosArrowDown></IoIosArrowDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <Link className="flex items-center gap-2"><FaUserCog></FaUserCog> Profile</Link>
            </li>
            <li>
              <Link to={"/dashboard/manageMyHouse"} className="flex items-center gap-2"><MdDashboard></MdDashboard> Dashboard</Link>
            </li>
            <li>
              <button onClick={handleLogout} className="flex items-center gap-2"><CiLogout></CiLogout> Log out</button>
            </li> 
          </ul>
        </details>


                     
                    <Link to={"/allHouses"} className="font-semibold transition duration-300 bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white">View All House</Link>
                </div>
                    : 
                    <div className="flex items-center gap-5">
                        <Link to={"/signin"} className="text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Sign In</Link>
                    <Link to={"/signup"} className="font-semibold transition duration-300 bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white">Sign Up</Link>
                </div>
                }

               
            </div>
        </div>
    );
};

export default Navbar;