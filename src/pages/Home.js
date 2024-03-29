import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import  Services  from "../components/Services";
import FeaturedRooms from '../components/FeaturedRooms';
import {Link} from 'react-router-dom';

const Home = () =>{
  return(
    <>

      <Hero> {/*we dont need to specify hero="defaultHero because its default"*/}
        <Banner title="luxorious rooms" subtitle="deluxe rooms starting at $299">
          <Link to="/rooms" className = 'btn-primary'>our rooms</Link>
        </Banner>
      </Hero>
      <Services/>
      <FeaturedRooms/>
    </>
  )
}
export default Home;