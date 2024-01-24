
import { useContext, useState } from "react";
import Header from "../../Header/Header";
import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";


const AddNewHouse = () => {
    const {user} = useContext(AuthContext);
    const [selectedBedrooms, setSelectedBedrooms] = useState("Select");
    const [city, setCity] = useState("Select");
    const [bathroom, setBathroom] = useState("Select");
    const axiosPublic = useAxiosPublic();

    const handleBedroomsChange = (e) => {
      setSelectedBedrooms(e.target.value);
    };

    const handleCityChange = (e) => {
      setCity(e.target.value);
    };

    const handleBathroomChange = (e) => {
        setBathroom(e.target.value);
    };


    const handleReserveHouse = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const address = e.target.address.value;
        const city = e.target.city.value;
        const bedrooms = e.target.bedrooms.value;
        const bathrooms = e.target.bathrooms.value;
        const size = e.target.size.value;
        const availablity = e.target.availablity.value;
        const phoneNumber = e.target.phoneNumber.value;
        const email = user.email;
      
        const houseInfo = { title, address, city, bedrooms, bathrooms, size, availablity, phoneNumber, email };
        const toastId = toast.loading("Adding...");
        axiosPublic.post("/allHouse", houseInfo)
          .then((res) => {
            console.log(res.data);
      
            if (res.data.insertedId) {
              toast.success("Added Successfully.", { id: toastId });
            }
      
          })
          .catch((error) => {
            console.error(error);
          });
      };
    return (
        <div>
           <Helmet>
              <title>Dashboard | Add New House</title>
          </Helmet>
            <Header></Header>
            <div className="max-w-6xl mx-auto py-10">
      <div className="grid grid-cols-3 gap-10 items-center bg-white p-8 rounded-md shadow-md">

        <form onSubmit={handleReserveHouse} className="col-span-2">
        <div>
          <div className="flex justify-center items-center mb-5">
            <img className="w-40" src="https://i.ibb.co/7rX3hSD/logo.png" alt="" />
          </div>
          <h1 className="text-2xl font-bold text-gray-600 mb-2 text-center">
            Upload A New house For Rent
          </h1>

          <div>

            <div className="mb-2">
              <p className="mb-1 font-semibold text-gray-600">House Title</p>
              <input
              name="title"
                className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                type="text"
                placeholder="Apartment Villa"
              />
            </div>

            <div className="mb-2">
              <p className="mb-1 font-semibold text-gray-600">Address</p>
              <input
              name="address"
                className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                type="text"
                placeholder="Cumilla, Bangladesh"
              />
            </div>



            <div className="mb-2">
              <p className="mb-1 font-semibold text-gray-600">City</p>
              <div className="flex gap-3 w-full">
              <select
              name="city"
              value={city}
              onChange={handleCityChange}
                className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
              >
                {" "}
                Select
                <option selected disabled>Select</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Cumilla">Cumilla</option>
                <option value="Khulna">Khulna</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Barisal">Barisal</option>
              </select>
              </div>
            </div>

            <div className="flex gap-5">
            
            <div className="mb-2 w-full">
              <p className="mb-1 font-semibold text-gray-600">Bedrooms</p>
              <div className="flex gap-3 w-full">
              <select
              name="bedrooms"
                  value={selectedBedrooms}
                  onChange={handleBedroomsChange}
                  className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="2">3</option>
                  <option value="2">4</option>
                  <option value="2">5</option>
                </select>
              </div>
            </div>
            <div className="mb-2 w-full">
              <p className="mb-1 font-semibold text-gray-600">Bathrooms</p>
              <div className="flex gap-3 w-full">
              <select
              name="bathrooms"
              value={bathroom}
              onChange={handleBathroomChange}
                className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
              >
                {" "}
                Select
                 <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="2">3</option>
                  <option value="2">4</option>
                  <option value="2">5</option>
              </select>
              </div>
            </div>
            </div>


            <div className="flex gap-5">
            
            <div className="mb-2 w-full">
              <p className="mb-1 font-semibold text-gray-600">Size</p>
              <input
              name="size"
                className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                type="text"
                placeholder="1000 sq ft"
              />
            </div>
            <div className="mb-2 w-full">
              <p className="mb-1 font-semibold text-gray-600">Availablity</p>
              <input
              name="availablity"
                className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                type="date"
              />
            </div>
            </div>

            <div className="mb-2">
              <p className="mb-1 font-semibold text-gray-600">Your Phone Number</p>
              <div className="flex gap-3 w-full">
              <select
              name="phoneNumber"
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
              <p className="mb-1 font-semibold text-gray-600">Price / Month</p>
              <input
              name="price"
                className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                type="number"
                placeholder="434"
              />
            </div>

            <div className="mb-2">
              <p className="mb-1 font-semibold text-gray-600">Image URL</p>
              <input
              name="image"
                className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                type="text"
                placeholder="xyz.com"
              />
            </div>

            <div className="mb-5">
              <p className="mb-1 font-semibold text-gray-600">
                Description
              </p>
              <textarea className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full mb-2" name="description" id="" cols="30" rows="10"></textarea>
            </div>

            <button className="w-full font-semibold transition duration-300 bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white mb-3">
              Submit
            </button>
          </div>
        </div>
        </form>
      </div>
    </div>
    <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default AddNewHouse;