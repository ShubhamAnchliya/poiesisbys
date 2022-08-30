import React from "react";

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import rupee from "../assets/images/rupee.svg";
import rupee_light from "../assets/images/rupee_light.svg";
import CourseDetailHeader from "./CourseDetailHeader";

function CourseDetailSection() {
    return(
        <>

            <CourseDetailHeader />

            <section className ="all_courses_details">
                <div className ="container">

                    <div className ="row m-0">

                        <div className ="col-md-8 px-4">

                            <div className ="courses_Detail_contain">

                                <div className ="mb-3 pb-3 border-bottom-gray w-100">
                                    <div className ="info_title_heder w-100 d-inline-block">
                                    <h5 className ="font-600">Course Title</h5>
                                    </div>
                                    <p className ="font-400 font-14 m-0 course_title_des"> 
                                    Internet of Things (IoT) Architecture
                                    <br/>
                                    <strong className ="mt-1 d-flex font-15">Duration – 24 hours</strong>
                                    </p>
                                </div>

                                <div className ="mb-3 pb-3 border-bottom-gray w-100">
                                    <div className ="info_title_heder w-100 d-inline-block">
                                    <h5 className ="font-600">Overview and Scope</h5>
                                    </div>
                                    <p className ="font-400 font-14 m-0 course_title_des"> 
                                    Internet of Things is a global network of smart objects equipped with sensors and actuators to interact with and respond to physical environment.  An IoT network is a system of systems. The major components of IoT system are end devices, network infrastructure, and cloud platforms. This training program will look at Internet of Things technology from an architect’s point of view. There are a plethora of heterogeneous objects enabled to communicate with the help of various wired and wireless communication technologies.                
                                    </p>
                                    <p className ="mt-2 m-0">
                                    The objective of this training program is to develop such a rich skill set with expertise to develop integrated solutions meeting business requirements.
                                    </p>
                                </div>

                                <div className ="mb-3 pb-3 border-bottom-gray w-100">
                                    <div className ="info_title_heder w-100 d-inline-block">
                                    <h5 className ="font-600">Learning Outcome</h5>
                                    </div>
                                    <ul className ="pl-3 mt-3">
                                    <li>
                                        <p className ="font-400 font-14">
                                        In depth understanding of IoT system, architectures, components and supporting technologies.
                                        </p>
                                    </li>
                                    <li>
                                        <p className ="font-400 font-14">
                                        Architecting end to end IoT system.
                                        </p>
                                    </li>
                                    <li>
                                        <p className ="font-400 font-14">
                                        Understanding business needs and translating requirements into supporting architecture and models.
                                        </p>
                                    </li>
                                    <li>
                                        <p className ="font-400 font-14">
                                        Analyzing existing business processes to understand and build technical strategy to develop need aligned technical solutions.
                                        </p>
                                    </li>
                                    <li>
                                        <p className ="font-400 font-14">
                                        Understanding available technologies and selection criteria to define integrated solutions addressing scalability, interoperability and reliability.
                                        </p>
                                    </li>
                                    <li>
                                        <p className ="font-400 font-14">
                                        Translation of customer requirements into technical specifications and Developing proof of concepts and prototypes.
                                        </p>
                                    </li>
                                    <li>
                                        <p className ="font-400 font-14">
                                        Knowledge and skills of sensors, microcontrollers, <strong className ="text-dark">Single Board Computers (SBCs)</strong> and communication interfaces (WiFi/Bluetooth) to design and build IoT devices.
                                        </p>
                                    </li>
                                    <li>
                                        <p className ="font-400 font-14">
                                        Knowledge and skills to design and build network based on client-server and publish-subscribe to connect, collect data, monitor and manage assets.
                                        </p>
                                    </li>
                                    <li>
                                        <p className ="font-400 font-14">
                                        Knowledge and skill to write <strong className ="text-dark">device, gateway and server side scripts</strong> and apps to <strong className ="text-dark">aggregate and analyze sensor data.</strong>
                                        </p>
                                    </li>
                                    <li>
                                        <p className ="font-400 font-14">
                                        Knowledge and skills to select/consume <strong className ="text-dark">APIs</strong>, application layer protocols and web services architectures for seamless integration of various components <strong className ="text-dark">(Device, Network & Cloud)</strong> of an IoT ecosystem.
                                        </p>
                                    </li>
                                    <li>
                                        <p className ="font-400 font-14">
                                        Knowledge of standard development initiatives and reference architectures.
                                        </p>
                                    </li>
                                    <li>
                                        <p className ="font-400 font-14">
                                        Understanding of <strong className ="text-dark">cloud infrastructure, services, APIs, and architectures</strong> of commercial and industrial cloud platforms.
                                        </p>
                                    </li>
                                    <li>
                                        <p className ="font-400 font-14">
                                        End to End IoT Solution development and deployment on cloud platform.
                                        </p>
                                    </li>
                                    </ul>
                                    {/* <!-- <p className ="font-14 font-600 text-dark m-0">
                                    Just go ahead and subscribe to this course! If you don't acquire these skills now, you will miss an opportunity to separate yourself from the others. Don't risk your future success! Let's start learning together now!
                                    </p> --> */}
                                </div>

                                {/* <!-- <div className ="mb-3 pb-3 border-bottom-gray w-100">
                                    <div className ="info_title_heder w-100 d-inline-block">
                                    <h5 className ="font-600">Intended Audience</h5>
                                    </div>
                                    <ul className ="pl-3 mt-3">
                                    <li>
                                        <p className ="font-400 font-14">
                                        Create a Redis instance
                                        </p>
                                    </li>
                                    <li>
                                        <p className ="font-400 font-14">
                                        Connect to a Redis instance and perform caching operations
                                        </p>
                                    </li>
                                    </ul>
                                </div>
                                <div className ="mb-3 pb-3 border-bottom-gray w-100">
                                    <div className ="info_title_heder w-100 d-inline-block">
                                    <h5 className ="font-600">Who this course is for:</h5>
                                    </div>
                                    <ul className ="pl-3 mt-3">
                                    <li>
                                        <p className ="font-400 font-14">
                                        Anyone who wants to become a digital marketer, promote a business.
                                        </p>
                                    </li>
                                    <li>
                                        <p className ="font-400 font-14">
                                        Anyone who is tired of their day job or wants a career change.
                                        </p>
                                    </li>
                                    <li>
                                        <p className ="font-400 font-14">
                                        People who want to earn an additional income from freelancing.
                                        </p>
                                    </li>
                                    <li>
                                        <p className ="font-400 font-14">
                                        Digital marketers who want some more tricks.
                                        </p>
                                    </li>
                                    </ul>
                                </div> --> */}

                                <div className ="mb-3 pb-3 border-bottom-gray w-100">
                                    <div className ="info_title_heder w-100 d-inline-block">
                                    <h5 className ="font-600 float-left">Course Outline:</h5>
                                    <h6 className ="font-600 float-right">
                                        Total:
                                        <span className ="font-16 font-500 text-777 mx-2">
                                        17 lectures
                                        </span>
                                        Total hours:
                                        <span className ="font-16 font-500 text-777 mx-2">                
                                        24:00:00
                                        </span>
                                    </h6>
                                    </div>
                                    <div id="accordion" className ="mt-2 acc_courses_Det_Sec">
                                    <div className ="card">
                                        <div className ="card-header" id="headingOne">
                                        <h5 className ="mb-0">
                                            <button className ="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Introduction- Concepts and Technologies behind Internet of Things (IoT)
                                            <span className ="material-icons"><KeyboardArrowDownIcon /></span>
                                            </button>
                                        </h5>
                                        <span className ="span_lec_badge_sec_acc">Lecture 04</span>
                                        </div>

                                        <div id="collapseOne" className ="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className ="card-body">
                                            <ul className ="pl-3 detail_Sec_ul_of_courses_outline m-0">
                                            <li>
                                                Robably haven't heard of them accusamus labore sustainable VHS.
                                                <a href="#!" className ="view_resouses_a_btn_courses_det">
                                                View Resourses
                                                </a>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                            </div>
                       
                        </div>

                        <div className ="col-md-4">
                            <div className ="courses_Detail_video_container_sec">
                            <h5 className ="position-relative p-3 preview_course_heading" data-label="Trending">
                                Preview
                                <b>this course</b>
                                <span className ="cut_on_badge_by_clas_corses_Sec_det"></span>
                                <span className ="bottom_highlight_line"></span>
                            </h5>
                            <div className ="courses_Detail_video_container d-flex">
                                <video className ="img-fluid" id="player" playsinline controls data-poster="/path/to/poster.jpg">
                                <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4" />
                                {/* <!-- <source src="/path/to/video.webm" type="video/webm" /> --> */}

                                {/* <!-- Captions are optional --> */}
                                <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default />
                                </video>
                            </div>
                            <div className ="courses_Detail_video_bottom_descriptin"> 
                                <div className ="courses_pricing_detail my-2">            
                                <h2 className ="font-600">
                                    <img src={rupee} width="25" />
                                    365
                                    <span className ="font-18 font-600 primary_cut_amount position-relative">
                                    <img src={rupee_light} width="15" />
                                    499
                                    </span>
                                    <span className ="font-16 font-600 text-green ml-2">
                                    27% Off
                                    </span>
                                </h2>
                                </div>
                                <div className ="buy_course_bnt_on_detail_crse_pg row m-0">
                                <div className ="col-md-12 py-2 px-0">
                                    <button className ="btn btn-primary btn_buy_now btn-dark w-100 border-radius-xs font-15">
                                    Buy Now
                                    </button>
                                </div>
                                <div className ="col-md-12 my-2 mx-auto d-flex justify-content-center break_btn_or_highlight_txt_sec">
                                    <span className ="font-14 font-600 text-777">Or</span>
                                </div>
                                <div className ="col-md-12 py-2 px-0">
                                    <button className ="btn btn-primary btn_strt_free btn-dark w-100 border-radius-xs font-15">
                                    Start Free
                                    </button>
                                </div>
                                </div>
                                <div className ="course_buy_benifit_details_sec mt-3">
                                <h6 className ="font-600 font-18">This Course Includes</h6>
                                <ul className ="mt-3 mb-2 pl-3 pb-2 border-bottom-gray">
                                    <li>
                                    24 hours on-demand video
                                    </li>
                                    <li>
                                    34 articles
                                    </li>
                                    <li>
                                    12 downloadable resources
                                    </li>
                                    <li>
                                    Full lifetime access
                                    </li>
                                    <li>
                                    Certificate of Completion
                                    </li>
                                </ul>    
                                <div className ="add_to_bookmark_on_courses_det_pg_Sec position-relative py-2 mt-3">
                                    <div className ="icon icon_bookmark_saved icon_bookmark_saved_on_courses_detail_pg">
                                    <input type="checkbox" id="bookmark" className ="bookmrk_input_hide" />
                                    <label for="bookmark" className ="btn btn-bookmark icon_bookmark_saved_btn m-0">
                                        <svg className ="svg_on_bookmark_sec" width="30" height="30">
                                        <use xlinkHref="#icon-bookmark"/>
                                        </svg>
                                    </label>
                                    </div>
                                    <svg className ="bookmrk_input_hide">                
                                    <symbol fill="var(--color-svg)" viewBox="0 0 24 24" stroke="currentColor" id="icon-bookmark"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></symbol>
                                    </svg>   
                                    <h6 className ="font-600 font-18 my-auto ml-2 float-left">Add to Bookmark</h6>
                                </div>       
                                </div>
                            </div>
                            </div>
                        </div>
                    
                    </div>

                </div>
            </section>
        </>
    );
};

export default CourseDetailSection;