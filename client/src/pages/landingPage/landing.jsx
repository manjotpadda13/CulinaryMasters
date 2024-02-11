import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import './landing.css';
import { useSpring, animated } from 'react-spring';
// import './components/landingPage/landing.css';

const LandingPage = () => {

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    
   

    <div>
      <Header />

      <animated.div className="App" style={fade}>
        <h2>Unleash Your Inner Culinary Masterpiece: Where Recipes Become Masterpieces!"</h2>
      </animated.div>

      <h6>

      Hi there, This is Culinary Masters. Our motive behind creating this website is for users to explore new dishes around the world with diffrent alternatives as well. Also a space where users are able to share your receipe with the world. I hope you enjoy what we've created

      </h6>

 
      

      <Footer />
    </div>

    
  );
};

export default LandingPage;