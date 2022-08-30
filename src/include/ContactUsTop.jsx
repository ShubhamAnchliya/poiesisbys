import React from "react";
import contact_us_icon from "../assets/images/contact_us_icon.svg";
import { BiSupport } from "react-icons/bi";
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';



function ContactUsTop() {
    return(

        <>

            <section className= "about_us_section_pg mb-5 wow fadeInDown" data-wow-delay=".24s">
                <div className= "container">
                    <div className= "row m-0">

                        <div className= "title_about_us_Sec pb-4 col-md-7 col-sm-12 m-auto">
                            <h3 className= "mb-5 position-relative d-inline-block" style={{lineHeight: "1.2"}}>
                                <img className= "about_icon_contain" src={contact_us_icon} />Contact
                                {/* <!-- <br> --> */}
                                <b className= "ml-2" style={{fontSize: "44px"}}>Us</b>
                            </h3>
                            <p className= "font-16 font-400">
                                We are here to help you!
                            </p>                 
                        </div>

                        <div className= "contact_us_btns_al mt-5 col-md-12 m-auto text-center">
                            <div className= "row m-0 justify-content-center">

                                <div className= "col-md-3" style={{borderRight: "1px solid #eee"}}>
                                    <button type="button" className= "btn btn-primary font-500 btn-icon-contact border-radius-lg mb-0 font-15">
                                        <span className= "material-icons" style={{fontSize: "32px", color: "#3f51b5"}}><BiSupport/></span>
                                    </button>
                                    <p className= "mt-4 font-16 font-600 text-dark">
                                        Contact Support
                                        <br/>
                                        <span className= "font-15 font-400 mt-2 d-flex flex-wrap justify-content-center">
                                            Ask a Question
                                        </span>
                                    </p>
                                </div>

                                <div className= "col-md-3" style={{bordeRight: "1px solid #eee"}}>
                                    <button type="button" className= "btn btn-primary font-500 btn-icon-contact border-radius-lg mb-0 font-15">
                                        <span className= "material-icons" style={{fontSize: "32px" ,color: "#ff9800"}} ><InfoIcon /></span>
                                    </button>
                                    <p className= "mt-4 font-16 font-600 text-dark">
                                        FAQ
                                        <br/>
                                        <span className= "font-15 font-400 mt-2 d-flex flex-wrap justify-content-center">
                                            Contact Sales
                                        </span>
                                    </p>
                                </div>

                                <div className= "col-md-3">
                                    <button type="button" className= "btn btn-primary font-500 btn-icon-contact border-radius-lg mb-0 font-15">
                                        <span className= "material-icons" style={{fontSize: "32px", color: "#9c27b0"}}><ContactSupportIcon/></span>
                                    </button>
                                    <p className= "mt-4 font-16 font-600 text-dark">
                                        Help Center
                                        <br/>
                                        <span className= "font-15 font-400 mt-2 d-flex flex-wrap justify-content-center">
                                            Search for Answers
                                        </span>
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

export default ContactUsTop;