import React from 'react'

function TestPExamTimer() {
    return (
        <>
            <div className = "col-md-12">
                <div className = "card_sec_on_tst_pg_by_tmr">

                    <h5 className = "text-dark font-600 font-18">Exam Timer</h5>

                    <p className = "text-dark font-500 font-14">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className = "the_tmer_contdwn_Sec">

                        <div id="countdown">

                            <div id='tiles' className = "row m-0"></div>

                            <div className = "labels row mx-0 mt-2">

                                <div className = "col-md-4">
                                    <li>Hours</li>
                                </div>

                                <div className = "col-md-4">
                                    <li>Mins</li>
                                </div>

                                <div className = "col-md-4">
                                    <li>Secs</li>
                                </div>

                            </div>

                        </div>

                    </div>

                    <h5 className = "mt-3 mb-2 font-600 font-16">Exam Status</h5>

                    <div className = "progressbar_container position-relative mt-0 mb-3">
                        <div className = "progress w-100">
                            <div id="dynamic" className = "progress-bar progress-bar-success active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>100% Complete</div>
                        </div>
                    </div>

                    <div className = "finish_exm_btn w-100 text-center mb-2 mt-4">
                        <button type="button" className = "btn btn-primary w-100 border-radius-xs py-2 btn-dark font-500 mb-0 font-16" style={{letterSpacing: "1.4px"}}>
                            FINISH NOW    
                        </button>
                    </div>
                    
                </div>
            </div>
            
        </>
        
    );
};

export default TestPExamTimer;