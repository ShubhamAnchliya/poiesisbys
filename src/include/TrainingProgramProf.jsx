import React from "react";

import iot_architect_img from "../assets/images/iot_architect_img.png";
import iot_security_img from "../assets/images/iot_security_img.png";
import iot_com_img from "../assets/images/iot_com_img.png";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
// import TraingProgCourseDetails from "../include/TraingProgCourseDetails";
import { useHistory } from 'react-router-dom';


function TrainingProgramProf() {

    let history = useHistory();

    const tocoursedetails = () => {
        history.push('/coursedetails')
    }


    return(
        <>
            <section className ="all_courses_pg_sec">
                <div className ="container">

                    <div className ="mb-3 pb-3 px-3">

                        <h4 className ="font-600">Professional Training Programs</h4>

                        <p className ="font-400 font-14 m-0"> 
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            stempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven,
                            consectetur adipisicing elit, sed do eiusmod stempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven
                        </p>

                    </div>

                    <div className ="row m-0">

                        <div className ="my-3 pt-0 col-md-3 wow fadeInUp" data-wow-delay=".24s">

                            <div className ="traing_prgrm_crd">
                                <div className ="traing_prgrm_detal">

                                    <div className ="training_on_img_container">
                                        <div className ="training_Det_ig_top">
                                            <img src={iot_architect_img} />
                                        </div>
                                    </div>

                                    <div className ="training_all_txt_detal">

                                        <h6 className ="font-600 font-18 position-relative d-inline-block my-2">Internet of Things Architect</h6>
                                        
                                        <div className ="tm_drtion_spn_sec d-flex mb-2">
                                            <span className ="material-icons float-left mr-2 text-777 my-auto"><QueryBuilderIcon /></span>
                                            <span className ="float-left my-auto tm_drtion_spn_ind">                  
                                            24 Hours
                                            </span>
                                        </div>

                                        <p className ="mt-0 font-14 font-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiut non</p>
                                        
                                        <div className ="d-flex w-100 py-3">

                                            <button type="button" onClick={tocoursedetails} className ="btn btn-primary m-0 font-14 btn_rad_more_right px-0 wow zoomIn" data-wow-delay=".34s">
                                                <span>
                                                    <span className ="material-icons"><ArrowRightAltIcon /></span>
                                                    View Details            
                                                </span>
                                            </button>

                                            <button type="button" className ="btn btn-primary border-radius-lg m-0 ml-auto font-14 px-3 float-right btn-dark btn-shadow">
                                                <span className ="font-13">
                                                    $ BUY NOW            
                                                </span>
                                            </button>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>    

                        <div className ="my-3 pt-0 col-md-3 wow fadeInUp" data-wow-delay=".24s">

                            <div className ="traing_prgrm_crd">

                                <div className ="traing_prgrm_detal">

                                    <div className ="training_on_img_container">
                                        <div className ="training_Det_ig_top">
                                            <img src={iot_security_img} />
                                        </div>
                                    </div>

                                    <div className ="training_all_txt_detal">

                                        <h6 className ="font-600 font-18 position-relative d-inline-block my-2">Internet of Things Security</h6>
                                       
                                        <div className ="tm_drtion_spn_sec d-flex mb-2">

                                            <span className ="material-icons float-left mr-2 text-777 my-auto"><QueryBuilderIcon/></span>

                                            <span className ="float-left my-auto tm_drtion_spn_ind">                  
                                                24 Hours
                                            </span>
                                            
                                        </div>

                                        <p className ="mt-0 font-14 font-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiut non</p>
                                        
                                        <div className ="d-flex w-100 py-3">

                                            <button type="button" onClick={tocoursedetails} className ="btn btn-primary m-0 font-14 btn_rad_more_right px-0 wow zoomIn" data-wow-delay=".34s">
                                           
                                                <span>
                                                    <span className ="material-icons"><ArrowRightAltIcon /></span>
                                                    View Details            
                                                </span>

                                            </button>

                                            <button type="button" className ="btn btn-primary border-radius-lg m-0 ml-auto font-14 px-3 float-right btn-dark btn-shadow">
                                           
                                                <span className ="font-13">
                                                    $ BUY NOW            
                                                </span>

                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div> 

                        <div className ="my-3 pt-0 col-md-3 wow fadeInUp" data-wow-delay=".24s">

                            <div className ="traing_prgrm_crd">

                                <div className ="traing_prgrm_detal">

                                    <div className ="training_on_img_container">
                                        <div className ="training_Det_ig_top">
                                            <img src={iot_com_img} />
                                        </div>
                                    </div>

                                    <div className ="training_all_txt_detal">

                                        <h6 className ="font-600 font-18 position-relative d-inline-block my-2">Internet of Things Communication</h6>
                                        
                                        <div className ="tm_drtion_spn_sec d-flex mb-2">

                                            <span className ="material-icons float-left mr-2 text-777 my-auto"><QueryBuilderIcon /></span>
                                           
                                            <span className ="float-left my-auto tm_drtion_spn_ind">                  
                                                24 Hours
                                            </span>
                                       
                                        </div>

                                        <p className ="mt-0 font-14 font-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiut non</p>
                                       
                                        <div className ="d-flex w-100 py-3">

                                            <button type="button" onClick={tocoursedetails} className ="btn btn-primary m-0 font-14 btn_rad_more_right px-0 wow zoomIn" data-wow-delay=".34s">
                                                <span>
                                                    <span className ="material-icons"><ArrowRightAltIcon /></span>
                                                    View Details            
                                                </span>
                                            </button>

                                            <button type="button" className ="btn btn-primary border-radius-lg m-0 ml-auto font-14 px-3 float-right btn-dark btn-shadow">
                                                <span className ="font-13">
                                                    $ BUY NOW            
                                                </span>
                                            </button>

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

export default TrainingProgramProf;