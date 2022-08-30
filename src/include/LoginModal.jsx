
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo_02_old from "../assets/images/logo_02_old.png";

function LoginModal() {
  return (
    <>       
        <Modal >



            <Modal.Body className ="p-0">

              <div className = "row m-0">

                <div className = "col-md-3 px-0">

                  <div className = "left_Register_bg_sec">

                    <div className = "login_modal_logo mb-4">

                      <img src={logo_02_old} style={{maxWidth: "100%"}} />

                    </div>

                    <div className = "the_all_steps_for_register">

                      <div className = "card_step mt-5">

                        <h5 className = "font-600 position-relative">Step 1</h5>
                        <p className = "text-dark font-400 font-14">
                            Lorem ipsum dolor sit amet, consecteturadipisicing elit.
                        </p>

                      </div>

                      <div className = "card_step mt-5">

                        <h5 className = "font-600 position-relative">Step 2</h5>
                        <p className = "text-dark font-400 font-14">
                            labore et dolore magna aliqua. Ut enim ad minim veniam, esse cillum dolore.
                        </p>

                      </div>

                      <div className = "card_step mt-5">

                        <h5 className = "font-600 position-relative">Step 3</h5>
                        <p className = "text-dark font-400 font-14">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>

                      </div>
                    
                      <div className = "card_step_on_login">

                        <h5 className = "font-600 position-relative">POIESIS</h5>
                        <p className = "text-dark font-400 font-14">
                          The absence of standard
                          benchmarking makes it difficult
                          for a technology professional to
                          assess and understand their
                          competitive position.
                        </p>

                      </div>
                     
                    </div>

                  </div>

                </div>

                <div className = "col-md-9">

                  <div className = "register_login_modal_all_01">

                    <div className = "register_login_modal_title col-md-12 d-inline-block">

                      <h2 className = "position-relative font-600 d-inline-block float-left">

                        REGISTER
                        <span className = "font-400" style="font-size: 22px;">NOW</span>

                      </h2>

                      <div className = "login_sign_up_btns float-right py-3">
                        
                        <span className = "pl-4 pr-2 font-500" style={{color: "#777"}}>Already have an account?</span>
                        <a href="#!" className = "sign_up_btn_mdl_popup">LOGIN</a>

                      </div>

                    </div>

                    <form className = "row mx-0 mt-4 mb-0 w-100">

                     {/* <!-- ///// Designation ///// --> */}

                      <div className = "form-group col-md-6">

                        <label for="exampleInputtext" className = "bmd-label-floating">Full Name</label>
                        <input type="text" className = "form-control" id="exampleInputtext" />
                        <span className = "bmd-help">We'll never share your name with anyone else.</span>

                      </div>

                      <div className = "form-group col-md-6">

                        <label for="exampleInputtext" className = "bmd-label-floating">Last Name</label>
                        <input type="text" className = "form-control" id="exampleInputtext" />
                        <span className = "bmd-help">We'll never share your name with anyone else.</span>

                      </div>

                      <div className = "form-group col-md-6">

                        <label for="exampleInputEmail1" className = "bmd-label-floating">Email ID</label>
                        <input type="email" className = "form-control" id="exampleInputEmail1" />
                        <span className = "bmd-help">We'll never share your email with anyone else.</span>

                      </div>

                      <div className = "form-group col-md-6">

                        <label for="exampleInputtext" className = "bmd-label-floating">Phone Number</label>
                        <input type="text" className = "form-control" id="exampleInputtext" />
                        <span className = "bmd-help">We'll never share your phone number with anyone else.</span>

                      </div>

                      <div className = "form-group col-md-6">

                        <label for="exampleInputtext" className = "bmd-label-floating">Company & job role</label>
                        <input type="text" className = "form-control" id="exampleInputtext" />
                        <span className = "bmd-help">We'll never share your job role with anyone else.</span>

                      </div>

                      <div className = "form-group col-md-6">

                        <label for="exampleInputtext" className = "bmd-label-floating">College</label>
                        <input type="text" className = "form-control" id="exampleInputtext" />
                        <span className = "bmd-help">We'll never share your college with anyone else.</span>

                      </div>

                      <div className = "form-group col-md-6">

                        <label for="exampleInputtext" className = "bmd-label-floating">City</label>
                        <input type="text" className = "form-control" id="exampleInputtext" /> 
                        <span className = "bmd-help">We'll never share your city with anyone else.</span>

                      </div>

                      <div className = "form-group col-md-6">

                        <label for="exampleInputtext" className = "bmd-label-floating">Country</label>
                        <input type="text" className = "form-control" id="exampleInputtext" />
                        <span className = "bmd-help">We'll never share your country with anyone else.</span>

                      </div>
                      
                      <div className = "form-group col-md-6">

                        <label for="exampleInputpassword" className = "bmd-label-floating">Passowrd</label>
                        <input type="passowrd" className = "form-control" id="exampleInputtext" />
                        <span className = "bmd-help">We'll never share your password with anyone else.</span>                       
                        <span toggle="#password-field" className = "fas fa-eye toggle-password"></span>
                       
                      </div>

                      <div className = "form-group col-md-6">

                        <label for="exampleInputpassword" className = "bmd-label-floating">Confirm Passowrd</label>
                        <input type="passowrd" className = "form-control" id="exampleInputtext" />
                        <span className = "bmd-help">We'll never share your password with anyone else.</span>                       
                        <span toggle="#password-field" className = "fas fa-eye toggle-password"></span>
                        
                      </div>

                      <div className = "col-md-12 mt-4 pt-0">

                        <div className = "row m-0">

                          <div className = "col-md-6 px-0 m-auto">

                            <div className = "checkbox">

                              <label className = "m-0">
                                <input type="checkbox" /> <span className = "font-14 ml-2 text-dark font-500" >Accept Terms & Conditions</span>
                              </label>

                            </div>

                          </div>

                          <div className = "col-md-6 px-0 text-right btn_signup_modal_popup">
                           
                            <button type="submit" className = "btn btn-primary">Sign Up</button>

                          </div>

                        </div>

                      </div>

                    </form>

                  </div>

                  {/* <!-- //////////////// ON LOGIN ///////////////// --> */}

                  <div className = "register_login_modal_all_01_by_login">

                    <div className = "register_login_modal_title col-md-12 d-inline-block">

                      <h2 className = "position-relative font-600 d-inline-block float-left">
                        LOGIN
                        <span className = "font-400" style={{fontSize: "22px"}}>NOW</span>
                      </h2>

                      <div className = "login_sign_up_btns float-right py-3">
                        <span className = "pl-4 pr-2 font-500" style={{color: "#777"}}>Don't have an account?</span>
                        <a href="#!" className = "sign_up_btn_mdl_popup sign_up_btn_mdl_popup_0101">SIGN UP</a>
                      </div>

                    </div>

                    <form className = "row mx-0 mt-5 mb-4 w-100">

                      <div className = "form-group col-md-12">

                        <label for="exampleInputEmail1" className = "bmd-label-floating">Email ID</label>
                        <input type="email" className = "form-control" id="exampleInputEmail1" />
                        <span className = "bmd-help">We'll never share your email with anyone else.</span>

                      </div>

                      <div className = "form-group col-md-12">

                        <label for="exampleInputpassword" className = "bmd-label-floating">Passowrd</label>
                        <input type="passowrd" className = "form-control" id="exampleInputtext" />
                        <span className = "bmd-help">We'll never share your email with anyone else.</span>                       
                        <span toggle="#password-field" className = "fas fa-eye toggle-password"></span>
                        
                      </div>
                  
                      <div className = "col-md-12 mt-5 pt-4">

                        <div className = "row m-0">

                          <div className = "col-md-12 px-0 text-right btn_signup_modal_popup">
                           
                            <button type="submit" className = "btn btn-primary">Login</button>

                          </div>

                        </div>

                      </div>

                    </form>

                  </div>         

                </div>

              </div>
            
            </Modal.Body> 

        </Modal>

    </>
  );
};

export default LoginModal;


