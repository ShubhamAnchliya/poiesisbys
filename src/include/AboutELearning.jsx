import React from "react";
import iot_bg_gif_hm_atmtn from "../assets/images/iot_bg_gif_hm_atmtn.gif";

function AboutELearning(){
    return(
        <>
            <section className ="about_us_section">
                <div className ="container">
                    <div className ="row m-0">
                    <div className ="col-md-7">
                        <div className ="title_head_about_us">
                        <h1 className ="mb-5 position-relative wow fadeInLeft" data-wow-delay=".24s" style={{lineHeight: "1.2"}}>
                            About
                            <br/>
                            <b style={{fontSize: "64px"}}>e-Learning</b>
                        </h1>
                        <p className ="wow fadeInLeft" data-wow-delay=".54s" style={{width: "75%"}}>
                            Assess, develop, and validate tech skills with structured training
                            plans, skill validation in live environments.
                        </p>
                        </div>

                        {/* <!-- ///card_2_about/// --> */}

                        <div className ="row m-0 py-5">
                        
                        <div className ="col-md-6 px-0 wow fadeInUp" data-wow-delay=".14s">
                            <div className ="shpe_border_about_sec_before wow zoomIn" data-wow-delay=".24s"></div>
                            <div className ="card_of_abt_page_sec">
                            <div className ="card_of_abt_page_sec_01">
                                <p className ="mt-2 mb-4 font-14 font-400">
                                Traditional approaches to training are no longer effective. Modern training.
                                </p>
                                <p className ="mt-2 mb-4 font-600 text-dark font-16">
                                Digital skills are built at the intersection of knowledge.
                                </p>

                                {/* <!-- //////waves///// --> */}

                            <div className ="col-md-12 p-0 the_Ser_waves_main">
                                <svg className ="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                                    <defs>
                                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                                    </defs>
                                    <g className ="parallax" style={{background: "rgba(169,190,255,0.17)"}}>
                                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(243,201,57,0.2" />
                                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(243,201,57,.3)" />
                                    </g>
                                </svg>
                            </div>

                               

                            </div>
                            </div>
                        </div>

                       

                        <div className ="col-md-6 px-0 wow fadeInUp" data-wow-delay=".24s" style={{marginLeft: '-70px' , marginTop: '140px'}}>
                            <div className ="shpe_border_about_sec_before_02 wow zoomIn" data-wow-delay=".54s"></div>
                            <div className ="card_of_abt_page_sec position-relative">
                            <div className ="card_of_abt_page_sec_01">
                                <p className ="mt-2 mb-4 mt-2 mb-4 font-600 text-dark font-16">
                                 Digital Skills
                                </p>
                                <p className ="mt-2 mb-4 font-14 font-400">
                                The fundamental building blocks of the
                                training templates in our Library meet teams
                                wherever they are along the cloud maturity
                                curve, imparting the knowledge.
                                </p>

                                {/* <!-- //////waves///// --> */}

                                <div className ="col-md-12 p-0 the_Ser_waves_main">
                                <svg className ="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                                    <defs>
                                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                                    </defs>
                                    <g className ="parallax" style={{background: "rgba(169,190,255,0.17)"}}>
                                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0,132,255,0.2" />
                                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,132,255,.3)" />
                                    </g>
                                </svg>
                                </div>

                               

                            </div>
                            </div>
                        </div>

                        </div>

                    </div>
                    <div className ="col-md-4 about_us_img_right wow fadeInRight" data-wow-delay=".18s" style={{zIndex: "999", height: "450px"}}>
                        <img src={iot_bg_gif_hm_atmtn} className ="position-absolute" style={{left:"-10%",  top: "25%" , maxWidth: "570px" }}/>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutELearning;