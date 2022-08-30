<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>POIESIS</title>

<link rel="icon" href="assets/images/fav_icon01.png" type="assets/images/fav_icon01.png" sizes="20x20">

<link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">
<!-- <link rel="stylesheet" href="https://daneden.github.io/animate.css/animate.min.css"> -->

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script src="https://kit.fontawesome.com/19f1b1b149.js" crossorigin="anonymous"></script>

<link rel="stylesheet" type="text/css" href="assets/css/style.css">

<link rel="stylesheet" href="assets/css/owl.carousel.min.css">
<!-- <link rel="stylesheet" href="assets/css/owl.theme.default.min.css"> -->
<link rel="stylesheet" href="assets/css/animate.css">
<!-- <link rel="stylesheet" href="assets/css/docs.theme.min.css"> -->

</head>

<body>

<nav class="navbar navbar-user-dash navbar-expand-lg navbar-light bg-light wow fadeInDown" data-wow-delay=".24s">
  <div class="container-fluid">
    <a class="navbar-brand navbar-user-dash-brand p-0 d-flex flex-wrap" href="index.php">
      <img class="m-auto img-fluid mh-100" src="assets/images/user_sme_dash_logo.png" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link btn btn-primary m-0 px-3" href="User_dashboard.php">Dashboard<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn btn-primary m-0 px-3" href="pes_assess_test.php">Assessment Test</a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn btn-primary m-0 px-3" href="training_resourses.php">Resources</a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn btn-primary m-0 px-3" href="training_program.php">My Programs</a>
        </li>
        <li class="nav-item">
          <div class="serch_Sec_on_head_nav position-relative ml-4">
            <input type="text" name="" placeholder="Search Courses">
            <span class="material-icons">search</span>
          </div>
        </li>
        <li class="nav-item add_training_schedule_sec position-relative">
          <a class="nav-link font-600 m-0 px-3 dropdown-toggle" href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Add Training Schedule
            <span class="material-icons" style="font-size: 22px;">event</span>
          </a>
          <div class="dropdown-menu add_training_schedule_sec_dropdown">
            <div class="title_drpdown_on_traing_sec p-3">
              <h6 class="font-600 mb-1">Add training to your calendar</h6>
              <p class="font-500 text-777 font-14 m-0">
                Set up your personal weekly training reminder.
              </p>
            </div>
            <div class="row mx-0 mb-3">
              <div class="col-md-4">
                <span class="font-600 text-dark font-14">Every :</span>
                <select class="form-control" style="cursor: pointer;">
                  <option value="0">Day</option>
                  <option value="1">Monday</option>
                  <option value="2">Tuesday</option>
                  <option value="4">Wednesday</option>
                  <option value="5">Thursday</option>
                  <option value="6">Friday</option>
                  <option value="7">Saturday</option>
                  <option value="8">Sunday</option>
                </select>
                <span class="material-icons position-absolute" style="bottom: 10px; right: 20px;pointer-events: none;">arrow_drop_down</span>
              </div>
              <div class="col-md-4">
                <span class="font-600 text-dark font-14">From :</span>
                <input type="time" class="form-control" name="" placeholder="00:00">
              </div>
              <div class="col-md-4">
                <span class="font-600 text-dark font-14">To :</span>
                <input type="time" class="form-control" name="" placeholder="00:00">
              </div>
            </div>
            <div class="footer-add-reminder-sec d-flex justify-content-end border-top-gray pt-3 pb-2 float-right w-100">
              <button type="button" class="btn btn-secondary mb-0 text-danger mr-2">Close</button>
              <button type="button" class="btn btn-primary mb-0 mr-3">Save changes</button>
            </div>
          </div>
        </li>

      </ul>
      <div class="add_to_Cart_btn position-relative mr-3">
        <a class="nav-link font-600 m-0 px-3 py-2" href="checkout.php"> 
          <span class="add_to_Cart_badge_num">2</span>         
          <span class="material-icons">add_shopping_cart</span>
        </a>
      </div>
        <div class="other-buttons ml-2">
          <div class="user_sme_profile_drpdwn d-flex m-auto">
            <!-- <button type="button" class="btn btn-primary btn_reg" data-toggle="modal" data-target="#exampleModal">
              <span>
                Registration
                <span class="material-icons">login</span>
              </span>
            </button> -->
            
            <a class="profile_img_container mr-2" href="#!"  style="text-decoration: none;">
              <span class="font-600">YD</span>
              <!-- <img class="img-fluid" src="https://techydevs.com/demos/themes/html/aduca/images/team.jpg">                 -->
            </a>
            <div class="dropdown d-flex m-auto">
              <a class="nav-link dropdown-toggle profile_dropdwn_Sec" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="material-icons">arrow_drop_down</span>
              </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <div class="strt_fre_trl_prfle pt-1">
                <span class="my-auto">Free Trial</span>
                <button type="button" class="btn btn-primary mb-0 ml-auto py-1 px-3 border-radius-xs">
                  <span>Start Now</span>
                </button>
              </div>
              <a class="dropdown-item mt-2" href="#">
                Dashboard
                <span class="material-icons right_arrow_profile_drpdwn">chevron_right</span>
              </a>
              <a class="dropdown-item" href="user_profile_pg.php">
                My Profile
                <span class="material-icons right_arrow_profile_drpdwn">chevron_right</span>
              </a>
              <!-- <a class="dropdown-item" href="#">
                My Programs
                <span class="material-icons right_arrow_profile_drpdwn">chevron_right</span>
              </a>
              <a class="dropdown-item" href="#">
                My Bookmarks
                <span class="material-icons right_arrow_profile_drpdwn">chevron_right</span>
              </a> -->
              <a class="dropdown-item" href="#">
                Settings
                <span class="material-icons right_arrow_profile_drpdwn">chevron_right</span>
              </a>
              <div class="bottom_serices_prfle_drpdwn">
                <a class="dropdown-item help_btn" href="#">
                  Help Center
                <span class="material-icons right_arrow_profile_drpdwn">chevron_right</span> 
                </a>
                <a class="dropdown-item logout_btn" href="#">
                  Logout
                <span class="material-icons right_arrow_profile_drpdwn">chevron_right</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>
