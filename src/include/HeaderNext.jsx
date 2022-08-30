// p1

// import MemoryIcon from '@material-ui/icons/Memory';

// function HeaderNext() {
//     return(
//         <>

//             <header className="d-flex flex-wrap wow fadeInDown breadcrumb_section_tp breadcrumb_section_tp_on_pes_asses" data-wow-delay=".44s">
                
//                 <div className="container mb-0">

//                     <div className="row m-0">

//                         <div className="col-md-7 mr-auto breadcrumb_title_all">        
//                             <nav aria-label="breadcrumb">
//                             <ol className="breadcrumb px-0">
//                                 <li className="breadcrumb-item font-14"><a href="#" className="text-btn font-500 font-15">Home</a></li>
//                                 <li className="breadcrumb-item active text-white font-14 font-400" aria-current="page">
//                                 Pes Assessment Test
//                                 </li>
//                             </ol>
//                             </nav>
//                             <h1 className="font-500 text-white mb-4">PeS ASSESSMENT TEST</h1>
//                             <p className="text-ddd font-14 font-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//                             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
//                         </div>

//                         <div className="col-md-5">
//                             <div className="card_of_Selection_tech">
//                             <h4 className="text-white font-500">Take our 7-day Free Trial</h4>
//                             <p className="text-ddd">por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//                             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
//                             <div className="select_technology_btn_02 pt-3 pb-0 w-100 d-flex justify-content-start position-relative">            
//                                 <button type="button" className="btn btn-primary choose_tech" data-toggle="modal" data-target="#choose_tech_id">
//                                 <span>
//                                     <span className="material-icons"><MemoryIcon /></span>
//                                     Choose Technology            
//                                 </span>
//                                 </button>
//                             </div>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
            
//             </header>

//         </>
//     );
// };

// export default HeaderNext;



// p2
import MemoryIcon from '@material-ui/icons/Memory';
import { Link } from 'react-router-dom';


function HeaderNext(props) {
    return(
        <>

            <header className={props.background} data-wow-delay=".44s">
            
                <div className="container mb-0">

                    <div className="row m-0">

                        <div className="col-md-7 mr-auto breadcrumb_title_all">        
                            <nav aria-label="breadcrumb">
                            <ol className="breadcrumb px-0">
                                <li className="breadcrumb-item font-14"><Link to="/" className="text-btn font-500 font-15">Home</Link></li>
                                <li className="breadcrumb-item active text-white font-14 font-400" aria-current="page">
                                    {props.page}
                                </li>
                            </ol>
                            </nav>
                            <h1 className="font-500 text-white mb-4">{props.title}</h1>
                            <p className="text-ddd font-14 font-400 mt-4">{props.description} </p>
                        </div>

                        <div className="col-md-5">
                            <div className="card_of_Selection_tech">
                            <h4 className="text-white font-500">Take our 7-day Free Trial</h4>
                            <p className="text-ddd">por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                            <div className="select_technology_btn_02 pt-3 pb-0 w-100 d-flex justify-content-start position-relative">            
                                <button type="button" className="btn btn-primary choose_tech" data-toggle="modal" data-target="#choose_tech_id">
                                <span>
                                    <span className="material-icons"><MemoryIcon /></span>
                                    Choose Technology            
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

export default HeaderNext;