import React, { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Program from "./Component/Programs/Program";
import Title from "./Component/Title/Title";
import About from "./Component/About/About";
import Campus from "./Component/Campus/Campus";
import Testimonials from "./Component/Testimonials/Testimonials";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import VideoPlayer from "./Component/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" Title="What We Offer" />
        <Program />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" Title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" Title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" Title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