</nav>

<!-- ///////////// -->

<!-- <div class="blank_for_nav" style="height: 80px;width: 100%;"></div> -->

<!-- ///////////// ------------ /////////////// -->

<!-- ///////// User Profile Section //////////// -->

<section class="user_profile_dash_section">
  <div class="user_profile_dash_section01">
    <div class="container-fluid">
      <div class="row mx-0">
        <div class="col-md-3 m-auto">
          <div class="user_Sec_profile_ovral_Sec d-flex flex-wrap w-100">
            <div class="profile_img_container_on_section_dash">
              <img class="img-fluid" src="https://techydevs.com/demos/themes/html/aduca/images/team.jpg">   
            </div>  
            <div class="profile_nm_mnge_btn my-auto">
              <h4 class="font-600">Hello Alex!</h4>
              <a href="#!">
                Manage Your Account
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row mx-0 user_activity_all_progress_sec_pr_dash">

            <div class="col-md-2">
              <div class="d-flex mx-auto flex-wrap w-100 usr_profile_sec_status_container">
                <button type="button" class="btn btn-primary d-block mx-auto font-500 btn-icon-profile-status border-radius-lg mb-0 font-15">
                <span class="material-icons" style="font-size: 32px; color: #3f51b5">fact_check</span>
                </button>
                <h6 class="w-100 text-777 font-500 text-center mt-4 font-14">Exams Ettempted</h6>
                <h3 class="w-100 font-600 text-center mb-0">07</h3>
                <span></span>
              </div>
            </div>

            <div class="col-md-2">
              <div class="d-flex mx-auto flex-wrap w-100 usr_profile_sec_status_container">
                <button type="button" class="btn btn-primary d-block mx-auto font-500 btn-icon-profile-status border-radius-lg mb-0 font-15">
                <span class="material-icons" style="font-size: 32px; color: #01b11f">verified</span>
                </button>
                <h6 class="w-100 text-777 font-500 text-center mt-4 font-14">Courses Completed</h6>
                <h3 class="w-100 font-600 text-center mb-0">05</h3>
                <span></span>
              </div>
            </div>

            <div class="col-md-2">
              <div class="d-flex mx-auto flex-wrap w-100 usr_profile_sec_status_container">
                <button type="button" class="btn btn-primary d-block mx-auto font-500 btn-icon-profile-status border-radius-lg mb-0 font-15">
                <span class="material-icons" style="font-size: 32px; color: #9c27b0">beenhere</span>
                </button>
                <h6 class="w-100 text-777 font-500 text-center mt-4 font-14">Total Cleared</h6>
                <h3 class="w-100 font-600 text-center mb-0">14</h3>
                <span></span>
              </div>
            </div>

            <div class="col-md-6 m-auto"> 
              <div class="certificate_sec row m-0"> 
                <div class="col-md-6 my-auto">
                  <div class="certificate_img_container mb-0 p-0">
                    <img class="img-fluid" src="assets/images/download_certificate.svg">
                  </div>                    
                </div>
                <div class="col-md-6 my-auto pr-0">
                  <p class="text-dark font-600">
                    Get Your Achievements Certificate Now
                  </p>
                  <button type="button" class="btn btn-primary btn-dark dwonload_btn_fr_crtfct mb-0 mx-auto px-2 border-radius-xs" data-toggle="modal" data-target="#modal_to_download_crtficte">
                    <span class="material-icons">
                      get_app
                    </span>
                    <span>View Certificates</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ////////// ------------ //////////// -->

<!-- ////////////// User activity schedule //////////// -->

