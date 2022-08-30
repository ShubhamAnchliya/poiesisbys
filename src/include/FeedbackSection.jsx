import React from "react";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ReactOwlCarousel from 'react-owl-carousel';
import  "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import FeedbackStudCards from "./FeedbackStudCards";

// added this in html to use owl carousel
{/* <script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script> */}


function FeedbackSection() {
    return(
        <>

            <section className ="feedback_section">
                <div className ="container">

                    <div className ="title_heading_expert_sec d-flex flex-wrap wow fadeInDown" data-wow-delay=".12s;">
                        <h1 className ="mx-auto d-inline-block position-relative text-center mb-5" style={{lineHeight: "1.2"}}>
                            What Our
                            <b>Students Said</b>
                        </h1>
                    </div>

                    <div className ="row mx-0">
                        <div className ="col-md-12 wow fadeInUp" data-wow-delay=".12s">
                            <div className ="py-4 px-4" style={{overflow: "hidden"}}>
                                {/* <div className ="owl-carousel owl-carousel-feedback-section" id="owl-carousel-expert-section-id"> */}
                                <ReactOwlCarousel className='owl-theme' loop margin={10} nav>

                                   <FeedbackStudCards/>

                                {/* </div> */}
                                </ReactOwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default FeedbackSection;