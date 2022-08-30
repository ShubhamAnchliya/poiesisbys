import '../assets/css/style.css';
import '../assets/css/bootstrap-material-design.min.css';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// import logo_02_old from '../assets/images/logo_02_old.png';


import React from 'react';
import { useHistory } from 'react-router';


import { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo_02_old from "../assets/images/logo_02_old.png";


import { Link } from 'react-router-dom';
// import CallIcon from '@material-ui/icons/Call';
import logo from "../assets/images/logo_01.png";
import logo_01_on_fixed from "../assets/images/logo_01_on_fixed.png";



function Header(){

    // const [modalIsOpen, setLoginIsOpen] = useState(false);
    
    // const setLoginIsOpenToTrue = () => {
    //     setLoginIsOpen(true)
    // }
    

    // const setLoginIsOpenToFalse = () => {
    //     setLoginIsOpen(false)
    // }

    const [showModal, setModal] = useState(false);
    const [showClass, setClass] = useState("");

    const openModalLogin = () => {
        
        setClass("login_modal_popup class_on_add_sign_up");
        setModal(true);
      
    }

    const closeModalLogin = () => {
        setModal(false);
    }

    
    const openModalSignUp = () => {
        setClass("login_modal_popup");
        setModal(true);
    }
        

    const closeModalSignUp = () => {
        setModal(false);
    }
        




    
    return (
        <>
            <nav className="top_fst_nav_info_nav">

                <div className="top_fst_nav_info w-100">

                    <div className="container-fluid">

                        <div className="contact_container_info_lft w-50 float-left">

                            <div className="contact_container_info_lft_01 float-left">

                                <a href="#!">
                                   
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
                                
                                <a onClick={openModalSignUp} className="btn_reg_sign_up_right_btn p-0" data-toggle="modal" data-target="#exampleModal" style={{textDecoration: "none"}}>
                                    <span className="text-dark font-600">Sign Up</span>
                                </a>

                            </div>

                            <div className="login_container_info_rgt_02 float-right">

                                <a onClick={openModalLogin} className="btn_reg p-0" data-toggle="modal" data-target="#exampleModal">                                    
                                    <span className="text-white">Login Now</span>
                                </a>

                            </div>

                            {/* ================================= */}
                            {/* <Modal show={showLogin} onHide={closeModalLogin}>
                                <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={closeModalLogin}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={closeModalLogin}>
                                    Save Changes
                                </Button>
                                </Modal.Footer>
                            </Modal> */}
                            {/* ================================= */}


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

            <Modal  show={showModal} onHide={closeModalLogin} className={showClass}   id="exampleModal" >


                <button type="button" onClick={closeModalSignUp } className="close" data-dismiss="modal" aria-label="Close" style={{textShadow: "0px 2px 3px rgba(0,0,0,.47)"}}>
                <span aria-hidden="true">&times;</span>
                </button>

                <Modal.Body className ="p-0">

                    <div className = "row m-0">

                        <div className = "col-md-3 px-0">

                            <div className = "left_Register_bg_sec">

                                <div className = "login_modal_logo mb-4">

                                    <img src={logo_02_old} style={{maxWidth: "100%"}} />

                                </div>

                                <div className = "the_all_steps_for_register">

                                    <div className = "card_step mt-5">

                                        <h5 className = "font-600 position-relative">Step 1</h5>
                                        <p className = "text-dark font-400 font-14">
                                            Lorem ipsum dolor sit amet, consecteturadipisicing elit.
                                        </p>

                                    </div>

                                    <div className = "card_step mt-5">

                                        <h5 className = "font-600 position-relative">Step 2</h5>
                                        <p className = "text-dark font-400 font-14">
                                            labore et dolore magna aliqua. Ut enim ad minim veniam, esse cillum dolore.
                                        </p>

                                    </div>

                                    <div className = "card_step mt-5">

                                        <h5 className = "font-600 position-relative">Step 3</h5>
                                        <p className = "text-dark font-400 font-14">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>

                                    </div>
                                    
                                    <div className = "card_step_on_login">

                                        <h5 className = "font-600 position-relative">POIESIS</h5>
                                        <p className = "text-dark font-400 font-14">
                                        The absence of standard
                                        benchmarking makes it difficult
                                        for a technology professional to
                                        assess and understand their
                                        competitive position.
                                        </p>

                                    </div>
                                    
                                </div>

                            </div>

                        </div>

                        <div className = "col-md-9">

                            <div className = "register_login_modal_all_01">

                                <div className = "register_login_modal_title col-md-12 d-inline-block">

                                    <h2 className = "position-relative font-600 d-inline-block float-left">

                                        REGISTER
                                        <span className = "font-400" style={{fontSize: "22px"}}>NOW</span>

                                    </h2>

                                    <div className = "login_sign_up_btns float-right py-3">
                                        
                                        <span className = "pl-4 pr-2 font-500" style={{color: "#777"}}>Already have an account?</span>
                                        <a href="#!" onClick={openModalLogin} className = "sign_up_btn_mdl_popup">LOGIN</a>

                                    </div>

                                </div>

                                <form className = "row mx-0 mt-4 mb-0 w-100">

                                    {/* <!-- ///// Designation ///// --> */}

                                    <div className = "form-group col-md-6">

                                        <label htmlFor="exampleInputtext" className = "bmd-label-floating">Full Name</label>
                                        <input type="text" className = "form-control" id="exampleInputtext" />
                                        <span className = "bmd-help">We'll never share your name with anyone else.</span>

                                    </div>

                                    <div className = "form-group col-md-6">

                                        <label htmlFor="exampleInputtext" className = "bmd-label-floating">Last Name</label>
                                        <input type="text" className = "form-control" id="exampleInputtext" />
                                        <span className = "bmd-help">We'll never share your name with anyone else.</span>

                                    </div>

                                    <div className = "form-group col-md-6">

                                        <label htmlFor="exampleInputEmail1" className = "bmd-label-floating">Email ID</label>
                                        <input type="email" className = "form-control" id="exampleInputEmail1" />
                                        <span className = "bmd-help">We'll never share your email with anyone else.</span>

                                    </div>

                                    <div className = "form-group col-md-6">

                                        <label htmlFor="exampleInputtext" className = "bmd-label-floating">Phone Number</label>
                                        <input type="text" className = "form-control" id="exampleInputtext" />
                                        <span className = "bmd-help">We'll never share your phone number with anyone else.</span>

                                    </div>

                                    <div className = "form-group col-md-6">

                                        <label htmlFor="exampleInputtext" className = "bmd-label-floating">Company & job role</label>
                                        <input type="text" className = "form-control" id="exampleInputtext" />
                                        <span className = "bmd-help">We'll never share your job role with anyone else.</span>

                                    </div>

                                    <div className = "form-group col-md-6">

                                        <label htmlFor="exampleInputtext" className = "bmd-label-floating">College</label>
                                        <input type="text" className = "form-control" id="exampleInputtext" />
                                        <span className = "bmd-help">We'll never share your college with anyone else.</span>

                                    </div>

                                    <div className = "form-group col-md-6">

                                        <label htmlFor="exampleInputtext" className = "bmd-label-floating">City</label>
                                        <input type="text" className = "form-control" id="exampleInputtext" /> 
                                        <span className = "bmd-help">We'll never share your city with anyone else.</span>

                                    </div>

                                    <div className = "form-group col-md-6">

                                        <label htmlFor="exampleInputtext" className = "bmd-label-floating">Country</label>
                                        <input type="text" className = "form-control" id="exampleInputtext" />
                                        <span className = "bmd-help">We'll never share your country with anyone else.</span>

                                    </div>
                                    
                                    <div className = "form-group col-md-6">

                                        <label htmlFor="exampleInputpassword" className = "bmd-label-floating">Passowrd</label>
                                        <input type="passowrd" className = "form-control" id="exampleInputtext" />
                                        <span className = "bmd-help">We'll never share your password with anyone else.</span>                       
                                        <span toggle="#password-field" className = "fas fa-eye toggle-password"></span>
                                    
                                    </div>

                                    <div className = "form-group col-md-6">

                                        <label htmlFor="exampleInputpassword" className = "bmd-label-floating">Confirm Passowrd</label>
                                        <input type="passowrd" className = "form-control" id="exampleInputtext" />
                                        <span className = "bmd-help">We'll never share your password with anyone else.</span>                       
                                        <span toggle="#password-field" className = "fas fa-eye toggle-password"></span>
                                        
                                    </div>

                                    <div className = "col-md-12 mt-4 pt-0">

                                        <div className = "row m-0">

                                        <div className = "col-md-6 px-0 m-auto">

                                            <div className = "checkbox">

                                            <label className = "m-0">
                                                <input type="checkbox" /> <span className = "font-14 ml-2 text-dark font-500" >Accept Terms & Conditions</span>
                                            </label>

                                            </div>

                                        </div>

                                        <div className = "col-md-6 px-0 text-right btn_signup_modal_popup">
                                        
                                            <button type="submit" className = "btn btn-primary">Sign Up</button>

                                        </div>

                                        </div>

                                    </div>

                                </form>

                            </div>

                            {/* <!-- //////////////// ON LOGIN ///////////////// --> */}

                            <div className = "register_login_modal_all_01_by_login">

                                <div className = "register_login_modal_title col-md-12 d-inline-block">

                                <h2 className = "position-relative font-600 d-inline-block float-left">
                                    LOGIN
                                    <span className = "font-400" style={{fontSize: "22px"}}>NOW</span>
                                </h2>

                                <div className = "login_sign_up_btns float-right py-3">
                                    <span className = "pl-4 pr-2 font-500" style={{color: "#777"}}>Don't have an account?</span>
                                    <a href="#!" onClick={openModalSignUp}  className = "sign_up_btn_mdl_popup sign_up_btn_mdl_popup_0101">SIGN UP</a>
                                </div>

                                </div>

                                <form className = "row mx-0 mt-5 mb-4 w-100">

                                <div className = "form-group col-md-12">

                                    <label htmlFor="exampleInputEmail1" className = "bmd-label-floating">Email ID</label>
                                    <input type="email" className = "form-control" id="exampleInputEmail1" />
                                    <span className = "bmd-help">We'll never share your email with anyone else.</span>

                                </div>

                                <div className = "form-group col-md-12">

                                    <label htmlFor="exampleInputpassword" className = "bmd-label-floating">Passowrd</label>
                                    <input type="passowrd" className = "form-control" id="exampleInputtext" />
                                    <span className = "bmd-help">We'll never share your email with anyone else.</span>                       
                                    <span toggle="#password-field" className = "fas fa-eye toggle-password"></span>
                                    
                                </div>
                            
                                <div className = "col-md-12 mt-5 pt-4">

                                    <div className = "row m-0">

                                    <div className = "col-md-12 px-0 text-right btn_signup_modal_popup">
                                    
                                        <button type="submit" className = "btn btn-primary">Login</button>

                                    </div>

                                    </div>

                                </div>

                                </form>

                            </div>         

                        </div>

                    </div>

                </Modal.Body> 

            </Modal>



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