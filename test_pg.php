<?php include('include/header.php')?>

<!-- ///// Header Breadcrumbs ////// -->
<style type="text/css">
  
.navbar.navbar-expand-lg.navbar-light.bg-light{
  display: none !important;
}

.top_nav_on_test_pg_sec{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

.the_tst_ext_btn{
    width: auto;
    display: inline-block;
    float: left;
}

.the_tst_ext_btn button{
    float: left;
    position: relative;
    background: #fff !important;
    border-radius: 4px !important;
    padding-right: 35px;
    padding-left: 50px;
    padding-top: 12px;
    padding-bottom: 10px;
    color: #141413 !important;
    transition: .2s;
}

.the_tst_ext_btn button .material-icons{
  position: absolute;
  left: 15px;
  top: 10px;
  transform: rotate(180deg);
}

.the_tst_ext_btn button:hover{
  transform:scale(1.1);
  transition: all .2s ease-in-out;
  box-shadow: 0 7px 45px rgba(0,0,0,.09);
}

/*///// timer css /////*/

.the_tmer_contdwn_Sec{
  width: 100%;
}

#countdown{
  width: 100%;
  height: auto;
  text-align: center;
  margin: auto;
  padding: 15px 0;
  position: relative;
}

#countdown #tiles{
  position: relative;
  z-index: 1;
}

#countdown #tiles .col-md-4 > span{
  width: 100%;
  height: 100%;
  float: left;
  text-align: center;
  background-color: #fff;
  width: 80px;
  height: 80px;
  padding: 18px;
  justify-content: center;
  border-radius: 50%;
  display: flex;
  font-size: 30px;
  color: #ff9800;
  font-weight: 600;
  flex-wrap: wrap;
  border: 3px solid #ff9800;
  position: relative;
}

#countdown #tiles .col-md-4:nth-child(2) > span{
  color: #3f51b5;
  border: 3px solid #3f51b5;
}

#countdown #tiles .col-md-4:nth-child(3) > span{
  color: #9c27b0;
  border: 3px solid #9c27b0;
}

#countdown .labels{
  width: 100%;
  height: auto;
  text-align: center;
  position: relative;
  bottom: 0;
}

#countdown .labels li{
  color: #ff9800;
  text-align: center;
  text-transform: uppercase;
  display: inline-block;
  font-weight: 600;
}

#countdown .labels .col-md-4:nth-child(2) > li{
  color: #3f51b5;
}

#countdown .labels .col-md-4:nth-child(3) > li{
  color: #9c27b0;
}

.fixed_timer_card{
  position: fixed;
  top: 115px;
  transition: .3s;
}

/*////// top icons ///////*/


</style>

<nav class="navbar top_nav_on_test_pg_sec">
  <div class="container-fluid justify-content-end">
    <div class="exit_frm_pg_nav w-100">
      <div class="the_tst_ext_btn py-1">
        <a href="index.php">
          <button type="button" class="btn btn-primary font-600 mb-0 font-16">
            <span class="material-icons">login</span>
            Exit Exam
          </button>
        </a>
      </div>
      <div class="navbar-brand p-0 d-flex flex-wrap float-right">
        <img class="m-auto" src="assets/images/logo_01.png">
      </div>
    </div>
  </div>
</nav>
  

<header class="d-flex flex-wrap wow fadeInDown breadcrumb_test_pg pt-4" data-wow-delay=".44s" style="z-index: 999;">
  <div class="container mb-0">
    <div class="row m-0">
      <div class="col-md-8 mr-auto">                
        <h1 class="font-500 text-white mb-0 mt-4">ANDROID</h1>
        <ul class="course_info_abt_tst_hed_pg">
            <li class="col-md-4 text-left float-left">
              <div class="info_tst_pg_contianer">
                <h6 class="font-500 text-white">Total Questions</h6>
                <span class="font-600 font-16">15</span>
                <span class="material-icons" style="color: #9c27b0;">not_listed_location</span>
              </div>
            </li>
            <li class="col-md-4 text-left float-left">
              <div class="info_tst_pg_contianer">
                <h6 class="font-500 text-white">Duration</h6>
                <span class="font-600 font-16">01:00 Hours</span>
                <span class="material-icons" style="color: #03a9f4;">pending_actions</span>
              </div>
            </li>
            <li class="col-md-4 text-left float-left">
              <div class="info_tst_pg_contianer">
                <h6 class="font-500 text-white">Difficulty</h6>
                <span class="font-600 font-16">Medium</span>
                <span class="material-icons" style="color: #f44336;">trending_up</span>
              </div>
            </li>
        </ul>
      </div>
    </div>
  </div>
