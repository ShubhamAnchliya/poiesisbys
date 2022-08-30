import '../assets/css/style.css';
import '../assets/css/bootstrap-material-design.min.css';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import logo_02_old from '../assets/images/logo_02_old.png';


import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
// import CallIcon from '@material-ui/icons/Call';
import logo from "../assets/images/logo_01.png";
import logo_01_on_fixed from "../assets/images/logo_01_on_fixed.png";



function Header(){

    // let history = useHistory();

    // const tologinmodal = () => {
    //     history.push('/loginmodalpage')
    // }



    return (
        <>
            <nav className="top_fst_nav_info_nav">

                <div className="top_fst_nav_info w-100">
                    <div className="container-fluid">

                        <div className="contact_container_info_lft w-50 float-left">
                            <div className="contact_container_info_lft_01 float-left">
                            <a href="#!">
                                {/* <span className="material-icons">call</span> */}
                                <span className="material-icons"><CallIcon/></span>
                                <span className="text-white">+91 12565-56320</span>
                            </a>
                            </div>
                            <div className="contact_container_info_lft_02 float-left">
                            <a href="#!">
                                <span className="material-icons"><EmailIcon/></span>
                                <span className="text-white">poiesis.elearning@gmail.com</span>
                            </a>
                            </div>
                        </div>

                        <div className="login_container_info_rgt w-50 float-right">

                            <div className="login_container_info_rgt_04 float-right btn btn-primary mb-0" style={{background: "#f5cb39", marginRight: "-15px"}}>
                                
                                <a onClick={} className="btn_reg_sign_up_right_btn p-0" data-toggle="modal" data-target="#exampleModal" style={{textDecoration: "none"}}>
                                    <span className="text-dark font-600">Sign Up</span>
                                </a>

                            </div>

                            <div className="login_container_info_rgt_02 float-right">

                                <a onClick={} className="btn_reg p-0" data-toggle="modal" data-target="#exampleModal">                                    
                                    <span className="text-white">Login Now</span>
                                </a>

                            </div>

                            <div className="login_container_info_rgt_03 float-right">

                                <div className="socail_sec d-flex">
                                    <ul>
                                    <li>
                                        <a href="#!">
                                        <i className="fab fa-facebook" style={{fontSize: "16px"}} aria-hidden="true"><FaFacebook/></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                        <i className="fab fa-twitter" style={{fontSize: "16px"}} aria-hidden="true"><FaTwitter/></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                        <i className="fab fa-linkedin-in" style={{fontSize: "16px"}} aria-hidden="true"><FaLinkedinIn/></i>
                                        </a>
                                    </li>         
                                    </ul>
                                </div>
                                
                            </div>
                            
                        </div>

                    </div>
                </div>
                
            </nav>


{/* navbar 2 */}

            <nav className="navbar navbar01 navbar-expand-lg navbar-light wow fadeInDown" data-wow-delay=".24s">
             
                    <div className="container-fluid">
                        <Link className="navbar-brand p-0 d-flex flex-wrap" to="/">
                            <img className="m-auto" src={logo} />
                            <img className="on_fixed m-auto" src={logo_01_on_fixed} />
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link btn m-0 px-3" >
                                        Home
                                        <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link btn m-0 px-3" to="aboutus">
                                        About Us
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link btn m-0 px-3" to="assessmenttest">
                                        Assessment Test
                                    </Link>
                                </li>
{/* 
                                <li className="nav-item">
                                </li> */}

                                <li className="nav-item">
                                    <Link className="nav-link btn m-0 px-3" to="resources">
                                        Resources
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link btn m-0 px-3" to="trainingprograms">
                                        Training Programs
                                    </Link>
                                </li>

                                <div className="other-buttons ml-3">
                                    <div className="register_btn">
                                        {/* <span>
                                            Registration
                                            <span className="material-icons">login</span>
                                        </span> */}
                                        {/* <Link to="contact_us" className="btn btn_cont">
                                            <span>
                                                <span className="material-icons">local_phone</span>
                                                Contact Us            
                                            </span>
                                        </Link> */}

                                        <Link to="contactus" className="btn btn-primary btn_cont">
                                            <span>
                                                <span className="material-icons"><CallIcon className="text-black"  /></span>
                                                Contact Us            
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </ul>

                        </div> 

                    </div>
             
            </nav>

        </>
    );           
}
export default Header;