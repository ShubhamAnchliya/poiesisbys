import React from "react";
import pes_skills_icon_ab_pg from "../assets/images/pes_skills_icon_ab_pg.svg";

function AboutPesAssessment() {
    return(
        <>
            <section className ="about_us_section_002">
                <div className ="container">
                    {/* <!-- ///card_2_about/// --> */}

                    <div className ="row m-0 py-5">
                        <div className ="col-md-7">
                            <div className ="row m-0">
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
                                                    viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                                                    <defs>
                                                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                                                    </defs>
                                                    <g className ="parallax" style={{background: "rgba(169,190,255,0.17)"}}>
                                                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(243,201,57,0.2" />
                                                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(243,201,57,.3)" />
                                                    </g>
                                                </svg>
                                            </div>
                                                     {/* <!-- //////////// --> */}
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- /////////// --> */}

                                <div className ="col-md-6 px-0 wow fadeInUp" data-wow-delay=".24s" style={{marginLeft: "-70px", marginTop: "140px" }}>
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
                                                <svg className ="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXink="http://www.w3.org/1999/xlink"
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
                                             {/* <!-- //////////// --> */}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* <!-- ///content on right/// --> */}

                        <div className ="col-md-5 wow fadeInRight" data-wow-delay=".14s">

                            <div className ="title_head_about_sec_02 text-right pr-4 mr-4">
                                <h4 className ="mb-5 position-relative">
                                    PeS skill
                                    <img className ="about_icon_contain_02" src={pes_skills_icon_ab_pg} />
                                    <br/>
                                    <b style={{fontSize: "36px"}}>Assessment</b>
                                </h4>          
                            </div>

                            <div className ="about_us_sec_02_details">
                                <div className ="my-2 w-100">
                                    <h5 className ="font-600">Our Organisation</h5>
                                    <p className ="font-400 font-14"> 
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        stempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven,
                                        consectetur adipisicing elit, sed do.            
                                    </p>
                                    <p className ="font-400 font-14"> 
                                        Magna aliqua. Ut enim ad minim ven,
                                        consectetur adipisicing elit, sed do eiusmod stempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven. cing elit, sed do eiusmod stempor incididunt ut labore et dolore magna aliqua ven.              
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default AboutPesAssessment;