</header>

<div class="col-md-12">
  <div class="card_sec_on_tst_pg_by_tmr">
    <h5 class="text-dark font-600 font-18">Exam Timer</h5>
    <p class="text-dark font-500 font-14">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div class="the_tmer_contdwn_Sec">
      <div id="countdown">
        <div id='tiles' class="row m-0"></div>
        <div class="labels row mx-0 mt-2">
          <div class="col-md-4">
            <li>Hours</li>
          </div>
          <div class="col-md-4">
            <li>Mins</li>
          </div>
          <div class="col-md-4">
            <li>Secs</li>
          </div>
        </div>
      </div>
    </div>

    <h5 class="mt-3 mb-2 font-600 font-16">Exam Status</h5>
    <div class="progressbar_container position-relative mt-0 mb-3">
      <div class="progress w-100">
        <div id="dynamic" class="progress-bar progress-bar-success active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">100% Complete</div>
      </div>
    </div>


    <div class="finish_exm_btn w-100 text-center mb-2 mt-4">
      <button type="button" class="btn btn-primary w-100 border-radius-xs py-2 btn-dark font-500 mb-0 font-16" style="letter-spacing: 1.4px;">
        FINISH NOW    
      </button>
    </div>
    
  </div>
</div>
<!-- ////////------------//////// -->


<!-- /////// All Question Test Page Sec //////// -->

<section class="all_questn_test_pg">
  <div class="container">
    <div class="row m-0">
      <div class="col-md-8 px-4">
        <div class="show_result_Sec_txt mb-3">
          <h5 class="font-600">Total Questions - 60</h5>
        </div>
        <div class="all_questn_tst_sec_contain">
          <div class="my-2 pb-3 border-bottom-gray w-100">
            <span class="float-left font-600 mr-3 font-18">1)</span>
            <h6 class="font-600 float-left">A thing in “Internet of Things” is:</h6>
            <form class="d-inline-block w-100 mt-3 mb-0">
              <div class="radio mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                  A smart mundane object.
                </label>
              </div>
              <div class="radio mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                  A Computer
                </label>
              </div>
              <div class="radio disabled mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios4" value="option4">
                  A Sensor
                </label>
              </div>
              <div class="radio disabled mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios5" value="option5">
                  A Actuator
                </label>
              </div> 
            </form>
          </div>        
          <div class="my-2 pb-3 border-bottom-gray w-100">
            <span class="float-left font-600 mr-3 font-18">1)</span>
            <h6 class="font-600 float-left">A thing in “Internet of Things” is:</h6>
            <form class="d-inline-block w-100 mt-3 mb-0">
              <div class="radio mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                  A smart mundane object.
                </label>
              </div>
              <div class="radio mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                  A Computer
                </label>
              </div>
              <div class="radio disabled mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios4" value="option4">
                  A Sensor
                </label>
              </div>
              <div class="radio disabled mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios5" value="option5">
                  A Actuator
                </label>
              </div> 
            </form>
          </div> 
          <div class="my-2 pb-3 border-bottom-gray w-100">
            <span class="float-left font-600 mr-3 font-18">1)</span>
            <h6 class="font-600 float-left">A thing in “Internet of Things” is:</h6>
            <form class="d-inline-block w-100 mt-3 mb-0">
              <div class="radio mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                  A smart mundane object.
                </label>
              </div>
              <div class="radio mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                  A Computer
                </label>
              </div>
              <div class="radio disabled mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios4" value="option4">
                  A Sensor
                </label>
              </div>
              <div class="radio disabled mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios5" value="option5">
                  A Actuator
                </label>
              </div> 
            </form>
          </div> 
          <div class="my-2 pb-3 border-bottom-gray w-100">
            <span class="float-left font-600 mr-3 font-18">1)</span>
            <h6 class="font-600 float-left">A thing in “Internet of Things” is:</h6>
            <form class="d-inline-block w-100 mt-3 mb-0">
              <div class="radio mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                  A smart mundane object.
                </label>
              </div>
              <div class="radio mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                  A Computer
                </label>
              </div>
              <div class="radio disabled mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios4" value="option4">
                  A Sensor
                </label>
              </div>
              <div class="radio disabled mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios5" value="option5">
                  A Actuator
                </label>
              </div> 
            </form>
          </div> 
          <div class="my-2 pb-3 border-bottom-gray w-100">
            <span class="float-left font-600 mr-3 font-18">1)</span>
            <h6 class="font-600 float-left">A thing in “Internet of Things” is:</h6>
            <form class="d-inline-block w-100 mt-3 mb-0">
              <div class="radio mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                  A smart mundane object.
                </label>
              </div>
              <div class="radio mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                  A Computer
                </label>
              </div>
              <div class="radio disabled mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios4" value="option4">
                  A Sensor
                </label>
              </div>
              <div class="radio disabled mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios5" value="option5">
                  A Actuator
                </label>
              </div> 
            </form>
          </div> 
          <div class="my-2 pb-3 border-bottom-gray w-100">
            <span class="float-left font-600 mr-3 font-18">1)</span>
            <h6 class="font-600 float-left">A thing in “Internet of Things” is:</h6>
            <form class="d-inline-block w-100 mt-3 mb-0">
              <div class="radio mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                  A smart mundane object.
                </label>
              </div>
              <div class="radio mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                  A Computer
                </label>
              </div>
              <div class="radio disabled mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios4" value="option4">
                  A Sensor
                </label>
              </div>
              <div class="radio disabled mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios5" value="option5">
                  A Actuator
                </label>
              </div> 
            </form>
          </div> 
          <div class="my-2 pb-3 border-bottom-gray w-100">
            <span class="float-left font-600 mr-3 font-18">1)</span>
            <h6 class="font-600 float-left">A thing in “Internet of Things” is:</h6>
            <form class="d-inline-block w-100 mt-3 mb-0">
              <div class="radio mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                  A smart mundane object.
                </label>
              </div>
              <div class="radio mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                  A Computer
                </label>
              </div>
              <div class="radio disabled mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios4" value="option4">
                  A Sensor
                </label>
              </div>
              <div class="radio disabled mb-2">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios5" value="option5">
                  A Actuator
                </label>
              </div> 
            </form>
          </div> 
        </div>
      </div>
    </div>
  </div>
