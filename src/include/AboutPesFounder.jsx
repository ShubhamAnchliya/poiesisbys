import React from "react";
import about_icon06 from "../assets/images/about_icon06.svg";
import pes_asses_img01 from "../assets/images/pes_asses_img01.png";

function AboutPesFounder() {
    return(
        <>

            <section className ="about_us_section_003">
                <div className ="container">
                    <div className ="row m-0">
                        <div className ="col-md-6 wow fadeInLeft" data-wow-delay=".14s">
                            <div className ="title_head_about_sec_03 text-left pl-4 ml-4">
                                <h4 className ="mb-5 position-relative">
                                    PeS
                                    <img className ="about_icon_contain_03" src={about_icon06} />
                                    <br/>
                                    <b style={{fontSize:"36px"}}> Founder</b>
                                </h4>          
                            </div>

                            <div className ="about_us_sec_03_details">
                                <div className ="my-2 w-100">
                                    <h5 className ="font-600">Founder Name</h5>
                                    <p className ="font-400 font-14"> 
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        stempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven,
                                        consectetur adipisicing elit, sed do eiusmod stempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven.              
                                    </p>
                                    <p className ="font-400 font-14"> 
                                        Magna aliqua. Ut enim ad minim ven,
                                        consectetur adipisicing elit, sed do eiusmod stempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven. cing elit, sed do eiusmod stempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven. cing elit, sed do eiusmod stempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven.              
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className ="col-md-6 wow fadeInUp" data-wow-delay=".14s">
                            <div className ="bg_card_of_img_abut_Sec_003">
                                <img src={pes_asses_img01} style={{maxWidth: "100%"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutPesFounder;