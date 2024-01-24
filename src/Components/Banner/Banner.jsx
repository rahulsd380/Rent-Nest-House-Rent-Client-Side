

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto py-10">
                {/* Banner */}
      <div className="w-full rounded-3xl">
        <div className="relative w-full rounded-3xl">
          <img
            src="https://i.ibb.co/8DFCXKp/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg"
            className="rounded-3xl h-72 w-full"
          />

          <div className="rounded-3xl absolute top-0 bottom-0 flex items-center px-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="space-y-3">
              <p className="text-lg text-white">Rent House</p>
              <h1 className="text-4xl font-bold textwhite text-white">
              Discover Your Dream Home: Your Ideal Rental Awaits!
              </h1>
              <p className="text-white">
              Explore our curated rentals for the perfect home. Comfort, convenience, and style await you. Start your journey with us today!
              </p>
              <p className="text-xl text-white">$221</p>
              <button className="bg-blue-500 hover:bg-blue-600 transition duration-300 p-2 rounded-md text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;