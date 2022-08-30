import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import AboutOurTeamMember from "./AboutOurTeamMember";

function AboutOurTeam() {
    return(
        <>

            <section className ="our_expert_section">
                <div className ="container">

                    <div className ="title_heading_expert_sec d-flex flex-wrap wow fadeInDown" data-wow-delay=".12s;">
                        <h1 className ="mx-auto d-inline-block position-relative text-center mb-5" style={{lineHeight: "1.2"}}>
                            Our
                            <b>Team</b>
                        </h1>
                    </div>

                    <div className ="row mx-0">

                        <div className ="col-md-12 wow fadeInUp" data-wow-delay=".12s">

                            <div className ="pb-0 pt-4 px-4" style={{overflow: "hidden"}}>

                                <ReactOwlCarousel className='owl-theme' loop margin={4} nav>
                                   
                                    <AboutOurTeamMember/>

                                </ReactOwlCarousel>

                            </div>

                        </div>

                    </div>
                
                </div>
            </section>

        </>
    );
};

export default AboutOurTeam;