import { IoLocationSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { MdPool } from "react-icons/md";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { MdMergeType } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { useContext,  } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const FeatureHouseDetails = () => {
  const axiosPublic = useAxiosPublic();
  const {user} = useContext(AuthContext);
  const featuredHouseDetails = useLoaderData();
  const {_id, img, title, description, city, bedrooms, bathrooms, availability, size, price, rating, houseType} = featuredHouseDetails;

  
  const handleReserveHouse = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const location = e.target.location.value;
    const person = e.target.person.value;
    const phoneNumber = e.target.phoneNumber.value;
    const date = e.target.date.value;
    const email = user.email;
  
    const reserveInfo = { name, location, person, phoneNumber, date, email };
    const toastId = toast.loading("Reserving...");
    axiosPublic.post("/reservedHouse", reserveInfo)
      .then((res) => {
        console.log(res.data);
  
        if (res.data.insertedId) {
          toast.success("Reserved successfully.", { id: toastId });
        }
        else {
          // Handle unexpected response
          console.error("Unexpected response:", res);
          toast.error("You Cannot reserve more than 2 house at a time!", { id: toastId });
        }
  
      })
      .catch((error) => {
        console.error("Reservation error:", error);
  
        const errorMessage =
          error.response?.data?.message || "An error occurred while reserving.";
  
        toast.error(errorMessage, { id: toastId });
      });
  };
  return (
    <div>
       <Helmet>
              <title>Rent Nest | {title}</title>
          </Helmet>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto py-10">
      {/* Breadcumber menu */}
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>All House</li>
        </ul>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-600">
            {title}
          </h1>
          <div className="flex items-center gap-3">
            <p className="text-gray-600 flex items-center gap-1 text-sm">
              <IoLocationSharp></IoLocationSharp> {city},
            </p>
            <FaStar className="text-yellow-500"></FaStar> ({rating})
          </div>
          <div className="flex items-center gap-3">
            <p className="text-gray-600 flex items-center gap-1 text-sm">
              <MdMergeType></MdMergeType> {houseType}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <IoShareSocialSharp className="bg-white rounded-full w-7 h-7 border border-gray-400 p-1"></IoShareSocialSharp>
          <BsThreeDots className="bg-white rounded-full w-7 h-7 border border-gray-400 p-1"></BsThreeDots>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10">
        <img
          className="rounded-xl col-span-2"
          src={img}
          alt=""
        />

        <div className="bg-white shadow-xl p-4 rounded-xl">
          <form onSubmit={handleReserveHouse}>
            <div>
              <div>
                <div className="mb-2">
                  <p className="mb-1 font-semibold text-gray-600">Your Name</p>
                  <input
                    name="name"
                    className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                    type="text"
                    placeholder="Rahul Sutradhar"
                  />
                </div>

                <div className="mb-2">
                  <p className="mb-1 font-semibold text-gray-600">
                    Your Location
                  </p>
                  <input
                    name="location"
                    className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                    type="text"
                    placeholder="Cumilla"
                  />
                </div>

                <div className="mb-2">
                  <p className="mb-1 font-semibold text-gray-600">Person</p>
                  <input
                    name="person"
                    className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                    type="number"
                    placeholder="1"
                  />
                </div>

                <div className="mb-2">
                  <p className="mb-1 font-semibold text-gray-600">
                    Your Phone Number
                  </p>
                  <div className="flex gap-3 w-full">
                    <select
                      className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-20"
                      value="Select"
                    >
                      {" "}
                      Select
                      <option value="+880">+880</option>
                    </select>
                    <input
                      name="phoneNumber"
                      className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                      type="text"
                      placeholder="1608249337"
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <p className="mb-1 font-semibold text-gray-600">
                    Check In Date
                  </p>
                  <input
                    name="date"
                    className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                    type="date"
                    placeholder="Date"
                  />
                </div>
                <div className="bg-gradient-to-r from-lime-50 to-green-50 p-3 rounded-lg flex justify-between items-center font-semibold mt-4 mb-4">
                  <p>Price For This:</p>
                  <p>${price} / Month</p>
                </div>
                <button className="w-full font-semibold transition duration-300 bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white mb-3">
                  Reserve
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-10">
        <div className="col-span-2">
          <p className="text-gray-600 font-bold text-2xl mb-2">
            About This House
          </p>
          <p className="text-gray-600 text-justify">
            {description}
          </p>
        </div>

        <div className="col-span-2 mt-5">
          <p className="text-gray-600 font-bold text-2xl mb-2">Facilities</p>
          <div className="flex gap-5 items-center">
            <div className="border border-gray-400 px-2 py-1 rounded-md text-gray-500 font-semibold">
              <p className="flex items-center gap-2">
                <FaWifi></FaWifi> Free Wifi
              </p>
            </div>
            <div className="border border-gray-400 px-2 py-1 rounded-md text-gray-500 font-semibold">
              <p className="flex items-center gap-2">
                <MdOutlineBedroomParent></MdOutlineBedroomParent> {bedrooms} Bedrooms
              </p>
            </div>
            <div className="border border-gray-400 px-2 py-1 rounded-md text-gray-500 font-semibold">
              <p className="flex items-center gap-2">
                <MdOutlineBathroom></MdOutlineBathroom> {bathrooms} Bathrooms
              </p>
            </div>
            <div className="border border-gray-400 px-2 py-1 rounded-md text-gray-500 font-semibold">
              <p className="flex items-center gap-2">
                <MdPool></MdPool> 1 Swiming Pool
              </p>
            </div>
            <div className="border border-gray-400 px-2 py-1 rounded-md text-gray-500 font-semibold">
              <p className="flex items-center gap-2">
                <MdPhotoSizeSelectLarge></MdPhotoSizeSelectLarge> {size}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default FeatureHouseDetails;