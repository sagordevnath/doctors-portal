import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import Treatment from "./Treatment";
import MakeAppoinment from "./MakeAppoinment";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "../Shared/Footer";


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <Treatment></Treatment>
        <MakeAppoinment></MakeAppoinment>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
};

export default Home;
