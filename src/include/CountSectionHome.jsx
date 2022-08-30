import React from "react";
import PublicIcon from '@material-ui/icons/Public';
import GroupIcon from '@material-ui/icons/Group';

import BeenhereIcon from '@material-ui/icons/Beenhere';

function CountSectionHome() {
    return(
        <>
        
            <section id="counter-stats" className ="count_section_index">
                <div className ="container">
                    <div className ="align-content-count-container w-100">
                        <div className ="stat-wrap row mx-0">
                            <div className ="col-md-3 wow fadeInUp" data-wow-delay=".17s">
                                <div className ="col-count-container">
                                    <span className ="material-icons"></span>
                                    <span className ="stat-number" style={{color: "#7E3CF9"}}>2320</span>
                                    <h6 className ="font-600 text-777 mt-4 mb-0">EXPERT INSTRUCTORS</h6>
                                </div>
                            </div>
                            <div className ="col-md-3 wow fadeInUp" data-wow-delay=".29s">
                                <div className ="col-count-container">
                                    <span className ="material-icons"><PublicIcon /></span>
                                    <span className ="stat-number" style={{color: "#F68A03"}}>1250</span>
                                    <h6 className ="font-600 text-777 mt-4 mb-0">FOREIGN FOLLOWERS</h6>
                                </div>
                            </div>
                            <div className ="col-md-3 wow fadeInUp" data-wow-delay=".31s">
                                <div className ="col-count-container">
                                    <span className ="material-icons"><GroupIcon /></span>
                                    <span className ="stat-number" style={{color: "#358FF7"}}>1775</span> 
                                    <h6 className ="font-600 text-777 mt-4 mb-0">STUDENTS ENROLLED</h6>
                                </div>
                            </div>
                            <div className ="col-md-3 wow fadeInUp" data-wow-delay=".43s">
                                <div className ="col-count-container">   
                                    <span className ="material-icons"><BeenhereIcon /></span>         
                                    <span className ="stat-number" style={{color: "#38BB0C"}}>1207</span>  
                                    <h6 className ="font-600 text-777 mt-4 mb-0">YEARS OF EXPERIENCE</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default CountSectionHome;