</section>

<style type="text/css">

  footer{
    display: none;
  }

</style>

<!-- ////// Footer //////// -->

<footer class="footer_main_Section wow fadeInUp" data-wow-delay=".14s">
  <!-- <div class="footer_main_bg_overlay_img"></div> -->
  <div class="container">
    <div class="row m-0">
      <div class="footer_logo col-md-12">
        <a class="navbar-brand p-0 wow fadeInLeft" data-wow-delay=".14s" href="#">
          <img src="assets/images/logo_01.png" style="width: 25%;">
        </a>
      </div>
      <div class="row my-2 mx-0 py-5" style="border-bottom: 1px solid #777;">

        <div class="col-md-3 px-4 wow fadeInUp" data-wow-delay=".14s">
          <h4 class="footer_heading mb-4 font-500">About</h4> 
          <p class="font-14 footer_para font-400 mb-4">
            e-Learning solution is committed
            to partnering with innovation 
            focused organizations that
            understand that building
            world-class teams.
          </p>
          <p class="font-14 footer_para font-400">
            e-Learning solution is committed  
            with innovation-focused.
          </p>
        </div>

        <div class="col-md-3 px-4 wow fadeInUp" data-wow-delay=".14s">
          <h4 class="footer_heading mb-4 font-500">Partners</h4> 
          <ul class="mb-4 prtnr_ul_Sec font-14 font-400">
            <li><a href="#!">Solution Partner</a></li>
            <li><a href="#!">Technology Partner</a></li>
            <li><a href="#!">Training Partner</a></li>
            <li><a href="#!">Training Partner</a></li>
          </ul>
        </div>

        <div class="col-md-3 px-4 wow fadeInUp" data-wow-delay=".14s">
          <h4 class="footer_heading mb-4 font-500">Courses</h4> 
          <ul class="mb-4 prtnr_ul_Sec font-14 font-400">
            <li><a href="#!">Solution Partner</a></li>
            <li><a href="#!">Technology Partner</a></li>
            <li><a href="#!">Training Partner</a></li>
            <li><a href="#!">Training Partner</a></li>
          </ul>
        </div>

        <div class="col-md-3 px-4 wow fadeInUp" data-wow-delay=".14s">
          <h4 class="footer_heading mb-4 font-500">Follow Us</h4> 
          <ul class="mb-4 prtnr_ul_Sec font-14 font-400 pl-0" style="list-style-type: none;">
            <li><a href="#!"><i class="fab fa-facebook mr-3" style="font-size: 20px;"></i>Facebook</a></li>
            <li><a href="#!"><i class="fab fa-twitter mr-3" style="font-size: 20px;"></i>Twitter</a></li>
            <li><a href="#!"><i class="fab fa-linkedin-in mr-3" style="font-size: 20px;"></i>LinkedIn</a></li>
          </ul>
        </div>
        
        <div class="row m-0 w-100">
          <div class="col-md-12 m-auto d-flex">
            <h4 class="footer_heading mb-4 mx-auto font-500 d-inline-block">Get It On</h4> 
          </div>
          <div class="col-md-4 col-sm-8 col-xs-12 m-auto">
            <div class="app_store_links_btn">
              <button class="btn btn-primary app-play-str-btn">
                <span><img src="assets/images/play-store01.svg"></span>
                <span>GOOGLE PLAY</span>
              </button>
            </div>
            <div class="app_store_links_btn">
              <button class="btn btn-primary app-play-str-btn">
                <span><img src="assets/images/app-store.svg"></span>
                <span>APP STORE</span>
              </button>
            </div>
          </div>
        </div>

      </div>    
      <div class="row mx-0 mt-3 w-100">
        <div class="col-md-7 wow fadeInLeft" data-wow-delay=".14s">
          <p class="m-0 font-400 font-14" style="color: #fff !important">
            Copyright ©2020 poiesis. All rights reserved.
          </p>
        </div>
        <div class="col-md-5 text-right wow fadeInRight" data-wow-delay=".14s">
          <a href="#!" class="mx-3 font-500" style="text-decoration: underline; color: #fff !important">Terms of Use</a>
          <a href="#!" class="mx-3 font-500" style="text-decoration: underline; color: #fff !important">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>
