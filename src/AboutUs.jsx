import React from "react";
import Header from "./include/Header";
import AboutPoiesis from "./include/AboutPoiesis";
import AboutPesAssessment from "./include/AboutPesAssessment";
import AboutPesFounder from "./include/AboutPesFounder";
import AboutOurTeam from "./include/AboutOurTeam";
import Footer from "./include/Footer";

function AboutUs() {
    return(
        <>
            {/* header navbar */}
            <Header />

            {/* About Poiesis */}
            <AboutPoiesis />

            {/* ABout Pes Skill Assessment Organisation */}
            <AboutPesAssessment />


            {/* About Pes Founder */}
            <AboutPesFounder/>


            {/* About Our Team */}
            <AboutOurTeam />


            {/* Footer */}
            <Footer />


            


        </>
    );
};


export default AboutUs;