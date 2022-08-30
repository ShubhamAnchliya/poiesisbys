import React from "react";
import pes_asses_mob_img01 from "../assets/images/pes_asses_mob_img01.png";
import bg_shpe_layer01 from "../assets/images/bg_shpe_layer01.png";



function AssessmentTestPesSkill() {
    return(
        <>
            <section className="pes_skill_assess_pg_sec">
                <div className="container">
                    <div className="row m-0">

                        <div className="col-md-7 wow fadeInLeft animated" data-wow-delay=".14s">

                            <div className="title_pes_asses_pg pb-4 border-bottom-gray">

                                <h3 className="mb-5 position-relative" style={{lineHeight: "1.2"}} >
                                    PeS skill
                                    <br/>
                                    <b style={{fontSize: "44px"}}>Assessment</b>
                                </h3>

                                <p className="font-14">
                                    The absence of standard benchmarking makes it difficult for a technology professional to assess and understand their competitive position.
                                </p>

                                <p className="font-14">
                                    To assist IoT professionals Poiesis e-learning solutions (PeS) offers a well-devised assessment process to get quantified insights of their skill set.
                                </p>

                                <p className="font-14">
                                    Additionally, PeS also offers IoT professionals to showcase their skill set by obtaining a certificate awarded on successful completion of the
                                    robust assessment process.
                                </p>

                                <p className="font-14">
                                    The absence of standard benchmarking makes it difficult for a technology professional to assess and understand their competitive position.
                                </p>

                            </div>

                            <div className="mt-4 border-bottom-gray">

                                <h5 className="font-600">The assessment is done in three steps, as described below:</h5>

                                <ul className="font-14 text-gray pl-3">

                                    <li className="my-4">
                                        Technical MCQ based test – Questions in the test are selected from six subdomains of the Internet of Things technology.
                                        These subdomains are Embedded Systems, Data Communication, Computer Networking, Cyber Security, Data Science and Machine Learning.
                                    </li>
                                    <li className="my-4">
                                        Project assignment – Candidates scoring 80% or more can proceed to the second   phase to complete a project assignment.
                                    </li>
                                    <li className="my-4">
                                        Interview by a panel of SMEs – The final step of assessment is an online, live interview by a panel of subject matter experts.
                                    </li>

                                </ul>

                            </div>

                            <p className="mt-4 font-16 text-dark font-600">
                                The well devised PeS assessment process makes a professional earn the skill certificate so that it is valued by the industry.
                            </p>

                        </div>

                        <div className="col-md-4 ml-auto mt-5 pt-5 wow fadeInRight animated" data-wow-delay=".14s">

                            <div className="pes_asses_mob_img01conatiner position-relative pb-4">

                                <img className="m-auto" src={pes_asses_mob_img01} style={{maxWidth: "100%", filter: "drop-shadow(0 4px 10px rgba(0,0,0,.1))"}} />
                               
                                <div className="bg_stick_img position-absolute" style={{top: "-35px", right: "-60px", width: "auto"}}>
                                    <img src={bg_shpe_layer01} />
                                </div>
                                
                                <div className="bg_stick_img position-absolute" style={{bottom: "-60px", left: "-40px"}}>
                                    <img src={bg_shpe_layer01} />
                                </div>

                            </div>

                        </div>

                    </div>
                </div> 
            </section>
        </>
    );
};

export default AssessmentTestPesSkill;