</footer>

<!-- ////////// -------- ////////// -->

<!-- ///////// Login modal popup ////////// -->

<!-- Modal -->
<div class="modal fade login_modal_popup" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-shadow: 0px 2px 3px rgba(0,0,0,.47);">
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="modal-body p-0">
        <div class="row m-0">
          <div class="col-md-3 px-0">
            <div class="left_Register_bg_sec">
              <div class="login_modal_logo mb-4">
                <img src="assets/images/logo_02_old.png" style="max-width: 100%;">
              </div>
              <div class="the_all_steps_for_register">
                <div class="card_step mt-5">
                  <h5 class="font-600 position-relative">Step 1</h5>
                  <p class="text-dark font-400 font-14">
                      Lorem ipsum dolor sit amet, consecteturadipisicing elit.
                  </p>
                </div>
                <div class="card_step mt-5">
                  <h5 class="font-600 position-relative">Step 2</h5>
                  <p class="text-dark font-400 font-14">
                      labore et dolore magna aliqua. Ut enim ad minim veniam, esse cillum dolore.
                  </p>
                </div>
                <div class="card_step mt-5">
                  <h5 class="font-600 position-relative">Step 3</h5>
                  <p class="text-dark font-400 font-14">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <!-- /////////// -->
                <div class="card_step_on_login">
                  <h5 class="font-600 position-relative">POIESIS</h5>
                  <p class="text-dark font-400 font-14">
                    The absence of standard
                    benchmarking makes it difficult
                    for a technology professional to
                    assess and understand their
                    competitive position.
                  </p>
                </div>
                <!-- /////////// -->
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="register_login_modal_all_01">
              <div class="register_login_modal_title col-md-12 d-inline-block">
                <h2 class="position-relative font-600 d-inline-block float-left">
                  REGISTER
                  <span class="font-400" style="font-size: 22px;">NOW</span>
                </h2>
                <div class="login_sign_up_btns float-right py-3">
                  <!-- <a href="#!" class="pr-4 login_btn_mdl_popup active" style="border-right: 1px solid #ddd">SIGN UP</a> -->
                  <span class="pl-4 pr-2 font-500" style="color: #777;">Already have an account?</span>
                  <a href="#!" class="sign_up_btn_mdl_popup">LOGIN</a>
                </div>
              </div>

              <form class="row mx-0 mt-4 mb-0 w-100">

                <!-- ///// Designation ///// -->

                <!-- <div class="form-group col-md-3 p-0 my-auto text-center">
                  <h5 class="text-dark font-600 m-0">USER TYPE</h5>
                </div> -->
                <!-- <div class="form-group col-md-9 mx-auto p-0 mb-0">
                  <div class="row m-0">
                    <div class="select_tech_radio_btn w-100 row mx-0 my-3 btn-group btn-group-toggle" data-toggle="buttons">
                      <div class="col-md-6 float-left">
                        <label class="btn btn-secondary the_custom_radio_btn_chse_des_type">
                          <span class="material-icons check_radio_icon">check_circle</span>
                          <div class="the_img_on_rdio_btn_chse_des_type">
                            <img src="assets/images/student_icon.svg">
                          </div>
                          <input type="radio" name="options" id="option1" autocomplete="off"checked=""> 
                          <h6 class="font-500 float-left my-3 pt-1 ml-4">Student</h6>
                        </label>
                      </div>
                      <div class="col-md-6 float-left">
                        <label class="btn btn-secondary the_custom_radio_btn_chse_des_type">
                          <span class="material-icons check_radio_icon">check_circle</span>
                          <div class="the_img_on_rdio_btn_chse_des_type">
                            <img src="assets/images/sme_icon.svg">
                          </div>
                          <input type="radio" name="options" id="option2" autocomplete="off"> 
                          <h6 class="font-500 float-left my-3 pt-1 ml-4">SME</h6>                   
                        </label>
                      </div>
                    </div>
                  </div>
                </div> -->

                <div class="form-group col-md-6">
                  <label for="exampleInputtext" class="bmd-label-floating">Full Name</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                  <span class="bmd-help">We'll never share your name with anyone else.</span>
                </div>
                <div class="form-group col-md-6">
                  <label for="exampleInputtext" class="bmd-label-floating">Last Name</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                  <span class="bmd-help">We'll never share your name with anyone else.</span>
                </div>
                <div class="form-group col-md-6">
                  <label for="exampleInputEmail1" class="bmd-label-floating">Email ID</label>
                  <input type="email" class="form-control" id="exampleInputEmail1">
                  <span class="bmd-help">We'll never share your email with anyone else.</span>
                </div>
                <div class="form-group col-md-6">
                  <label for="exampleInputtext" class="bmd-label-floating">Phone Number</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                  <span class="bmd-help">We'll never share your phone number with anyone else.</span>
                </div>
                <div class="form-group col-md-6">
                  <label for="exampleInputtext" class="bmd-label-floating">Company & job role</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                  <span class="bmd-help">We'll never share your job role with anyone else.</span>
                </div>
                <div class="form-group col-md-6">
                  <label for="exampleInputtext" class="bmd-label-floating">College</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                  <span class="bmd-help">We'll never share your college with anyone else.</span>
                </div>
                <div class="form-group col-md-6">
                  <label for="exampleInputtext" class="bmd-label-floating">City</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                  <span class="bmd-help">We'll never share your city with anyone else.</span>
                </div>
                <div class="form-group col-md-6">
                  <label for="exampleInputtext" class="bmd-label-floating">Country</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                  <span class="bmd-help">We'll never share your country with anyone else.</span>
                </div>
                
                <div class="form-group col-md-6">
                  <label for="exampleInputpassword" class="bmd-label-floating">Passowrd</label>
                  <input type="passowrd" class="form-control" id="exampleInputtext">
                  <span class="bmd-help">We'll never share your password with anyone else.</span>
                  <!-- <span class="material-icons">visibility</span> -->
                  <span toggle="#password-field" class="fas fa-eye toggle-password"></span>
                  <!-- <i class="fas fa-eye"></i> -->
                </div>

                <div class="form-group col-md-6">
                  <label for="exampleInputpassword" class="bmd-label-floating">Confirm Passowrd</label>
                  <input type="passowrd" class="form-control" id="exampleInputtext">
                  <span class="bmd-help">We'll never share your password with anyone else.</span>
                  <!-- <span class="material-icons">visibility</span> -->
                  <span toggle="#password-field" class="fas fa-eye toggle-password"></span>
                  <!-- <i class="fas fa-eye"></i> -->
                </div>

                <div class="col-md-12 mt-4 pt-0">
                  <div class="row m-0">
                    <div class="col-md-6 px-0 m-auto">
                      <div class="checkbox">
                        <label class="m-0">
                          <input type="checkbox"> <span class="font-14 ml-2 text-dark font-500">Accept Terms & Conditions</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 px-0 text-right btn_signup_modal_popup">
                      <!-- <button class="btn btn-default">Cancel</button> -->
                      <button type="submit" class="btn btn-primary">Sign Up</button>
                    </div>
                  </div>
                </div>

              </form>

            </div>

            <!-- //////////////// ON LOGIN ///////////////// -->

            <div class="register_login_modal_all_01_by_login">
              <div class="register_login_modal_title col-md-12 d-inline-block">
                <h2 class="position-relative font-600 d-inline-block float-left">
                  LOGIN
                  <span class="font-400" style="font-size: 22px;">NOW</span>
                </h2>
                <div class="login_sign_up_btns float-right py-3">
                  <!-- <a href="#!" class="pr-4 login_btn_mdl_popup active" style="border-right: 1px solid #ddd">SIGN UP</a> -->
                  <span class="pl-4 pr-2 font-500" style="color: #777;">Don't have an account?</span>
                  <a href="#!" class="sign_up_btn_mdl_popup sign_up_btn_mdl_popup_0101">SIGN UP</a>
                </div>
              </div>

              <form class="row mx-0 mt-5 mb-4 w-100">
                <div class="form-group col-md-12">
                  <label for="exampleInputEmail1" class="bmd-label-floating">Email ID</label>
                  <input type="email" class="form-control" id="exampleInputEmail1">
                  <span class="bmd-help">We'll never share your email with anyone else.</span>
                </div>
                <div class="form-group col-md-12">
                  <label for="exampleInputpassword" class="bmd-label-floating">Passowrd</label>
                  <input type="passowrd" class="form-control" id="exampleInputtext">
                  <span class="bmd-help">We'll never share your email with anyone else.</span>
                  <!-- <span class="material-icons">visibility</span> -->
                  <span toggle="#password-field" class="fas fa-eye toggle-password"></span>
                  <!-- <i class="fas fa-eye"></i> -->
                </div>

                <style type="text/css">
                  
                  .fas.fa-eye.toggle-password{
                    position: absolute;
                    right: 15px;
                    bottom: 10px;
                  }

                </style>

                <script type="text/javascript">
                  
                  /*$(".toggle-password").click(function() {

                    $(this).toggleClass("fas fa-eye-slash");
                    var input = $($(this).attr("toggle"));
                    if (input.attr("type") == "password") {
                      input.attr("type", "text");
                    } else {
                      input.attr("type", "password");
                    }
                  });*/

                </script>

                <div class="col-md-12 mt-5 pt-4">
                  <div class="row m-0">
                    <div class="col-md-12 px-0 text-right btn_signup_modal_popup">
                      <!-- <button class="btn btn-default">Cancel</button> -->
                      <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                  </div>
                </div>

              </form>

            </div>

            <!-- /////////////////////////////// -->

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ////////////////////////////// -->