<section class="user_activity_section pt-0 pb-4">
  <div class="container">
    <div id="material-tabs" class="px-3 pb-0 font-600 border-bottom-gray font-18 top_activty_txt">
        <a id="tab1-tab" href="#tab1" class="active btn btn-primary">ALL ACTIVITY</a>
        <a id="tab2-tab" href="#tab2" class="btn btn-primary">My Bookmarks</a>
        <a id="tab3-tab" href="#tab3" class="btn btn-primary">My Courses</a>
        <a id="tab4-tab" href="#tab4" class="btn btn-primary">Purchase History</a>
    </div>
  </div>
</section>

<!-- ////////// ------------ //////////// -->

<!-- /////// Bookmark Courses Sec //////// -->
<div class="tab-content">

<!-- ////// Tab-1////// -->
<div id="tab1">
  <section class="all_courses_pg_sec pt-0 pb-5 mb-0">
    <div class="container">
      <div class="mb-0 pb-3 px-3">
        <h4 class="font-600">My Bookmarks</h4>
        <p class="font-400 font-14 m-0"> 
          Your bookmarked content
        </p>
      </div>
      <div class="row m-0">

        <div class="my-3 pt-0 col-md-3">
          <div class="traing_prgrm_crd">
            <div class="traing_prgrm_detal">
              <div class="training_on_img_container">
                <div class="training_Det_ig_top">
                  <img src="assets/images/iot_architect_img.png" />
                </div>

                <div class="icon icon_bookmark_saved">
                  <input type="checkbox" id="bookmark-4" class="bookmrk_input_hide" checked>
                  <label for="bookmark-4" class="btn btn-bookmark icon_bookmark_saved_btn">
                    <svg class="svg_on_bookmark_sec" width="40" height="40">
                      <use xlink:href="#icon-bookmark"/>
                    </svg>
                  </label>
                </div>
                <svg class="bookmrk_input_hide">                
                  <symbol fill="var(--color-svg)" viewBox="0 0 24 24" stroke="currentColor" id="icon-bookmark"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></symbol>
                </svg>

              </div>
              <div class="training_all_txt_detal">
                <h6 class="font-600 font-18 position-relative d-inline-block my-2">Internet of Things Architect</h6>
                <div class="tm_drtion_spn_sec d-flex mb-2">
                  <span class="material-icons float-left mr-2 text-777 my-auto">query_builder</span>
                  <span class="float-left my-auto tm_drtion_spn_ind">                  
                    24 Hours
                  </span>
                </div>
                <p class="mt-0 font-14 font-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiut non</p>
                <div class="d-flex w-100 py-3">
                  <button type="button" onclick="to_courses_detl()" class="btn btn-primary m-0 font-13 btn_rad_more_right px-0">
                    <span>
                      <span class="material-icons">arrow_right_alt</span>
                      View Details            
                    </span>
                  </button>
                  <button type="button" class="btn btn-primary border-radius-lg m-0 ml-auto font-14 px-3 float-right btn-dark btn-shadow">
                    <span class="font-13">
                      $ BUY NOW            
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>    

      </div>
    </div>
  </section>
  <!-- ////////////////////////////// -->

  <!-- /////// All Courses Sec //////// -->

  <section class="all_courses_pg_sec pt-0 mb-5">
    <div class="container">
      <div class="mb-0 pb-3 px-3">
        <h4 class="font-600">All Professional Training Programs</h4>
        <p class="font-400 font-14 m-0"> 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          stempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven,
          consectetur adipisicing elit, sed do eiusmod stempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven
        </p>
      </div>
      <div class="row m-0">

        <div class="my-3 pt-0 col-md-3">
          <div class="traing_prgrm_crd">
            <div class="traing_prgrm_detal">
              <div class="training_on_img_container">
                <div class="training_Det_ig_top">
                  <img src="assets/images/iot_architect_img.png" />
                </div>

                <div class="icon icon_bookmark_saved">
                  <input type="checkbox" id="bookmark" class="bookmrk_input_hide">
                  <label for="bookmark" class="btn btn-bookmark icon_bookmark_saved_btn">
                    <svg class="svg_on_bookmark_sec" width="40" height="40">
                      <use xlink:href="#icon-bookmark"/>
                    </svg>
                  </label>
                </div>
                <svg class="bookmrk_input_hide">                
                  <symbol fill="var(--color-svg)" viewBox="0 0 24 24" stroke="currentColor" id="icon-bookmark"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></symbol>
                </svg>

              </div>

              <div class="training_all_txt_detal">
                <h6 class="font-600 font-18 position-relative d-inline-block my-2">Internet of Things Architect</h6>
                <div class="tm_drtion_spn_sec d-flex mb-2">
                  <span class="material-icons float-left mr-2 text-777 my-auto">query_builder</span>
                  <span class="float-left my-auto tm_drtion_spn_ind">                  
                    24 Hours
                  </span>
                </div>
                <p class="mt-0 font-14 font-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiut non</p>
                <div class="d-flex w-100 py-3">
                  <button type="button" onclick="to_courses_detl()" class="btn btn-primary m-0 font-13 btn_rad_more_right px-0">
                    <span>
                      <span class="material-icons">arrow_right_alt</span>
                      View Details            
                    </span>
                  </button>
                  <button type="button" class="btn btn-primary border-radius-lg m-0 ml-auto font-14 px-3 float-right btn-dark btn-shadow">
                    <span class="font-13">
                      $ BUY NOW            
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>    

        <div class="my-3 pt-0 col-md-3">
          <div class="traing_prgrm_crd">
            <div class="traing_prgrm_detal">
              <div class="training_on_img_container">
                <div class="training_Det_ig_top">
                  <img src="assets/images/iot_security_img.png" />
                </div>

                <div class="icon icon_bookmark_saved">
                  <input type="checkbox" id="bookmark-2" class="bookmrk_input_hide">
                  <label for="bookmark-2" class="btn btn-bookmark icon_bookmark_saved_btn">
                    <svg class="svg_on_bookmark_sec" width="40" height="40">
                      <use xlink:href="#icon-bookmark"/>
                    </svg>
                  </label>
                </div>
                <svg class="bookmrk_input_hide">                
                  <symbol fill="var(--color-svg)" viewBox="0 0 24 24" stroke="currentColor" id="icon-bookmark"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></symbol>
                </svg>

              </div>
              <div class="training_all_txt_detal">
                <h6 class="font-600 font-18 position-relative d-inline-block my-2">Internet of Things Security</h6>
                <div class="tm_drtion_spn_sec d-flex mb-2">
                  <span class="material-icons float-left mr-2 text-777 my-auto">query_builder</span>
                  <span class="float-left my-auto tm_drtion_spn_ind">                  
                    24 Hours
                  </span>
                </div>
                <p class="mt-0 font-14 font-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiut non</p>
                <div class="d-flex w-100 py-3">
                  <button type="button" onclick="to_courses_detl()" class="btn btn-primary m-0 font-13 btn_rad_more_right px-0">
                    <span>
                      <span class="material-icons">arrow_right_alt</span>
                      View Details            
                    </span>
                  </button>
                  <button type="button" class="btn btn-primary border-radius-lg m-0 ml-auto font-13 px-3 float-right btn-dark btn-shadow">
                    <span class="font-13">
                      $ BUY NOW            
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> 

        <div class="my-3 pt-0 col-md-3">
          <div class="traing_prgrm_crd">
            <div class="traing_prgrm_detal">
              <div class="training_on_img_container">
                <div class="training_Det_ig_top">
                  <img src="assets/images/iot_com_img.png" />
                </div>

                <div class="icon icon_bookmark_saved">
                  <input type="checkbox" id="bookmark-3" class="bookmrk_input_hide">
                  <label for="bookmark-3" class="btn btn-bookmark icon_bookmark_saved_btn">
                    <svg class="svg_on_bookmark_sec" width="40" height="40">
                      <use xlink:href="#icon-bookmark"/>
                    </svg>
                  </label>
                </div>
                <svg class="bookmrk_input_hide">                
                  <symbol fill="var(--color-svg)" viewBox="0 0 24 24" stroke="currentColor" id="icon-bookmark"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></symbol>
                </svg>

              </div>
              <div class="training_all_txt_detal">
                <h6 class="font-600 font-18 position-relative d-inline-block my-2">Internet of Things Communication</h6>
                <div class="tm_drtion_spn_sec d-flex mb-2">
                  <span class="material-icons float-left mr-2 text-777 my-auto">query_builder</span>
                  <span class="float-left my-auto tm_drtion_spn_ind">                  
                    24 Hours
                  </span>
                </div>
                <p class="mt-0 font-14 font-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiut non</p>
                <div class="d-flex w-100 py-3">
                  <button type="button" onclick="to_courses_detl()" class="btn btn-primary m-0 font-13 btn_rad_more_right px-0">
                    <span>
                      <span class="material-icons">arrow_right_alt</span>
                      View Details            
                    </span>
                  </button>
                  <button type="button" class="btn btn-primary border-radius-lg m-0 ml-auto font-14 px-3 float-right btn-dark btn-shadow">
                    <span class="font-13">
                      $ BUY NOW            
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>     

      </div>
    </div>
  </section>
