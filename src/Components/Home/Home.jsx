
import FeaturedHouses from '../FeaturedHouses/FeaturedHouses';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <FeaturedHouses></FeaturedHouses>
        </div>
    );
};

export default Home;