</body>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/wow/0.1.12/wow.min.js"></script>

<script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>

<script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>

<script src="assets/js/owl.carousel.min.js"></script>
<!-- <script src="assets/js/owl.animate.min.js"></script> -->

<!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script> -->
<script>

//// Bootstrap

  $(document).ready(function() {
    $('body').bootstrapMaterialDesign(); 
  });

///// Fixed scroll bar

$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('.navbar.navbar-expand-lg').addClass('fixed-header');
    }
    else {
        $('.navbar.navbar-expand-lg').removeClass('fixed-header');
    }
});

///// owl carousel

$(document).ready(function(){
  $('#owl-carousel-top-banner').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:7000,
      autoplaySpeed: 4000,
      margin:30,
      dots: true,
      lazyLoad : true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:true
          },
          1000:{
              items:2,
              nav:true,
              loop:true
          }
      }
  })
});

/////////// Expert section

$(document).ready(function(){
  $('.owl-carousel-expert-section').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:7000,
    autoplaySpeed: 4000,
    margin:30,
    dots: true,
    lazyLoad : true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
  })
});

/////////// Feedback section

$(document).ready(function(){
  $('.owl-carousel-feedback-section').owlCarousel({
    loop:true,
    autoplay:false,
    autoplayTimeout:7000,
    autoplaySpeed: 4000,
    margin:30,
    dots: true,
    lazyLoad : true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
  })
});

