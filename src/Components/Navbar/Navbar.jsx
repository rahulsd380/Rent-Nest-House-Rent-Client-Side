import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto py-3">
            <div className="flex justify-between items-center">
                <div>
                <img className="w-52" src="/public/logo.png" alt="" />
                </div>

                <div className="flex gap-7">
                    <Link className="text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Home</Link>
                    <Link className="text-gray-500 font-semibold hover:text-blue-500 transition duration-300">About Us</Link>
                    <Link className="text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Available House</Link>
                    <Link className="text-gray-500 font-semibold hover:text-blue-500 transition duration-300">FAQ</Link>
                    <Link className="text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Contact Us</Link>
                </div>

                <div className="flex items-center gap-5">
                    <Link className="text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Login</Link>
                    <Link className="font-semibold transition duration-300 bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;