import React from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo_01 from "../assets/images/logo_01.png";
import { Link } from "react-router-dom";
// import "../assets/css/style.css";



function TestPageNav() {
    return (
        <> 
        {/* use classname = navbar01 */}
            <nav className = "navbar01 top_nav_on_test_pg_sec">
                <div className = "container-fluid justify-content-end">

                    <div className = "exit_frm_pg_nav w-100">

                        <div className = "the_tst_ext_btn py-1">
                            <Link to="/">
                                <button type="button" className = "btn btn-primary font-600 mb-0 font-16">
                                    <span className = "material-icons"><ExitToAppIcon /></span>
                                    Exit Exam
                                </button>
                            </Link>
                        </div>

                        <div className = "navbar-brand p-0 d-flex flex-wrap float-right">
                            <img className = "m-auto" src={logo_01} />
                        </div>

                    </div>

                </div>
            </nav>
        </>
    );
    
};

export default TestPageNav;