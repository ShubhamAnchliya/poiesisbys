import React from "react";
import get_in_touch_img01 from "../assets/images/get_in_touch_img01.png";

function RegistrationCourse() {
    return(
        <>

            <section className ="enqry_frm_sec_indx">
                <div className ="container">
                    <div className ="row mx-0">
                        <div className ="col-md-5">
                            <div className ="enqry_frm_indx_enqry_crd">
                                <h4 className ="font-600 text-dark position-relative mx-3 mt-3">Receive Free Courses</h4>

                                    <form className ="row mx-0 mt-3 mb-0 w-100">

                                        <div className ="form-group col-md-12">
                                            <label for="exampleInputtext" className ="bmd-label-floating">Full Name</label>
                                            <input type="text" className ="form-control" id="exampleInputtext" />
                                            <span className ="bmd-help">We'll never share your name with anyone else.</span>
                                        </div>

                                        <div className ="form-group col-md-12">
                                            <label for="exampleInputEmail1" className ="bmd-label-floating">Email ID</label>
                                            <input type="email" className ="form-control" id="exampleInputEmail1" />
                                            <span className ="bmd-help">We'll never share your email with anyone else.</span>
                                        </div>

                                        <div className ="form-group col-md-12">
                                            <label for="exampleInputtext" className ="bmd-label-floating">Phone Number</label>
                                            <input type="text" className ="form-control" id="exampleInputtext" />
                                            <span className ="bmd-help">We'll never share your phone number with anyone else.</span>
                                        </div>

                                        <div className ="form-group col-md-12">
                                            <label for="exampleInputtext" className ="bmd-label-floating">Subject</label>
                                            <input type="text" className ="form-control" id="exampleInputtext" />
                                            <span className ="bmd-help">We'll never share your college with anyone else.</span>
                                        </div>

                                        <div className ="col-md-12 mt-2 mb-3 pt-4">
                                            <div className ="row m-0">
                                                <div className ="col-md-12 px-0 text-left btn_signup_modal_popup">
                                                    {/* <!-- <button className ="btn btn-default">Cancel</button> --> */}
                                                    <button type="submit" className ="btn btn-primary w-50 font-500 font-15 py-3">Apply Now</button>
                                                </div>
                                            </div>
                                        </div>

                                    </form>

                            </div>
                        </div>

                        <div className ="col-md-7 my-auto">
                            {/* <!-- <div className ="title_head_enqry_sec text-right">
                            <h3 className ="mb-5 position-relative wow fadeInRight" data-wow-delay=".44s">
                                Get ahead with Learning Paths.
                                <br/>
                                <b style="font-size: 44px;">Stay Sharp.</b>
                            </h3>
                            <p className ="font-14 font-400 wow fadeInRight" data-wow-delay=".14s">
                                The absence of standard benchmarking makes it difficult for a technology
                                professional to assess and understand their competitive position.
                            </p>
                            <p className ="font-14 font-400 w-75 ml-auto wow fadeInRight" data-wow-delay=".14s">
                                To assist IoT professionals Poiesis e-learning solutions (PeS)
                                offers a well-devised assessmentprocess to get quantified
                                insights of their skill set.
                            </p>
                            <p className ="font-14 font-400 w-85 ml-auto wow fadeInRight" data-wow-delay=".14s">
                                Additionally, PeS also offers IoT professionals to showcase their skill
                                set by obtaining a certificate awarded on successful completion
                                of the robust assessment process.
                            </p>
                            <button type="button" className ="btn btn-primary font-16 btn_rad_more px-0 wow fadeInRight" data-wow-delay=".84s">
                                <span>
                                    <span className ="material-icons">arrow_right_alt</span>
                                    Read More            
                                </span>
                            </button>
                            </div> --> */}
                            <div className ="get_in_touch_img_contner p-5">
                            <img className ="img-fluid" src={get_in_touch_img01} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default RegistrationCourse;