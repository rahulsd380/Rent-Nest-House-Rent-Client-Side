import useMyHouse from "../../../../hooks/useMyHouse";
import { IoLocationSharp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import Header from "../../Header/Header";


const ManageMyHouse = () => {
    const [allHouse] = useMyHouse();
console.log(allHouse);
    return (
        <div>
            <Header></Header>
            <h1 className="text-2xl font-bold text-gray-500 mb-3">My Houses</h1>
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
            <p>{house.size}</p>
        </div>
    </div>)
      }
      </div>
        </div>
    );
};

export default ManageMyHouse;