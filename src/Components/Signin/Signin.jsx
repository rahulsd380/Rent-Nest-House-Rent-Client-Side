import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const Signin = () => {
    const location = useLocation();
  const navigate = useNavigate();
    const {signin, googleSignUp} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();


  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    const toastId = toast.loading("Login...")

    signin(email, password)
    .then(result => {
        console.log(result.user);
        toast.success('Logged in successfully.', { id: toastId})
        navigate(location?.state? location.state : "/")
    })
    .catch(error => {
        console.error(error);
    })
    
}

    const googleSignIn = () => {
      googleSignUp()
      .then(result => {
          console.log(result.user);
          const userInfo = {
              name: result.user?.displayName,
              email: result.user?.email
          }
          axiosPublic.post('/users',userInfo )
          .then(res => {
              console.log(res);
              navigate(location?.state? location.state : "/")
          })
      })
  }
  return (
    <div>
       <Helmet>
              <title>Rent Nest | Sign In</title>
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
        <form onSubmit={handleLogin}>
            <div>
          <div className="flex justify-center items-center mb-5">
            <img className="w-40" src="https://i.ibb.co/7rX3hSD/logo.png" alt="" />
          </div>
          <h1 className="text-2xl font-bold text-gray-600 mb-2 text-center">
            Welcome to Rent Nest. Your all time believe in house rent
          </h1>
          <p className="mb-4 text-center">
            Don't Have An Account?{" "}
            <Link to={"/signup"} className="text-blue-500 font-semibold">Sign Up</Link>
          </p>

          <div>

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
              <p className="mb-1 font-semibold text-gray-600">Password</p>
              <input
              name="password"
                className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                type="password"
                placeholder="*********"
              />
            </div>

            <button className="w-full font-semibold transition duration-300 bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white mb-3">
              Sign In
            </button>
            <p className="text-center">
              Or, continue with{" "}
              <button onClick={googleSignIn} className="text-blue-500 font-semibold">Google</button> or{" "}
              <button className="text-blue-500 font-semibold">Facebook</button>
            </p>
          </div>
        </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signin;
