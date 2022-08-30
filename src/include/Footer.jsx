import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from "../assets/images/logo_01.png";
import play_store01 from "../assets/images/play-store01.svg";
import app_store from "../assets/images/app-store.svg";
// import "../assets/css/style.css";4
import '../assets/css/bootstrap-material-design.min.css';

function Footer() {
    return(
        <>
        <footer className="footer_main_Section wow fadeInUp" data-wow-delay=".14s">

            <div className="container">
            
                <div className="row m-0">
                    <div className="footer_logo col-md-12">
                        <a className="navbar-brand p-0 wow fadeInLeft" data-wow-delay=".14s" href="#">
                            <img src={logo} style={{width: "25%"}}/>
                        </a>
                    </div>

                    {/* <div className="row my-2 mx-0 py-5" style={{borderBottom: "1px solid #777"}}> */}
                    <div className="row my-2 mx-0 py-5">
                        <div className="col-md-3 px-4 wow fadeInUp" data-wow-delay=".14s">
                            <h4 className="footer_heading mb-4 font-500">About</h4> 
                            <p className="font-14 footer_para font-400 mb-4">
                                e-Learning solution is committed
                                to partnering with innovation 
                                focused organizations that
                                understand that building
                                world-className teams.
                            </p>
                            <p className="font-14 footer_para font-400">
                                e-Learning solution is committed  
                                with innovation-focused.
                            </p>
                        </div>

                        <div className="col-md-3 px-4 wow fadeInUp" data-wow-delay=".14s">
                            <h4 className="footer_heading mb-4 font-500">Partners</h4> 
                            <ul className="mb-4 prtnr_ul_Sec font-14 font-400">
                                <li><a href="#!">Solution Partner</a></li>
                                <li><a href="#!">Technology Partner</a></li>
                                <li><a href="#!">Training Partner</a></li>
                                <li><a href="#!">Training Partner</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 px-4 wow fadeInUp" data-wow-delay=".14s">
                            <h4 className="footer_heading mb-4 font-500">Courses</h4> 
                            <ul className="mb-4 prtnr_ul_Sec font-14 font-400">
                                <li><a href="#!">Solution Partner</a></li>
                                <li><a href="#!">Technology Partner</a></li>
                                <li><a href="#!">Training Partner</a></li>
                                <li><a href="#!">Training Partner</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 px-4 wow fadeInUp" data-wow-delay=".14s">
                            <h4 className="footer_heading mb-4 font-500">Follow Us</h4> 
                            {/* <ul className="mb-4 prtnr_ul_Sec font-14 font-400 pl-0" style={{listStyleType: "none"}}>
                                <li><a href="#!"><i className="fab fa-facebook mr-3" style={{fontSize: "20px"}}></i><FacebookIcon />Facebook</a></li>
                                <li><a href="#!"><i className="fab fa-twitter mr-3" style={{fontSize: "20px"}}></i><TwitterIcon /> Twitter</a></li>
                                <li><a href="#!"><i className="fab fa-linkedin-in mr-3" style={{fontSize: "20px"}}></i><LinkedInIcon />  LinkedIn</a></li>
                            </ul> */}
                            <ul className="mb-4 prtnr_ul_Sec font-14 font-400 pl-0" >
                                <li><a href="#!"><FacebookIcon/>Facebook</a></li>
                                <li><a href="#!"><TwitterIcon/>Twitter</a></li>
                                <li><a href="#!"><LinkedInIcon/>LinkedIn</a></li>
                            </ul>
                        </div>
                        
                        <div className="row m-0 w-100">
                            <div className="col-md-12 m-auto d-flex">
                                <h4 className="footer_heading mb-4 mx-auto font-500 d-inline-block">Get It On</h4> 
                            </div>
                            <div className="col-md-4 col-sm-8 col-xs-12 m-auto">
                                <div className="app_store_links_btn">
                                    <button className="btn btn-primary app-play-str-btn">
                                        <span><img src={play_store01}/></span>
                                        <span>GOOGLE PLAY</span>
                                    </button>
                                </div>
                                <div className="app_store_links_btn">
                                    <button className="btn btn-primary app-play-str-btn">
                                        <span><img src={app_store} /></span>
                                        <span>APP STORE</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>    

                    <div className="row mx-0 mt-3 w-100">
                        <div className="col-md-7 wow fadeInLeft" data-wow-delay=".14s">
                            {/* <p className="m-0 font-400 font-14" style={{color: "#fff !important"}}> */}
                            <p className="m-0 font-400 font-14" >
                                Copyright ©2020 poiesis. All rights reserved.
                            </p>
                        </div>

                        {/* <div className="col-md-5 text-right wow fadeInRight" data-wow-delay=".14s">
                            <a href="#!" className="mx-3 font-500" style={{textDecoration: "underline", color: "#fff !important"}}>Terms of Use</a>
                            <a href="#!" className="mx-3 font-500" style={{textDecoration: "underline", color: "#fff !important"}}>Privacy Policy</a>
                        </div> */}
                        <div className="col-md-5 text-right wow fadeInRight" data-wow-delay=".14s">
                            <a href="#!" className="mx-3 font-500" >Terms of Use</a>
                            <a href="#!" className="mx-3 font-500" >Privacy Policy</a>
                        </div>


                    </div>

                </div>

            </div>

        </footer>
        </>
    );
}

export default Footer;