///////////////  LOGIN SIGN UP SWITCH

$(function () {
  //adding a new class on button element
    $('.sign_up_btn_mdl_popup,.login_container_info_rgt_02').on('click',function () {
        $('.login_modal_popup').addClass('class_on_add_sign_up');   
    });

  //removing a existing class from button element
    $('.sign_up_btn_mdl_popup_0101').on('click',function () {
        $('.login_modal_popup').removeClass('class_on_add_sign_up');
    });

    $('.login_container_info_rgt_04').on('click',function () {
        $('.login_modal_popup').removeClass('class_on_add_sign_up');   
    });

});

///////// WOW JS

new WOW().init();


///////// iot section
 
$(document).ready(function(){
    $(".lbl_of_lmp").click(function(){
        $(".dash_iot_sec_on_func_on_light").toggleClass("highlight_lmp");
    });
    $(".lbl_of_rout").click(function(){
        $(".dash_iot_sec_on_func_on_rout").toggleClass("highlight_rout");
    });
    $(".lbl_of_ac").click(function(){
        $(".dash_iot_sec_on_func_on_ac").toggleClass("highlight_ac");
    });
    $(".lbl_of_frig").click(function(){
        $(".dash_iot_sec_on_func_on_frig").toggleClass("highlight_frig");
    });
    $(".control").click(function(){
        $(".dash_iot_sec_on_func_on_music").toggleClass("highlight_music");
    });
});

