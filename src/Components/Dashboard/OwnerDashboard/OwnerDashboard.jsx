import { GoHome } from "react-icons/go";
import { TbNewSection } from "react-icons/tb";
import { IoBagAddOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const OwnerDashboard = () => {
    return (
        <div>
            <Helmet>
              <title>Dashboard | Manage My House</title>
          </Helmet>
            <div className='flex'>
                <div className='w-64 px-7 flex flex-col gap-7 bg-gray-50 h-screen text-lg border-r flex-none'>
                    <img className="w-24" src="https://i.ibb.co/7rX3hSD/logo.png" alt="" />
                    <Link to={"/"} className='text-gray-500 font-semibold hover:text-rose-600 transition duration-300 flex items-center gap-3'><GoHome></GoHome> Home</Link>
                    <Link to={"/dashboard"} className='text-gray-500 font-semibold hover:text-rose-600 transition duration-300 flex items-center gap-3'><MdDashboard></MdDashboard> Dashboard</Link>
                    <NavLink to={"/dashboard/manageMyHouse"} className='text-gray-500 font-semibold hover:text-rose-600 transition duration-300 flex items-center gap-3'><TbNewSection></TbNewSection> Manage My House</NavLink>
                    <NavLink to={"/dashboard/addNewHouse"} className='text-gray-500 font-semibold hover:text-rose-600 transition duration-300 flex items-center gap-3'><IoBagAddOutline></IoBagAddOutline> Add New House</NavLink>
                    {/* <NavLink to={"/"} className='text-gray-500 font-semibold hover:text-rose-600 transition duration-300 flex items-center gap-3'><MdOutlineManageAccounts></MdOutlineManageAccounts> Manage Users</NavLink>
                    <NavLink to={"/dashboard/manageProducts"} className='text-gray-500 font-semibold hover:text-rose-600 transition duration-300 flex items-center gap-3'><MdOutlineManageHistory></MdOutlineManageHistory> Manage Products</NavLink> */}
                </div>

                <div className='p-5 flex-auto overflow-y-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default OwnerDashboard;