</div>

<!-- ////// Tab-2////// -->
<div id="tab2">
  <section class="all_courses_pg_sec pt-0 pb-5 mb-0">
    <div class="container">
      <div class="mb-0 pb-3 px-3">
        <h4 class="font-600">My Bookmarks</h4>
        <p class="font-400 font-14 m-0"> 
          Your bookmarked content
        </p>
      </div>
      <div class="row m-0">

        <div class="my-3 pt-0 col-md-3">
          <div class="traing_prgrm_crd">
            <div class="traing_prgrm_detal">
              <div class="training_on_img_container">
                <div class="training_Det_ig_top">
                  <img src="assets/images/iot_architect_img.png" />
                </div>

                <div class="icon icon_bookmark_saved">
                  <input type="checkbox" id="bookmark-4" class="bookmrk_input_hide" checked>
                  <label for="bookmark-4" class="btn btn-bookmark icon_bookmark_saved_btn">
                    <svg class="svg_on_bookmark_sec" width="40" height="40">
                      <use xlink:href="#icon-bookmark"/>
                    </svg>
                  </label>
                </div>
                <svg class="bookmrk_input_hide">                
                  <symbol fill="var(--color-svg)" viewBox="0 0 24 24" stroke="currentColor" id="icon-bookmark"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></symbol>
                </svg>

              </div>
              <div class="training_all_txt_detal">
                <h6 class="font-600 font-18 position-relative d-inline-block my-2">Internet of Things Architect</h6>
                <div class="tm_drtion_spn_sec d-flex mb-2">
                  <span class="material-icons float-left mr-2 text-777 my-auto">query_builder</span>
                  <span class="float-left my-auto tm_drtion_spn_ind">                  
                    24 Hours
                  </span>
                </div>
                <p class="mt-0 font-14 font-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiut non</p>
                <div class="d-flex w-100 py-3">
                  <button type="button" onclick="to_courses_detl()" class="btn btn-primary m-0 font-13 btn_rad_more_right px-0">
                    <span>
                      <span class="material-icons">arrow_right_alt</span>
                      View Details            
                    </span>
                  </button>
                  <button type="button" class="btn btn-primary border-radius-lg m-0 ml-auto font-14 px-3 float-right btn-dark btn-shadow">
                    <span class="font-13">
                      $ BUY NOW            
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>    

      </div>
    </div>
  </section>
  <!-- ////////////////////////////// -->