////////

</script>

<script type="text/javascript">

$(function() {
  var current_progress = 0;
  var interval = setInterval(function() {
      current_progress += 10;
      $("#dynamic")
      .css("width", current_progress + "%")
      .attr("aria-valuenow", current_progress)
      .text(current_progress + "% Complete");
      if (current_progress >= 100)
          clearInterval(interval);
  }, 1000);
});

</script>

<script type="text/javascript">

  var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
  var days, hours, minutes, seconds; // variables for time units

  var countdown = document.getElementById("tiles"); // get tag element

  getCountdown();

  setInterval(function () { getCountdown(); }, 1000);

  function getCountdown(){

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    days = pad( parseInt(seconds_left / 86400) );
    seconds_left = seconds_left % 86400;
       
    hours = pad( parseInt(seconds_left / 3600) );
    seconds_left = seconds_left % 3600;
        
    minutes = pad( parseInt(seconds_left / 60) );
    seconds = pad( parseInt( seconds_left % 60 ) );

    // format countdown string + set tag value
    // countdown.innerHTML = "<div class='col-md-4'><span>" + days + "</span></div><div class='col-md-4'><span>" + hours + "</span></div><div class='col-md-4'><span>" + minutes + "</span></div><div class='col-md-4'><span>" + seconds + "</span></div>"; 
    countdown.innerHTML = "<div class='col-md-4 justify-content-center d-flex'><span>" + hours + "</span></div><div class='col-md-4 justify-content-center d-flex'><span>" + minutes + "</span></div><div class='col-md-4 justify-content-center d-flex'><span>" + seconds + "</span></div>"; 
  }

  function pad(n) {
    return (n < 10 ? '0' : '') + n;
  }


////////////// Fixed Timer /////////////////

$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('.card_sec_on_tst_pg_by_tmr').addClass('fixed_timer_card');
    }
    else {
        $('.card_sec_on_tst_pg_by_tmr').removeClass('fixed_timer_card');
    }
});

</script>

</html>