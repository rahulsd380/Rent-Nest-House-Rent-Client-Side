import { IoLocationSharp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";
import useFeaturedHouse from "../../hooks/useFeaturedHouse";


const FeaturedHouses = () => {
    const [featuredHouse] = useFeaturedHouse();
    return (
        <div className="max-w-7xl mx-auto mb-10">
            <div>
                <h1 className="text-3xl font-bold text-gray-600 text-center">Our Featured Houses</h1>
                <p className="text-center text-gray-500 mb-10">Welcome to "Our Featured Houses" – a curated selection of exceptional homes. Discover modern luxury <br /> and convenience in every listing. Find your dream home with us today</p>
            </div>
            <div className="grid grid-cols-4 gap-10">
      {
        featuredHouse.map(house => <Link to={`/featuredHouseDetails/${house._id}`} key={house._id}>
        <div className="group overflow-hidden transition-transform duration-300 ease-out transform hover:-translate-y-1 cursor-pointer">
            <div className="bg-gray-200 p-3 rounded-xl flex justify-center items-center">
            <img className="rounded-xl h-52" src={house.img} alt="" />
            </div>
            <h1 className="text-xl font-bold text-gray-700 mt-1">{house.title}</h1>
            <p className="text-gray-600 flex items-center gap-1 text-sm"><IoLocationSharp></IoLocationSharp> {house.city}</p>
            <p className="font-semibold text-sm flex items-center gap-1"><MdAttachMoney></MdAttachMoney> {house.price} / Month</p>
        </div>
    </Link>)
      }
      </div>

        <div className="flex justify-center items-center mt-10">
        <Link to={"/allHouses"} className="font-semibold transition duration-300 bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white">View All Houses</Link>
        </div>
        </div>
    );
};

export default FeaturedHouses;