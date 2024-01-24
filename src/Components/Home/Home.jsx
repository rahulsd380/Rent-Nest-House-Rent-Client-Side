import { Helmet } from 'react-helmet-async';
import Aboutus from '../Aboutus/Aboutus';
import Banner from '../Banner/Banner';
import FeaturedHouses from '../FeaturedHouses/FeaturedHouses';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Helmet>
              <title>Rent Nest | Home</title>
          </Helmet>
            <Navbar></Navbar>
            <Hero></Hero>
            <Aboutus></Aboutus>
            <FeaturedHouses></FeaturedHouses>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;