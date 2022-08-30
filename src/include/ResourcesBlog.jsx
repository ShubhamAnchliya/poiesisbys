// p1

// import React from "react";

// import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// import FilterListIcon from '@material-ui/icons/FilterList';

// import breadchrumb_bg_img_courses_01 from "../assets/images/breadchrumb_bg_img_courses_01.png";
// import breadchrumb_bg_img_training_resourses01 from "../assets/images/breadchrumb_bg_img_training_resourses01.png";
// import breadchrumb_bg_img_courses_02 from "../assets/images/breadchrumb_bg_img_courses_02.png";

// function ResourcesBlog() { 
//     return (
//         <>
//             <section className ="traning_resrses_sec">
//                 <div className ="container">

//                     <div className ="row m-0">

//                         <div className ="col-md-12">

//                             <h4 className ="m-0 font-600 float-left">Our Blogs & Articles</h4>

//                             <div className ="float-right blog_dropwn_filter_Sec">

//                                 <div className ="blog_dropwn_filter_Sec_container"> 

//                                     <div className ="wrap-drop wrap-drop-on-blog-filter btn btn-primary border-radius-xs btn-white btn-shadow" id="noble-gases">
                                    
//                                         <span>Default Sorting</span>
                                        
//                                         <ul className ="drop">

//                                             <li className ="selected"><a className ="btn btn-primary text-left">Default Sorting</a></li>
//                                             <li><a className ="btn btn-primary text-left">Sort by Courses</a></li>
//                                             <li><a className ="btn btn-primary text-left">Sort by Exams</a></li>  
//                                             <li><a className ="btn btn-primary text-left">Sort by Resourses</a></li>
//                                             <li><a className ="btn btn-primary text-left">Sort by Contests</a></li>

//                                         </ul>

//                                     </div>

//                                     <span className ="material-icons filter_blog_resorses_icon"><FilterListIcon /></span>

//                                 </div>

//                             </div>

//                         </div>

//                     </div>

//                     <div className ="row mx-0 my-4">  

//                         <div className ="col-md-6">

//                             <div className ="card flex-md-row mb-4 card-shadow h-md-250 blog_resourses_crd_container">

//                                 <div className ="row mx-0">

//                                     <div className ="col-md-8 pl-0">

//                                         <div className ="card-body d-flex flex-column align-items-start p-2">

//                                             <strong className ="d-inline-block mb-2 text-primary">
//                                                 <span className ="blue_bg_lbl_badge">Internet of Things Security</span>
//                                             </strong>

//                                             <h3 className ="mb-0 font-600">
//                                                 Featured Post
//                                             </h3>

//                                             <div className ="mb-1 text-777 font-13">Nov 12, 2020 
//                                                 <span className ="badge badge-info px-2 py-1 ml-2 font-500 font-13">Alex Smith</span>
//                                             </div>

//                                             <p className ="card-text text-dark mb-auto mt-2">This is a wider card with supporting text below as a natural lead-in to additional content. A a natural lead-in to additional content. a natural lead-in to additional content.</p>
                                           
//                                             <a href="blog_details.php" className ="btn btn-primary m-0 font-14 btn_rad_more_right px-0 mt-3">
//                                                 View More
//                                                 <span className ="material-icons"><ArrowRightAltIcon/></span>
//                                             </a>

//                                         </div>

//                                     </div>

//                                     <div className ="col-md-4 p-0">

//                                         <div className ="blog_resourses_img_container card-shadow">
//                                             <img className ="card-img-right flex-auto d-none d-md-block img-fluid" alt="Thumbnail [200x250]" src={breadchrumb_bg_img_courses_01} data-holder-rendered="true"  />
//                                         </div>

//                                     </div>

//                                 </div>

//                             </div>

//                         </div>

//                         <div className ="col-md-6">

//                             <div className ="card flex-md-row mb-4 card-shadow h-md-250 blog_resourses_crd_container">

//                                 <div className ="row mx-0">

//                                     <div className ="col-md-8 pl-0">

//                                         <div className ="card-body d-flex flex-column align-items-start p-2">

//                                             <strong className ="d-inline-block mb-2 text-primary">
//                                                 <span className ="blue_bg_lbl_badge">Internet of Things Architect</span>
//                                             </strong>

//                                             <h3 className ="mb-0 font-600">
//                                                 Featured Post
//                                             </h3>

//                                             <div className ="mb-1 text-777 font-13">Oct 27, 2020</div>

//                                             <p className ="card-text text-dark mb-auto mt-2">This is a wider card with supporting text below as a natural lead-in to additional content. A a natural lead-in to additional content. a natural lead-in to additional content.</p>
                                            
//                                             <a href="#" className ="btn btn-primary m-0 font-14 btn_rad_more_right px-0 mt-3">
//                                                 View More
//                                                 <span className ="material-icons"><ArrowRightAltIcon /></span>
//                                             </a>

//                                         </div>

//                                     </div>

//                                     <div className ="col-md-4 p-0">

