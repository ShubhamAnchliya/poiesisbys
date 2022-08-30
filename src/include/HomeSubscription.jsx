import React from "react";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function HomeSubscription() {
    return(
        <>
            <section className ="subs_newsltr_Section">
                <div className ="container">
                    <div className ="row mx-0">
                        <div className ="col-md-12">

                            <div className ="title_heading_expert_sec d-flex flex-wrap mb-2 wow fadeInDown" data-wow-delay=".12s;">
                                <h1 className ="mx-auto d-inline-block position-relative text-center mb-4 text-white" style={{lineHeight: "1.2"}}>
                                    Subscribe our
                                    <b>Newsletter</b>            
                                </h1>
                            </div>

                            <div className ="col-md-6 m-auto">
                                <p className ="font-500 text-white font-16 w-100 text-center mt-0">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                                </p>
                            </div>
                    
                            <div className ="col-md-8 m-auto d-flex justify-content-center">

                                <div className ="input_sction_nws_selter d-inline-block w-auto float-left">
                                    <div className ="form-group col-md-12 py-0 mt-4">
                                        <span className ="material-icons"><MailOutlineIcon/></span>
                                        <input type="email" className ="form-control" placeholder="Enter Your Email"/>
                                    </div>
                                    <span className ="text-white font-14 px-3">Your information is safe with us! unsubscribe anytime.</span>
                                </div>

                                <div className ="sbs_btn_Sec_newstr float-left w-auto mt-4">
                                    <button type="submit" className ="btn btn-primary btn-dark border-radius-xs w-auto font-500 font-15 px-5">Subscribe</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );

};

export default HomeSubscription;