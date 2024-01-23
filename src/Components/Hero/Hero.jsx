import { GiHouse } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillLayout } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import Lottie from "lottie-react";
import animation from "../../../public/animation.json"

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="">
            <div className="flex justify-center mb-3">
            <div className="w-72">
            <Lottie animationData={animation} loop={true} />
            </div>
            </div>
        <div>
          <h1 className="text-xl font-semibold flex items-center justify-center gap-2 mb-2">
            200 House Listing Posted{" "}
            <GiHouse className="text-orange-500 text-2xl"></GiHouse>
          </h1>
          <h1 className="text-4xl font-bold text-center mb-2">
            Unlock Your Next Chapter <br /> Find Your Perfect Home for Rent!
          </h1>

          <p className="text-center text-gray-500">
            Embark on comfort and style! Discover ideal living spaces in our
            premium rentals. Whether a cozy apartment or <br /> spacious house,
            your perfect home awaits. Unlock the door to a life of comfort—find
            it today!
          </p>
        </div>

        <div className="py-10 w-full">
        <div className="flex gap-5 justify-between items-center border p-6 rounded-md max-w-6xl mx-auto">
            <div className="w-full">
            <p className="font-semibold flex items-center gap-1"><IoLocationSharp></IoLocationSharp> Location</p>
            <input className="w-full p-3 bg-gradient-to-r from-lime-50 to-green-50 outline-none border-b-2 border-blue-600" placeholder="Find......" type="text" name="" id="" />
            </div>
            
            <div className="w-full">
            <p className="font-semibold flex items-center gap-1"><AiFillLayout></AiFillLayout> Property Type</p>
            <input className="w-full p-3 bg-gradient-to-r from-lime-50 to-green-50 outline-none border-b-2 border-blue-600" placeholder="Appartment, Family House" type="text" name="" id="" />
            </div>

            <div className="w-full">
            <p className="font-semibold flex items-center gap-1"><MdAttachMoney></MdAttachMoney> Budget</p>
            <input className="w-full p-3 bg-gradient-to-r from-lime-50 to-green-50 outline-none border-b-2 border-blue-600" placeholder="$10000 - $20000" type="text" name="" id="" />
            </div>

            <div>
                <Link className="font-semibold transition duration-300 bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white">Search</Link>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
