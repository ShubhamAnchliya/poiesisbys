import React from "react";
import e_learning_ab_img01 from "../assets/images/e_learning_ab_img01.png";

function TimeForElearning() {
    return(
        <>
            <section className ="e_learning_demo_Sec">
                <div className ="container">
                    <div className ="row m-0">
                    
                        <div className ="col-md-12">
                            <div className ="title_head_pes_asses text-right wow fadeInUp" data-wow-delay=".14s">
                                <h3 className ="mb-4 position-relative" style={{lineHeight: "1.2"}}>
                                    It's Time for
                                    <b className ="ml-2" style={{fontSize: "45px"}}>e-Learning</b>
                                </h3>          
                            </div>
                            <div className ="ylw_container_section_e_learing my-1 position-relative wow fadeInUp" data-wow-delay=".54s">
                                <div className ="ylw_container_section_e_learing_01">
                                    <h2 className ="font-500">
                                        Accelerate your tech training program with
                                        <br/>e-Learning
                                    </h2>
                                    
                                    <div className ="e_learning_demo_Sec_btn_container mt-5 mb-0">
                                        <button type="button" className ="btn btn-primary btn_try_demo mr-4 ml-0 py-3 px-5 font-16">
                                            <span>
                                                Try Demo
                                            </span>
                                        </button>
                                        <button type="button" className ="btn btn-primary strt_fre_tril mr-4 ml-0 py-3 px-5 font-16">
                                            <span>
                                                Start Free Trial
                                            </span>
                                        </button>
                                    </div>

                                </div>

                                <div className ="img_on_right_e_learing position-absolute" style={{right: 0, bottom: "-20px"}}>
                                    <img src={e_learning_ab_img01}/>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );

};

export default TimeForElearning;