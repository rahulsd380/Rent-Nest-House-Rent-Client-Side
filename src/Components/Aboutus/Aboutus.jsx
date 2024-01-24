import { Link } from "react-router-dom";


const Aboutus = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto py-10">
            <div>
                <h1 className="text-3xl font-bold text-gray-600 text-center">Who We Are?</h1>
                <p className="text-center text-gray-500 mb-10">We're your go-to house rental destination, making finding your dream <br /> home a breeze. Welcome to seamless living with Rent Nest</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center border bg-gradient-to-r from-blue-50 to-blue-50 border-gray-300 p-4 rounded-xl w-full gap-10">
                <div className="w-full">
                <img className="rounded-lg" src="https://i.ibb.co/8DFCXKp/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg" alt="" />
                </div>

                <div>
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent mb-3 md:mb-5">Redefining Home Rental Experiences with Rent Nest</h1>
                    <p className="text-gray-500 mb-8">Embark on a transformative journey as an instructor, guiding learners worldwide. Unleash your expertise, craft compelling courses, and foster a vibrant community of knowledge seekers. Join a platform that values your insights, empowering you to shape minds, enrich lives, and contribute to a global education revolution.</p>
                    <button className="font-semibold transition duration-300 bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white mb-3">
              Learn More
            </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Aboutus;