</div>

<!-- ////// Tab-3////// -->
<div id="tab3">  
  <section class="all_courses_pg_sec pt-0 mb-5">
    <div class="container">
      <div class="mb-0 pb-3 px-3">
        <h4 class="font-600">All Professional Training Programs</h4>
        <p class="font-400 font-14 m-0"> 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          stempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven,
          consectetur adipisicing elit, sed do eiusmod stempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven
        </p>
      </div>
      <div class="row m-0">

        <div class="my-3 pt-0 col-md-3">
          <div class="traing_prgrm_crd">
            <div class="traing_prgrm_detal">
              <div class="training_on_img_container">
                <div class="training_Det_ig_top">
                  <img src="assets/images/iot_architect_img.png" />
                </div>

                <div class="icon icon_bookmark_saved">
                  <input type="checkbox" id="bookmark" class="bookmrk_input_hide">
                  <label for="bookmark" class="btn btn-bookmark icon_bookmark_saved_btn">
                    <svg class="svg_on_bookmark_sec" width="40" height="40">
                      <use xlink:href="#icon-bookmark"/>
                    </svg>
                  </label>
                </div>
                <svg class="bookmrk_input_hide">                
                  <symbol fill="var(--color-svg)" viewBox="0 0 24 24" stroke="currentColor" id="icon-bookmark"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></symbol>
                </svg>

              </div>

              <div class="training_all_txt_detal">
                <h6 class="font-600 font-18 position-relative d-inline-block my-2">Internet of Things Architect</h6>
                <div class="tm_drtion_spn_sec d-flex mb-2">
                  <span class="material-icons float-left mr-2 text-777 my-auto">query_builder</span>
                  <span class="float-left my-auto tm_drtion_spn_ind">                  
                    24 Hours
                  </span>
                </div>
                <p class="mt-0 font-14 font-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiut non</p>
                <div class="d-flex w-100 py-3">
                  <button type="button" onclick="to_courses_detl()" class="btn btn-primary m-0 font-13 btn_rad_more_right px-0">
                    <span>
                      <span class="material-icons">arrow_right_alt</span>
                      View Details            
                    </span>
                  </button>
                  <button type="button" class="btn btn-primary border-radius-lg m-0 ml-auto font-14 px-3 float-right btn-dark btn-shadow">
                    <span class="font-13">
                      $ BUY NOW            
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>    

        <div class="my-3 pt-0 col-md-3">
          <div class="traing_prgrm_crd">
            <div class="traing_prgrm_detal">
              <div class="training_on_img_container">
                <div class="training_Det_ig_top">
                  <img src="assets/images/iot_security_img.png" />
                </div>

                <div class="icon icon_bookmark_saved">
                  <input type="checkbox" id="bookmark-2" class="bookmrk_input_hide">
                  <label for="bookmark-2" class="btn btn-bookmark icon_bookmark_saved_btn">
                    <svg class="svg_on_bookmark_sec" width="40" height="40">
                      <use xlink:href="#icon-bookmark"/>
                    </svg>
                  </label>
                </div>
                <svg class="bookmrk_input_hide">                
                  <symbol fill="var(--color-svg)" viewBox="0 0 24 24" stroke="currentColor" id="icon-bookmark"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></symbol>
                </svg>

              </div>
              <div class="training_all_txt_detal">
                <h6 class="font-600 font-18 position-relative d-inline-block my-2">Internet of Things Security</h6>
                <div class="tm_drtion_spn_sec d-flex mb-2">
                  <span class="material-icons float-left mr-2 text-777 my-auto">query_builder</span>
                  <span class="float-left my-auto tm_drtion_spn_ind">                  
                    24 Hours
                  </span>
                </div>
                <p class="mt-0 font-14 font-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiut non</p>
                <div class="d-flex w-100 py-3">
                  <button type="button" onclick="to_courses_detl()" class="btn btn-primary m-0 font-13 btn_rad_more_right px-0">
                    <span>
                      <span class="material-icons">arrow_right_alt</span>
                      View Details            
                    </span>
                  </button>
                  <button type="button" class="btn btn-primary border-radius-lg m-0 ml-auto font-13 px-3 float-right btn-dark btn-shadow">
                    <span class="font-13">
                      $ BUY NOW            
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> 

        <div class="my-3 pt-0 col-md-3">
          <div class="traing_prgrm_crd">
            <div class="traing_prgrm_detal">
              <div class="training_on_img_container">
                <div class="training_Det_ig_top">
                  <img src="assets/images/iot_com_img.png" />
                </div>

                <div class="icon icon_bookmark_saved">
                  <input type="checkbox" id="bookmark-3" class="bookmrk_input_hide">
                  <label for="bookmark-3" class="btn btn-bookmark icon_bookmark_saved_btn">
                    <svg class="svg_on_bookmark_sec" width="40" height="40">
                      <use xlink:href="#icon-bookmark"/>
                    </svg>
                  </label>
                </div>
                <svg class="bookmrk_input_hide">                
                  <symbol fill="var(--color-svg)" viewBox="0 0 24 24" stroke="currentColor" id="icon-bookmark"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></symbol>
                </svg>

              </div>
              <div class="training_all_txt_detal">
                <h6 class="font-600 font-18 position-relative d-inline-block my-2">Internet of Things Communication</h6>
                <div class="tm_drtion_spn_sec d-flex mb-2">
                  <span class="material-icons float-left mr-2 text-777 my-auto">query_builder</span>
                  <span class="float-left my-auto tm_drtion_spn_ind">                  
                    24 Hours
                  </span>
                </div>
                <p class="mt-0 font-14 font-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiut non</p>
                <div class="d-flex w-100 py-3">
                  <button type="button" onclick="to_courses_detl()" class="btn btn-primary m-0 font-13 btn_rad_more_right px-0">
                    <span>
                      <span class="material-icons">arrow_right_alt</span>
                      View Details            
                    </span>
                  </button>
                  <button type="button" class="btn btn-primary border-radius-lg m-0 ml-auto font-14 px-3 float-right btn-dark btn-shadow">
                    <span class="font-13">
                      $ BUY NOW            
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>     

      </div>
    </div>
  </section>
