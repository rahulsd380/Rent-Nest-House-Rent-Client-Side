import { IoLocationSharp } from "react-icons/io5";
import useAllHouse from "../../Hooks/useAllHouse";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AllHouses = () => {
  const [search, setSearch] = useState('');
const [allHouse] = useAllHouse(search);
const handleSearch = (e) => {
  e.preventDefault();
  const searchValue = e.target.searchValue.value;
  console.log(searchValue);
  setSearch(searchValue)
}


const [sortByCity, setSortByCity] = useState(null);
const [sortByBedrooms, setSortByBedrooms] = useState(null);
const [sortByBathrooms, setSortByBathrooms] = useState(null);
const [sortByAvailability, setSortByAvailability] = useState(null);
const [sortBySize, setSortBySize] = useState(null);

const handleSortByCity = (city) => {
  setSortByCity(city);
};




const handleSortByBedrooms = (bedrooms) => {
  setSortByBedrooms(bedrooms);
};

const handleSortByBathrooms = (bathrooms) => {
  setSortByBathrooms(bathrooms);
};


const handleSortByAvailability = (availability) => {
  setSortByAvailability(availability);
};



const handleSizeChange = (size) => {
  setSortBySize(size);
};

// Filter houses based on the selected city
const filteredHouses = allHouse.filter((house) => {
  const cityMatch = !sortByCity || house.city === sortByCity;
  const bedroomsMatch = !sortByBedrooms || house.bedrooms === sortByBedrooms;
  const bathroomsMatch = !sortByBathrooms || house.bathrooms === sortByBathrooms;
  const availabilityMatch = !sortByAvailability || house.availability === sortByAvailability;
  const sizeMatch = !sortBySize || Number(house.size) === Number(sortBySize);

  return cityMatch && bedroomsMatch && bathroomsMatch && availabilityMatch && sizeMatch;
});

  return (
    <div>
       <Helmet>
              <title>Rent Nest | Available House</title>
          </Helmet>
      <Navbar></Navbar>
      <div className="py-10">
          <h1 className="text-3xl font-bold text-gray-600 text-center">
            Our Avaibalbe Houses
          </h1>
          <p className="text-center">Our Available Houses is a concise phrase denoting a curated collection of currently open and ready-to-occupy residential <br /> properties. It provides key details for individuals seeking housing options.</p>
        </div>
      <div className="max-w-7xl mx-auto">
      
      <div className="py-10 flex items-center justify-between gap-10">
        


        

        <div className="flex items-center gap-5">
            {/* City filtering dropdown */}
        <details className="dropdown">
          <summary className="bg-white border border-blue-300 hover:cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 p-2 rounded-md flex items-center gap-3">
            City <IoIosArrowDown></IoIosArrowDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => handleSortByCity('Dhaka')}>Dhaka</a>
            </li>
            <li>
              <a onClick={() => handleSortByCity('Khulna')}>Khulna</a>
            </li>
            <li>
              <a onClick={() => handleSortByCity('Chittagong')}>Chittagong</a>
            </li>
            <li>
              <a onClick={() => handleSortByCity('Mymensingh')}>Mymensingh</a>
            </li>
            <li>
              <a onClick={() => handleSortByCity('Sylhet')}>Sylhet</a>
            </li>
            <li>
              <a onClick={() => handleSortByCity('Barisal')}>Barisal</a>
            </li>
            <li>
              <a onClick={() => handleSortByCity('Rajshahi')}>Rajshahi</a>
            </li>
          </ul>
        </details>

        {/* Availability filtering dropdown */}
        <details className="dropdown">
          <summary onClick={() => handleSortByAvailability('Available')} className="bg-white border border-blue-300 hover:cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 p-2 rounded-md flex items-center gap-3">
            Availability <IoIosArrowDown></IoIosArrowDown>
          </summary>
        </details>

        {/* Bedroom filtering dropdown */}
        <details className="dropdown">
          <summary className="bg-white border border-blue-300 hover:cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 p-2 rounded-md flex items-center gap-3">
            Bedrooms <IoIosArrowDown></IoIosArrowDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => handleSortByBedrooms(1)}>1</a>
            </li>
            <li>
              <a onClick={() => handleSortByBedrooms(2)}>2</a>
            </li>
            <li>
              <a onClick={() => handleSortByBedrooms(3)}>3</a>
            </li>
            <li>
              <a onClick={() => handleSortByBedrooms(4)}>4</a>
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
              <a onClick={() => handleSortByBathrooms(1)}>1</a>
            </li>
            <li>
              <a onClick={() => handleSortByBathrooms(2)}>2</a>
            </li>
            <li>
              <a onClick={() => handleSortByBathrooms(3)}>3</a>
            </li>
            <li>
              <a onClick={() => handleSortByBathrooms(4)}>4</a>
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
              <a onClick={() => handleSizeChange('1000')}>1,000 sq ft</a>
            </li>
            <li>
              <a>1500</a>
            </li>
            <li>
              <a>2000</a>
            </li>
          </ul>
        </details>

       
        </div>



        <form onSubmit={handleSearch} className="w-full">
      <div className="flex items-center w-full">
              <input
              name="searchValue"
                className="bg-white border border-gray-400 outline-none px-4 py-2 w-full"
                type="text"
                placeholder="Find House"
              />
              <button className="w-20 border border-blue-500 font-semibold transition duration-300 bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white">
              Search
            </button>
            </div>
      </form>
      </div>


      <div className="grid grid-cols-4 gap-10">
      {
        filteredHouses.map(house => <Link to={`/allHouseDetails/${house._id}`} key={house._id}>
        <div className="group overflow-hidden transition-transform duration-300 ease-out transform hover:-translate-y-1 cursor-pointer">
            <div className="bg-gray-200 p-3 rounded-xl flex justify-center items-center">
            <img className="rounded-xl h-52" src={house.img} alt="" />
            </div>
            <h1 className="text-xl font-bold text-gray-700 mt-1">{house.title}</h1>
            <p className="text-gray-600 flex items-center gap-1 text-sm"><IoLocationSharp></IoLocationSharp> {house.city}</p>
            <p className="font-semibold text-sm flex items-center gap-1"><MdAttachMoney></MdAttachMoney> {house.price} / Month</p>
            <p>{house.size}</p>
        </div>
    </Link>)
      }
      </div>
      </div>
    </div>
  );
};

export default AllHouses;