//                                         <div className ="blog_resourses_img_container card-shadow">
//                                             <img className ="card-img-right flex-auto d-none d-md-block img-fluid" alt="Thumbnail [200x250]" src={breadchrumb_bg_img_courses_02} data-holder-rendered="true" />
//                                         </div>

//                                     </div>

//                                 </div>

//                             </div>

//                         </div>

//                         <div className ="col-md-6">

//                             <div className ="card flex-md-row mb-4 card-shadow h-md-250 blog_resourses_crd_container">

//                                 <div className ="row mx-0">

//                                     <div className ="col-md-8 pl-0">

//                                         <div class="card-body d-flex flex-column align-items-start p-2">

//                                             <strong class="d-inline-block mb-2 text-primary">
//                                                 <span class="blue_bg_lbl_badge">Internet of Things Communication</span>
//                                             </strong>

//                                             <h3 class="mb-0 font-600">
//                                                 Featured Post
//                                             </h3>

//                                             <div class="mb-1 text-777 font-13">Sep 22, 2020</div>

//                                             <p class="card-text text-dark mb-auto mt-2">This is a wider card with supporting text below as a natural lead-in to additional content. A a natural lead-in to additional content. a natural lead-in to additional content.</p>
                                            
//                                             <a href="#" class="btn btn-primary m-0 font-14 btn_rad_more_right px-0 mt-3">
//                                                 View More
//                                                 <span class="material-icons"><ArrowRightAltIcon /></span>
//                                             </a>

//                                         </div>

//                                     </div>

//                                     <div class="col-md-4 p-0">

//                                         <div class="blog_resourses_img_container card-shadow">
//                                             <img class="card-img-right flex-auto d-none d-md-block img-fluid" alt="Thumbnail [200x250]" src={breadchrumb_bg_img_training_resourses01} data-holder-rendered="true" />
//                                         </div>

//                                     </div>

//                                 </div>

//                             </div>

//                         </div>

//                     </div>

//                 </div>
//             </section>

//         </>

//     );
// };

// export default ResourcesBlog;




//p2

import ResourcesBlogCard from '../include/ResourcesBlogCard';

import FilterListIcon from '@material-ui/icons/FilterList';

import breadchrumb_bg_img_courses_01 from '../assets/images/breadchrumb_bg_img_courses_01.png';
import breadchrumb_bg_img_training_resourses01 from '../assets/images/breadchrumb_bg_img_training_resourses01.png';
import breadchrumb_bg_img_courses_02 from '../assets/images/breadchrumb_bg_img_courses_02.png';



function ResourcesBlog() {
    return (
        <>      
            <section className="traning_resrses_sec">
                <div className="container">

                    <div className="row m-0">

                        <div className="col-md-12">

                            <h4 className="m-0 font-600 float-left">Our Blogs & Articles</h4>

                            <div className="float-right blog_dropwn_filter_Sec">

                                <div className="blog_dropwn_filter_Sec_container">

                                    <div className="wrap-drop wrap-drop-on-blog-filter btn btn-primary border-radius-xs btn-white btn-shadow" id="noble-gases">
                                        
                                        <span>Default Sorting</span>
                                       
                                        <ul className="drop">
                                           
                                            <li className="selected"><a className="btn btn-primary text-left">Default Sorting</a></li>
                                            <li><a className="btn btn-primary text-left">Sort by Courses</a></li>
                                            <li><a className="btn btn-primary text-left">Sort by Exams</a></li>  
                                            <li><a className="btn btn-primary text-left">Sort by Resourses</a></li>
                                            <li><a className="btn btn-primary text-left">Sort by Contests</a></li>

                                        </ul>

                                    </div>
                                    
                                    <span className="material-icons filter_blog_resorses_icon"><FilterListIcon /></span>
                                
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="row mx-0 my-4">

                        <ResourcesBlogCard label="Internet of Things Security" title="Featured Post" image={breadchrumb_bg_img_courses_01} date="Nov 12, 2020" description="This is a wider card with supporting text below as a natural lead-in to additional content. A a natural lead-in to additional content. a natural lead-in to additional content." link="https://internetofthingsagenda.techtarget.com/definition/IoT-security-Internet-of-Things-security" />
                        <ResourcesBlogCard label="Internet of Things Architect" title="Featured Post" image={breadchrumb_bg_img_training_resourses01} date="Oct 27, 2020" description="This is a wider card with supporting text below as a natural lead-in to additional content. A a natural lead-in to additional content. a natural lead-in to additional content." link="https://medium.datadriveninvestor.com/4-stages-of-iot-architecture-explained-in-simple-words-b2ea8b4f777f" />
                        <ResourcesBlogCard label="Internet of Things Communication" title="Featured Post" image={breadchrumb_bg_img_courses_02} date="Sep 22, 2020" description="This is a wider card with supporting text below as a natural lead-in to additional content. A a natural lead-in to additional content. a natural lead-in to additional content." link="https://www.getkisi.com/blog/internet-of-things-communication-protocols" />
                   
                    </div>

                </div>
            </section>          
        </>
    );
}
export default ResourcesBlog; 