</div>

<!-- ////// Tab-4////// -->
<div id="tab4">
  <section class="order_histry_Sec pt-0 pb-5 mb-0">
    <div class="container">
      <div class="mb-0 pb-3 px-3">
        <h4 class="font-600">Purchase History</h4>
        <p class="font-400 font-14 m-0"> 
          Your Purchased Courses
        </p>
      </div>
      <div class="row m-0">

        <div class="col-md-12 my-3 pt-0">
          <div class="card-shadow row mx-0 p-3 d-flex flex-wrap">

            <div class="col-md-12 mb-3 px-0 pb-2 border-bottom-gray">
              <div class="mx-0 order_id_dv float-left d-inline-block">
                <span class="font-14 font-500 text-777 mb-2">Order ID:</span>
                <span class="font-14 font-600 text-dark">#012567712</span>
              </div>
              <div class="date_time_of_order float-right d-inline-block">
                <span class="font-14 font-500 text-777 mb-2">12 Nov, 2020</span>
                <span class="mx-2" style="color: #aeaeae">|</span>
                <span class="font-14 font-600 text-dark">11:04 AM</span>
              </div>
            </div>

            <div class="col-md-1 my-auto">
              <div class="prchse_his_img_contr border-radius-xs overflow-hidden my-auto">
                <img class="img-fluid" src="assets/images/iot_architect_img.png">
              </div>
            </div>
            <div class="col-md-3 my-auto">
              <div class="my-auto prcse_his_course_nme_dv">
                <span class="font-14 font-500 text-777 d-block mb-2">Course Name:</span>
                <span class="font-14 font-600 text-dark d-block">Internet of Things Security</span>
              </div>
            </div>
            <div class="col-md-2 my-auto">
              <div class="my-auto prcse_his_course_price_dv">
                <span class="font-14 font-500 text-777 d-block mb-2">Original Price:</span>
                <span class="font-14 font-600 text-dark d-block">₹1053.00</span>
              </div>
            </div>
            <div class="col-md-2 my-auto">
              <div class="my-auto prcse_his_course_discnt_dv">
                <span class="font-14 font-500 text-777 d-block mb-2">Total Discount:</span>
                <span class="font-14 font-600 text-green d-block">₹218.00</span>
              </div>
            </div>
            <div class="col-md-2 my-auto">
              <div class="my-auto prcse_his_course_discnt_dv">
                <span class="font-14 font-500 text-777 d-block mb-2">Final Price:</span>
                <span class="font-14 font-600 text-link d-block">₹880.00</span>
              </div>
            </div>
            <div class="col-md-2 my-auto">
              <div class="my-auto prcse_his_course_discnt_dv">
                <span class="font-14 font-500 text-777 d-block mb-2">Status:</span>
                <span class="font-14 font-600 text-btn d-block">Pending</span>
              </div>
            </div>

            <div class="col-md-12 mt-3 px-0 pt-2 border-top-gray">

            <!-- ///// Collapse Details ///// -->

            <div class="collapse w-100" id="collapseExample_view_details">
              <div class="card-body p-3 w-100">
                <div class="row mx-0 order_details_details_bg_Sec">
                  <div class="col-md-6 p-0 mb-0 order_details_details_bg_Sec_biling_det">
                    <h6 class="font-600 text-dark mb-3 font-16">Billing Details</h6>
                    <div class="row mx-0">
                      <span class="col-md-6 pl-0 font-14 text-777 font-400 d-flex flex-wrap mb-3">
                        Full Name:
                        <span class="font-400 mt-1 font-14 text-dark mr-2 w-100">
                          Alex Smith
                        </span>
                      </span>
                      <span class="col-md-6 pl-0 font-14 text-777 font-400 d-flex flex-wrap mb-3">
                        Email Address:
                        <span class="font-400 mt-1 font-14 text-dark mr-2 w-100">
                          alexcary012@gmail.com
                        </span>
                      </span>
                    </div>
                    <div class="row mx-0">
                      <span class="col-md-6 pl-0 font-14 text-777 font-400 d-flex flex-wrap mb-3">
                        Phone Number:
                        <span class="font-400 mt-1 font-14 text-dark mr-2 w-100">
                          +91 01236 52220
                        </span>
                      </span>
                      <span class="col-md-6 pl-0 font-14 text-777 font-400 d-flex flex-wrap mb-3">
                        Company & Job Role:
                        <span class="font-400 mt-1 font-14 text-dark mr-2 w-100">
                          Dollop Infotech Pvt. Ltd.
                        </span>
                      </span>
                    </div>
                    <div class="row mx-0">
                      <span class="col-md-6 pl-0 font-14 text-777 font-400 d-flex flex-wrap mb-3">
                        College:
                        <span class="font-400 mt-1 font-14 text-dark mr-2 w-100">
                          IPS Academy Indore
                        </span>
                      </span>
                      <span class="col-md-6 pl-0 font-14 text-777 font-400 d-flex flex-wrap mb-3">
                        Full Address:
                        <span class="font-400 mt-1 font-14 text-dark mr-2 w-100">
                          302, Sukhmani Apartment, Vishnupuri, Indore
                        </span>
                      </span>
                    </div>
                    <div class="row mx-0">
                      <span class="col-md-6 pl-0 font-14 text-777 font-400 d-flex flex-wrap mb-0">
                        City:
                        <span class="font-400 mt-1 font-14 text-dark mr-2 w-100">
                          452014, Indore(MP)
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="col-md-6 p-0 mb-0 order_details_details_bg_Sec_pay_det">
                    <h6 class="font-600 text-dark mb-3 font-16">Payment Details</h6>
                    <div class="row mx-0">                      
                      <span class="col-md-6 pl-0 font-14 text-777 font-400 d-flex flex-wrap mb-3">
                        Paid By:
                        <span class="font-400 mt-1 font-14 text-dark mr-2 w-100">
                          <img src="assets/images/master_card.svg" class="mr-1" style="height: 25px;">
                          <span class="my-auto font-14 font-400 text-dark">Master Card(Debit Card)</span>
                        </span>
                      </span>
                      <span class="col-md-6 pl-0 font-14 text-777 font-400 d-flex flex-wrap mb-3">
                        Card Name:
                        <span class="font-400 mt-1 font-14 text-dark mr-2 w-100">
                          Alex Smith
                        </span>
                      </span>
                    </div>
                    <div class="row mx-0">
                      <span class="col-md-6 pl-0 font-14 text-777 font-400 d-flex flex-wrap mb-3">
                        Card Number:
                        <span class="font-400 mt-1 font-14 text-dark mr-2 w-100">
                          5412 **** 1253 
                        </span>
                      </span>
                      <span class="col-md-6 pl-0 font-14 text-777 font-400 d-flex flex-wrap mb-3">
                        Transaction ID:
                        <span class="font-400 mt-1 font-14 text-dark mr-2 w-100">
                          000112768704
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- /////////////////////// -->

              <div class="mx-0 order_id_dv float-left d-inline-block">
                <a href="#collapseExample_view_details" class="collapseExample_view_details_cls btn btn-primary text-link mr-1 mb-0 pr-2 collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample_view_details">
                  View Details
                  <span class="material-icons" style="position: relative; top: 7px; line-height: 0">keyboard_arrow_down</span>
                </a>
              </div>
              <div class="float-left d-inline-block">
                <a href="#!" class="btn btn-primary text-btn mr-1 mb-0">
                  Download Invoice
                  <span class="material-icons" style="position: relative; top: 6px; line-height: 0">receipt</span>
                </a>
              </div>
            </div>

          </div>
        </div> 

      </div>
    </div>
  </section>
  <!-- ////////////////////////////// -->
