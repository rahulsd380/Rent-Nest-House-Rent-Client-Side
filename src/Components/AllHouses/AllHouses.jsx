import { IoLocationSharp } from "react-icons/io5";
import useAllHouse from "../../Hooks/useAllHouse";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";

const AllHouses = () => {
const [allHouse] = useAllHouse();
  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-7xl mx-auto">
      <div className="py-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-blue-600"></div>
          <h1 className="text-3xl font-bold text-gray-600">
            Our Avaibalbe Houses
          </h1>
        </div>

        <div className="flex items-center gap-5">
            {/* City filtering dropdown */}
        <details className="dropdown">
          <summary className="bg-white border border-blue-300 hover:cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 p-2 rounded-md flex items-center gap-3">
            City <IoIosArrowDown></IoIosArrowDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Cumilla</a>
            </li>
            <li>
              <a>Dhaka</a>
            </li>
            <li>
              <a>CHattagram</a>
            </li>
          </ul>
        </details>

        {/* Availability filtering dropdown */}
        <details className="dropdown">
          <summary className="bg-white border border-blue-300 hover:cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 p-2 rounded-md flex items-center gap-3">
            Availability <IoIosArrowDown></IoIosArrowDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>25 Jan - 29 Jan</a>
            </li>
            <li>
              <a>29 Jan - 2 Feb</a>
            </li>
            <li>
              <a>2 Feb - 5 Feb</a>
            </li>
          </ul>
        </details>

        {/* Bedroom filtering dropdown */}
        <details className="dropdown">
          <summary className="bg-white border border-blue-300 hover:cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 p-2 rounded-md flex items-center gap-3">
            Bedrooms <IoIosArrowDown></IoIosArrowDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>1</a>
            </li>
            <li>
              <a>2</a>
            </li>
            <li>
              <a>3</a>
            </li>
            <li>
              <a>4</a>
            </li>
          </ul>
        </details>

        {/* Bathrooms filtering dropdown */}
        <details className="dropdown">
          <summary className="bg-white border border-blue-300 hover:cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 p-2 rounded-md flex items-center gap-3">
            Bathrooms <IoIosArrowDown></IoIosArrowDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>1</a>
            </li>
            <li>
              <a>2</a>
            </li>
            <li>
              <a>3</a>
            </li>
            <li>
              <a>4</a>
            </li>
          </ul>
        </details>

        {/* Size filtering dropdown */}
        <details className="dropdown">
          <summary className="bg-white border border-blue-300 hover:cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 p-2 rounded-md flex items-center gap-3">
            Size <IoIosArrowDown></IoIosArrowDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Small (Single): 10 ft x 12 ft (3.0 m x 3.7 m)</a>
            </li>
            <li>
              <a>Medium (Double): 12 ft x 16 ft (3.7 m x 4.9 m)</a>
            </li>
            <li>
              <a>Large (Master): 15 ft x 20 ft (4.6 m x 6.1 m)</a>
            </li>
          </ul>
        </details>

        <div>
            {/* Cost filtering */}
        <input
          type="range"
          min={0}
          max="100"
          value="25"
          className="range"
          step="25"
        />
        <div className="flex justify-between text-xs px-2">
          <span>$200 - $300</span>
          <span>$300 - $350</span>
          <span>$350 - $400</span>
          <span>$400 - $500</span>
        </div>
        </div>
        </div>
      </div>


      <div className="grid grid-cols-4 gap-10">
      {
        allHouse.map(house => <div key={house._id}>
        <div className="group overflow-hidden transition-transform duration-300 ease-out transform hover:-translate-y-1 cursor-pointer">
            <div className="bg-gray-200 p-3 rounded-xl flex justify-center items-center">
            <img className="rounded-xl h-52" src={house.img} alt="" />
            </div>
            <h1 className="text-xl font-bold text-gray-700 mt-1">{house.title}</h1>
            <p className="text-gray-600 flex items-center gap-1 text-sm"><IoLocationSharp></IoLocationSharp> {house.city}</p>
            <p className="font-semibold text-sm flex items-center gap-1"><MdAttachMoney></MdAttachMoney> {house.price} / Month</p>
        </div>
    </div>)
      }
      </div>
      </div>
    </div>
  );
};

export default AllHouses;
