import React from 'react';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TimerIcon from '@mui/icons-material/Timer';

function TestPageHeader() {
    return (
        <>
           <header className="d-flex flex-wrap wow fadeInDown breadcrumb_test_pg pt-4" data-wow-delay=".44s" style={{ zIndex: "999" }}>
                <div className="container mb-0">
                    <div className="row m-0">
                        <div className="col-md-8 mr-auto">
                            <h1 className="font-500 text-white mb-0 mt-4">ANDROID</h1>
                            <ul className="course_info_abt_tst_hed_pg">
                                <li className="col-md-4 text-left float-left">
                                    <div className="info_tst_pg_contianer">
                                        <h6 className="font-500 text-white">Total Questions</h6>
                                        <span className="font-600 font-16">15</span>
                                        <span className="material-icons" style={{ color: "#9c27b0" }}><NotListedLocationIcon /></span>
                                    </div>
                                </li>
                                <li className="col-md-4 text-left float-left">
                                    <div className="info_tst_pg_contianer">
                                        <h6 className="font-500 text-white">Duration</h6>
                                        <span className="font-600 font-16">01:00 Hours</span>
                                        <span className="material-icons" style={{ color: "#03a9f4" }}><TimerIcon /></span>
                                    </div>
                                </li>
                                <li className="col-md-4 text-left float-left">
                                    <div className="info_tst_pg_contianer">
                                        <h6 className="font-500 text-white">Difficulty</h6>
                                        <span className="font-600 font-16">Medium</span>
                                        <span className="material-icons" style={{ color: "#f44336" }}><TrendingUpIcon /></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

        </>
        
    );
};

export default TestPageHeader;