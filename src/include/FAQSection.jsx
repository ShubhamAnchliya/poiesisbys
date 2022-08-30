import React from "react";
import faq_img_sec01 from "../assets/images/faq_img_sec01.png";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

// import 'bootstrap/dist/css/bootstrap.css';


import FAQAccordian from "../include/FAQAccordian"
// import "../assets/css/style.css";

// import Collapse and install npm install react-collapsible
// import {Collapse} from "bootstrap";
// import Collapsible from "bootstrap";
// import { Button, Collapse } from 'react-bootstrap';

function FAQSection(props) {
    return(
        <>

            <section className="enqry_frm_sec_indx">
                    <div className="container">
                        <div className="row mx-0">

                            <div className="col-md-6">
                                <div className="faq_img_contner p-5">
                                    <img className="img-fluid" src={faq_img_sec01} />
                                </div>
                            </div>

                            {/* <div className="col-md-6">
                                <div className="enqry_frm_indx_enqry_crd1">
                                    <div className="row mx-0">
                                        <h4 className="font-600 text-dark position-relative mx-3 mt-3">Frequently Asked Questions (FAQ)</h4>
                                    </div>
                                                 <FaqToggle />
                                    <div className="row mx-0">

                                        <div id="accordion" className="py-5 w-100">

                                            <div className="card faq-section">
                                                <div className="card-header" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link text-dark" data-bs-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            How can i reach you?
                                                            <span className="material-icons plus"><KeyboardArrowUpIcon /></span>
                                                            <span className="material-icons minus"><KeyboardArrowDownIcon /></span>
                                                        </button>
                                                    </h5>
                                                </div>

                                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card faq-section">
                                                <div className="card-header" id="headingTwo">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed text-dark" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            Do you teach offline also?
                                                            <span className="material-icons plus"><KeyboardArrowUpIcon/></span>
                                                            <span className="material-icons minus"><KeyboardArrowDownIcon /></span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card faq-section">
                                                <div className="card-header" id="headingThree">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed text-dark" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    How can I invite you at our campus?
                                                    <span className="material-icons plus"><KeyboardArrowUpIcon /></span>
                                                    <span className="material-icons minus"><KeyboardArrowDownIcon /></span>
                                                    </button>
                                                </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </div>
                                                </div>
                                            </div>

                                            <div className="card faq-section">
                                                <div className="card-header" id="headingTwo">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed text-dark" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            Do you sponsor event too?
                                                            <span className="material-icons plus"><KeyboardArrowUpIcon /></span>
                                                            <span className="material-icons minus"><KeyboardArrowDownIcon /></span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseFour" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>  

                                </div>
                            </div> */}


                            <FAQAccordian/>

                        </div>
                    </div>
            </section>
                    
        </>
    );
};

export default FAQSection;