
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import React from "react";
import Header from "./include/Header"; 
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import certificate from "../src/assets/images/certificate.svg";
// import youtube from "../src/assets/images/youtube.svg";
// import student from "../src/assets/images/student.svg";
// import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import Footer from "./include/Footer";
import Home1 from "./include/Home1";
import AboutELearning from "./include/AboutELearning";
import PesSkillAssesementbody from "./include/PesSkillAssesementbody";
import LearnHomeAutomation from "./include/LearnHomeAutomation";
import TimeForElearning from "./include/TimeForElearning";
import CountSectionHome from "./include/CountSectionHome";
import FeedbackSection from "./include/FeedbackSection";
import RegistrationCourse from "./include/RegistrationCourse";
import FAQSection from "./include/FAQSection";
import HomeSubscription from "./include/HomeSubscription";



function MainPage(){

    // optional if u write className="CheckCircleIconStyle"
    // const CheckCircleIconStyle = {
    //     left: 0,
    //     fontSize: "20px",
    //     top: "1px"
    // }

    return (
        <>
            {/* navbar */}
            <Header/>

            {/* main home page top after navbar */}

            <Home1 />
    
            {/* about e-learning */}
            <AboutELearning />


            {/* Pes Skill Assesemnet Body */}
            <PesSkillAssesementbody />

            {/* LearnHome Automation */}
            <LearnHomeAutomation />

            {/* Time For E- learning */}
            <TimeForElearning />

            {/* Count Section Home */}
            <CountSectionHome />

            {/* Feedback Section */}
            <FeedbackSection />

            {/* Free Course Registration */}
            <RegistrationCourse />

            {/* FAQ (Frequently Asked Questions) Section */}
            <FAQSection />


            {/* Subscribe Newsletter */}
            <HomeSubscription />


            {/* footer */}
            <Footer/>
        </>
    );           
}
export default MainPage;