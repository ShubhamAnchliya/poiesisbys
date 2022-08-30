import React from "react";
import pes_asses_img01 from "../assets/images/pes_asses_img01.png";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function PesSkillAssesementbody() {
    return(
        <>
            <section className ="pes_Asses_section">
                <div className ="container">
                    <div className ="row m-0">
                        <div className ="col-md-5 m-auto wow fadeInLeft" data-wow-delay=".14s">
                            <img src={pes_asses_img01} style={{maxWidth: "100%"}} />
                        </div>

                        <div className ="col-md-6">
                            <div className ="title_head_pes_asses text-right">
                                <h1 className ="mb-5 position-relative wow fadeInRight" data-wow-delay=".44s" style={{lineHeight: "1.2"}}>
                                    PeS skill
                                    <br/>
                                    <b style={{fontSize: "64px"}}>Assessment</b>
                                </h1>
                                <p className ="font-14 font-400 wow fadeInRight" data-wow-delay=".14s">
                                    The absence of standard benchmarking makes it difficult for a technology
                                    professional to assess and understand their competitive position.
                                    {/* <!-- <br> --> */}
                                </p>
                                <p className ="font-14 font-400 w-75 ml-auto wow fadeInRight" data-wow-delay=".14s">
                                    To assist IoT professionals Poiesis e-learning solutions (PeS)
                                    offers a well-devised assessmentprocess to get quantified
                                    insights of their skill set.
                                    {/* <!-- <br> --> */}
                                </p>
                                <p className ="font-14 font-400 w-85 ml-auto wow fadeInRight" data-wow-delay=".14s">
                                    Additionally, PeS also offers IoT professionals to showcase their skill
                                    set by obtaining a certificate awarded on successful completion
                                    of the robust assessment process.
                                </p>

                                
                                <button type="button" className ="btn btn-primary font-16 btn_rad_more px-0 wow fadeInRight" data-wow-delay=".84s">
                                    <span>
                                        <span className ="material-icons"><ArrowRightAltIcon /></span>
                                        Read More            
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

export default PesSkillAssesementbody;