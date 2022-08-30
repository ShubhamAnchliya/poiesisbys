import React from "react";
import about_icon05 from "../assets/images/about_icon05.svg";

function AboutPoiesis() {
    return(
        <>

            <section className="about_us_section_pg wow fadeInDown" data-wow-delay=".24s">
                <div className="container">
                    <div className="row m-0">
                        <div className="title_about_us_Sec pb-4 col-md-7 col-sm-12 m-auto">
                            <h3 className="mb-5 position-relative d-inline-block" style={{lineHeight: "1.2"}}>
                                <img className="about_icon_contain" src={about_icon05} />About
                                {/* <!-- <br> --> */}
                                <b className="ml-2" style={{fontSize: "44px"}} >Poiesis</b>
                            </h3>
                            <p className="font-16 font-400">
                                The absence of standard benchmarking makes it difficult for a technology professional to assess and understand their competitive position.
                            </p>   
                            <div className="e_learning_demo_Sec_btn_container_on_about mt-5 mb-0">
                                <button type="button" className="btn btn-primary font-500 btn-dark border-radius-xs mx-3 mb-0 ml-0 py-3 px-5 font-15">
                                    <span>
                                        Try Demo
                                    </span>
                                </button>
                                <button type="button" className="btn btn-primary font-500 btn-theme border-radius-xs mx-3 mb-0 ml-0 py-3 px-5 font-15">
                                    <span>
                                        Start Free Trial
                                    </span>
                                </button>
                            </div>       
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutPoiesis;
