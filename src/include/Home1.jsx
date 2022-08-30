import React from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import certificate from "../assets/images/certificate.svg";
import youtube from "../assets/images/youtube.svg";
import student from "../assets/images/student.svg";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

function Home1() {
    const CheckCircleIconStyle = {
        left: 0,
        fontSize: "20px",
        top: "1px"
    }
    return(
        <>
            <header className ="d-flex flex-wrap wow fadeInDown" data-wow-delay=".07s">

                <div className="top_banner_Section">
                    <div className="the_banner_bg_overlay_img"></div>

                    <div className="container-fluid">

                        <div className="row mx-0 mt-5 pt-4">

                            <div className="col-md-4 wow fadeInDown" data-wow-delay=".1s">
                                <div className="top_banner_title position-relative mt-4">
                                    <h3 className="text-dark position-relative d-inline-block m-0">
                                        <span className="first_sign">"</span>
                                        Build hands-on technical skills.
                                    </h3>
                                    <br/>
                                    <h3 className="text-dark position-relative d-inline-block m-0">
                                        Drive measurable results.
                                        <span className="last_sign">"</span>
                                    </h3>
                                </div>
                                <p className="text-dark pt-4 font-500 w-100 font-15">
                                    Assess, develop, and validate tech skills with structured training plans, skill validation in live environments,
                                </p>
                                    
                                <div className="mt-5 mb-0">
                                    
                                        <button type="button" className="btn btn-primary border-radius-lg btn-white mr-0 ml-0 py-3 px-3 w-50 font-14 mb-0 float-left font-500" style={{boxShadow: '0 12px 24px rgba(0,0,0,.09)'}}>
                                            <span className="p-0">
                                                Let's Join
                                            </span>
                                        </button>
                                        
                                        <a id="play-video" className="video-play-button text-dark mr-0 ml-0 w-50 font-14 mb-0 float-left font-500" href="#">
                                            <span className="p-3 d-flex ml-2 font-15 font-600">
                                                Watch Preview                  
                                            </span>
                                            <span className="vid_ply_btn_icon"><PlayArrowIcon/></span>
                                        </a>
                                    
                                    </div>

                            </div>

                            <div className="col-md-8 image_mob_tp_banner_sec wow fadeInUp" data-wow-delay=".12s">

                                <div className=" py-4 pb-5 px-0" style={{overflow: "hidden"}}>

                                    <div className="row mx-0">

                                        <div className="col-md-4 card_of_tp_banner wow fadeInUp p-3" data-wow-delay=".24s">
                                            <div className="card_of_tp_banner_01 position-relative">
                                                <h6 className="text-dark font-600 card_tp_baner_tp_heading">PeS skill<br/>Assessment</h6>
                                                <div className="tp_banner_card_icons_all">
                                                    <img className="img-fluid" src={certificate} />
                                                </div>
                                                <p className="text-green mb-3 mt-4 position-relative pl-4">
                                                    {/* <span className="material-icons position-absolute" style={{left: "0",fontSize: "20px",top: "1px"}}><CheckCircleIcon /></span> */}
                                                    <span className="material-icons position-absolute" 
                                                        style={CheckCircleIconStyle}  //can use with css style above in function
                                                    >
                                                        <CheckCircleIcon />
                                                    </span>                                  
                                                    7-day free trial
                                                </p>
                                                <p className="mt-2 font-400 mb-4 pb-2">
                                                    Take the free PeS skill assessment test to earn an industry recognized IoT certification.
                                                </p>
                                                <div className="visit_btn_dv_contn">
                                                    <a href="#!" className="mt-4 text-btn visit_link_a_tg">Visit Now <span className="material-icons"><OpenInNewIcon /></span></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 card_of_tp_banner wow fadeInUp p-3" data-wow-delay=".27s" style={{marginTop: "20px"}}>
                                            <div className="card_of_tp_banner_01 position-relative">
                                                <h6 className="text-dark font-600 card_tp_baner_tp_heading">Subscriber to<br/>PeS</h6>
                                                <div className="tp_banner_card_icons_all">
                                                    <img className="img-fluid" src={youtube} />
                                                </div>                      
                                                <p className="text-green mb-3 mt-4 position-relative pl-4"> 
                                                    <span className="material-icons position-absolute" 
                                                        style={CheckCircleIconStyle}
                                                    >
                                                        <CheckCircleIcon />
                                                    </span>
                                                    7-day free trial
                                                </p>
                                                <p className="mt-2 font-400 mb-4 pb-2">
                                                    Subscriber to PeS YouTube channel to gain access to 100s of free training programs.
                                                </p>
                                                <div className="visit_btn_dv_contn">
                                                    <a href="#!" className="mt-4 text-btn visit_link_a_tg">Visit Now <span className="material-icons"><OpenInNewIcon /></span></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 card_of_tp_banner wow fadeInUp p-3" data-wow-delay=".74s">
                                            <div className="card_of_tp_banner_01 position-relative">
                                                <h6 className="text-dark font-600 card_tp_baner_tp_heading">Enroll in<br/>PeS</h6>
                                                <div className="tp_banner_card_icons_all">
                                                    <img className="img-fluid" src={student} />
                                                </div>                      
                                                <p className="text-green mb-3 mt-4 position-relative pl-4">
                                                    <span className="material-icons position-absolute" 
                                                        style={CheckCircleIconStyle}
                                                    >
                                                        <CheckCircleIcon />
                                                    </span>
                                                    Save 15% by paying yearly
                                                </p>
                                                <p className="mt-2 font-400 mb-4 pb-2">
                                                    Enroll in PeS instructor-led, live, online training program to learn future skills.
                                                </p>
                                                <div className="visit_btn_dv_contn">
                                                    <a href="#!" className="mt-4 text-btn visit_link_a_tg">Visit Now <span className="material-icons"><OpenInNewIcon /></span></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </header>

        </>
    );
};

export default Home1;