import React from "react";
import Nav from "../Component/Home/Nav";
import Slider from "../Component/Home/Slider";
import Class from "../../src/Component/Home/Class";
import Review from "../../src/Component/Home/Review";
import Portfolio from "../../src/Component/Home/Portfolio";
import Workshop from "../../src/Component/Home/Workshop";
import Contact from "../../src/Component/Home/Contact";
import Footer from "../Component/Home/Footer";
function Index(){
    return(
        <div>
            <Nav/>
            <Slider/>
            <Class/>
            <Review/>
            <Portfolio />
            <Workshop/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default Index;