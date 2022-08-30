// import { Link, useHistory } from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from 'react-router';

function CourseDetailHeader() {

    let history = useHistory();

    const totestpage = () => {
        history.push('/testpage')
    }


    return (
        <>
            <header className="d-flex flex-wrap wow fadeInDown breadcrumb_section_tp breadcrumb_courses_details" data-wow-delay=".44s" style={{zIndex: "999"}}>
                <div className="container mb-0">
                    <div className="row m-0">
                    <div className="col-md-8 mr-auto breadcrumb_title_all">        
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb px-0 m-0">
                            <li className="breadcrumb-item font-14">
                            <a href="#" className="text-dark font-500 font-15">Home</a>
                            </li>
                            <li className="breadcrumb-item active text-white font-14 font-400" aria-current="page">
                            <a href="#" className="text-dark font-500 font-15">Courses</a>
                            </li>
                            <li className="breadcrumb-item active text-white font-14 font-400" aria-current="page">
                            Internet of Things (IoT) Architecture
                            </li>
                        </ol>
                        </nav>
                        <h1 className="font-500 text-white mb-4">Internet of Things (IoT) Architecture</h1>
                        <p className="text-white font-14 font-400 mt-4">
                        This course aims to highlight the need to incorporate security in IoT devices and solutions.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <div className="card_of_Selection_tech">
                        <h5 className="text-white font-400 font-18">Ready for the real environment experience?</h5>
                        {/* <!-- <p className="text-ddd">por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p> --> */}
                        <div className="select_technology_btn_02 pt-3 pb-0 w-100 d-flex justify-content-start position-relative">            
                            <button type="submit" onClick={totestpage} className="btn btn-primary choose_tech" data-toggle="modal" data-target="#choose_tech_id">
                            <span>                
                                Start Free Trial            
                                <span className="material-icons"><ArrowForwardIcon /></span>
                            </span>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </header>

        </>
    );
};

export default CourseDetailHeader;