</div>

<!-- ///////// -->

</div><!-- Tab-content-end -->

<!-- ////////////////////////////// -->

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

<!-- ////////////////////////////// -->

<!-- Modal-download-certificate -->

<div class="modal fade" id="modal_to_download_crtficte" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <!-- <h4 class="modal-title" id="exampleModalLabel"></h4> -->
        <div class="modal-title">
          <h4 class="font-600 mb-2">Your Acheivement Certificates</h4>
          <p class="font-500 text-777 font-15 m-0">
            Select and download your acheivement certificates in pdf format.
          </p>
        </div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body pt-0">

        <div class="select_check_and_download_certifcte d-flex flex-wrap w-100">
          <div class="checkbox my-2 p-0">
            <label class="p-3 w-100 d-flex flex-wrap btn btn-primary card-shadow">
              <h5 class="font-600 mb-1 w-100 text-left">Acheivement certificate name 1</h5>
              <p class="m-0 font-14 w-100 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu</p>
              <input type="checkbox">
            </label>
          </div>
        </div>
        <div class="select_check_and_download_certifcte d-flex flex-wrap w-100">
          <div class="checkbox my-2 p-0">
            <label class="p-3 w-100 d-flex flex-wrap btn btn-primary card-shadow">
              <h5 class="font-600 mb-1 w-100 text-left">Acheivement certificate name 2</h5>
              <p class="m-0 font-14 w-100 text-left"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <input type="checkbox">
            </label>
          </div>
        </div>
        <div class="select_check_and_download_certifcte d-flex flex-wrap w-100">
          <div class="checkbox my-2 p-0">
            <label class="p-3 w-100 d-flex flex-wrap btn btn-primary card-shadow">
              <h5 class="font-600 mb-1 w-100 text-left">Acheivement certificate name 3</h5>
              <p class="m-0 font-14 w-100 text-left"> Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut .</p>
              <input type="checkbox">
            </label>
          </div>
        </div>
        <div class="select_check_and_download_certifcte d-flex flex-wrap w-100">
          <div class="checkbox my-2 p-0">
            <label class="p-3 w-100 d-flex flex-wrap btn btn-primary card-shadow">
              <h5 class="font-600 mb-1 w-100 text-left">Acheivement certificate name 4</h5>
              <p class="m-0 font-14 w-100 text-left">Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui.</p>
              <input type="checkbox">
            </label>
          </div>
        </div>

      </div>
      <div class="modal-footer p-4">
        <button type="button" class="btn btn-danger mr-2" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary py-3 px-5 border-radius-xs">Download Now</button>
      </div> 
    </div>
  </div>
</div>

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

/*$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('.navbar.navbar-expand-lg').addClass('fixed-header');
    }
    else {
        $('.navbar.navbar-expand-lg').removeClass('fixed-header');
    }
});*/
$('.add_training_schedule_sec_dropdown').on("click.bs.dropdown", function (e) {
  e.stopPropagation(); e.preventDefault(); 
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

   $(document).ready(function() {
    $('#material-tabs').each(function() {

        var $active, $content, $links = $(this).find('a');

        $active = $($links[0]);
        $active.addClass('active');

        $content = $($active[0].hash);

        $links.not($active).each(function() {
            $(this.hash).hide();
        });

        $(this).on('click', 'a', function(e) {

            $active.removeClass('active');
            $content.hide();

            $active = $(this);
            $content = $(this.hash);

            $active.addClass('active');
            $content.show();

            e.preventDefault();
        });
    });
});

</script>

</html>