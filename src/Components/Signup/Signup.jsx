import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Signup = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const {signUp, updateProfileInfo} = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const isOwner = e.target.owner.value;
        const isRenter = e.target.renter.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phoneNumber.value;
        const password = e.target.password.value;
        console.log(isOwner, isRenter, email, name, phone, password);

        const toastId = toast.loading("Signing up...")

        signUp(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfileInfo(name)
        .then(() => {
          const userInfo = { name, email };
          axiosPublic.post("/users", userInfo)
          .then((res) => {
            console.log(res.data);

            if (res.data.insertedId) {
              toast.success("Signed up successfully.", { id: toastId });
              navigate(location?.state ? location.state : "/");
            }
          });
        });
      })
      .catch((error) => console.log(error))

      .catch((error) => {
        console.log(error);
      });
    }


  return (
    <div>
       <Helmet>
              <title>Rent Nest | Sign Up</title>
          </Helmet>
        <Navbar></Navbar>
        <div className="max-w-6xl mx-auto py-10">
      <div className="grid grid-cols-3 gap-10 items-center bg-white p-8 rounded-md shadow-md">
        <div className="col-span-2">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/8DFCXKp/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold">
                  Discover Your Dream Home: Join Us Today!
                </h1>
                <p className="mb-5">
                  Explore exclusive rentals and uncover your dream home! Your
                  perfect living space awaits, just a click away.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSignUp}>
        <div>
          <div className="flex justify-center items-center mb-5">
            <img className="w-40" src="https://i.ibb.co/7rX3hSD/logo.png" alt="" />
          </div>
          <h1 className="text-2xl font-bold text-gray-600 mb-2 text-center">
            Welcome to Rent Nest. Your all time believe in house rent
          </h1>
          <p className="mb-4 text-center">
            Already Have An Account?{" "}
            <Link to={"/signin"} className="text-blue-500 font-semibold">Sign in</Link>
          </p>

          <div>
            <div className="flex gap-4">
            <div className="mb-2 w-full">
              <div className="form-control bg-white border border-gray-400 outline-none px-2 rounded w-full">
                <label className="label cursor-pointer">
                  <span className="label-text">House Owner</span>
                  <input
                    type="radio"
                    name="owner"
                    className="radio checked:bg-blue-500"
                  />
                </label>
              </div>
            </div>

            <div className="mb-2 w-full">
              <div className="form-control bg-white border border-gray-400 outline-none px-2 rounded w-full">
                <label className="label cursor-pointer">
                  <span className="label-text">House Renter</span>
                  <input
                    type="radio"
                    name="renter"
                    className="radio checked:bg-blue-500"
                    
                  />
                </label>
              </div>
            </div>
            </div>
            

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
              <p className="mb-1 font-semibold text-gray-600">Your Email</p>
              <input
              name="email"
                className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                type="email"
                placeholder="rahul@gmail.com"
              />
            </div>

            <div className="mb-2">
              <p className="mb-1 font-semibold text-gray-600">Your Phone Number</p>
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
              <p className="mb-1 font-semibold text-gray-600">Password</p>
              <input
              name="password"
                className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                type="password"
                placeholder="*********"
              />
            </div>

            <div className="mb-5">
              <p className="mb-1 font-semibold text-gray-600">
                City of Residence
              </p>
              <select
                className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                name="city"
              >
                {" "}
                Select
                <option disabled selected>Select</option>
                <option value="Cumilla">Cumilla</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Dhaka">Dhaka</option>
              </select>
            </div>

            <button className="w-full font-semibold transition duration-300 bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white mb-3">
              Sign Up
            </button>
            <p className="text-center">
              Or, continue with{" "}
              <button className="text-blue-500 font-semibold">Google</button> or{" "}
              <button className="text-blue-500 font-semibold">Facebook</button>
            </p>
          </div>
        </div>
        </form>
      </div>
    </div>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
};

export default Signup;
