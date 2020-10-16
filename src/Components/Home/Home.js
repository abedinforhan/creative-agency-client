import React from 'react';
import CarouselContainer from './CarouselContainer/CarouselContainer';
import ClientFeedback from './ClientFeedback/ClientsFeedback';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css'
import Services from './ServiceSection/Services';
import SocialLinks from './SocialLinks/SocialLinks';

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <SocialLinks/>
      <Services/>
      <CarouselContainer/>
      <ClientFeedback/>
      <Footer/>
    

    </div>
  );
};

export default Home;