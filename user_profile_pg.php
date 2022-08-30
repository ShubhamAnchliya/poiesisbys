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

<section class="user_profile_dash_section pb-5">
  <div class="user_profile_dash_section01 pb-5">
    <div class="container-fluid">
      <div class="row mx-0">
        <div class="col-md-12 m-auto">
          <div class="user_Sec_profile_ovral_Sec d-flex flex-wrap w-100 justify-content-center">
            <div class="profile_img_container_on_section_dash">
              <img class="img-fluid" src="https://techydevs.com/demos/themes/html/aduca/images/team.jpg">   
            </div>
            <div class="col-md-12 d-flex">  
              <div class="profile_nm_mnge_btn mx-auto d-block">
                <h4 class="font-600 my-3 text-center">Alex Smith</h4>
                <a href="#!">
                  Upload Profile
                </a>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  </div>
</section>

<!-- ////////// ------------ //////////// -->

<!-- ////////// Section Edit Profile ////////// -->

<section>
  <div class="container">
    <div class="col-md-9 mx-auto" style="margin-top: -160px;">
      <div class="edit_profile_container_Sec card-shadow bg-white">            
        <div class="d-inline-block border-bottom-gray w-100 pb-2 mb-3">
          <h5 class="font-600 mt-2 mb-0 float-left w-auto">Edit Profile</h5>
          <div class="profile_nm_mnge_btn float-right d-block mt-2">
            <a href="#!">
              Edit Profile
            </a>
          </div>
        </div>
        <div class="row mx-0">
          <form class="row mx-0 mt-0 mb-0 w-100">             

            <div class="form-group col-md-6 my-3">
              <label for="exampleInputtext" class="bmd-label-floating">Full Name</label>
              <input type="text" class="form-control" id="exampleInputtext">
              <span class="text-dark font-600 font-15 d-flex w-100">Alex</span>
            </div>

            <div class="form-group col-md-6 my-3">
              <label for="exampleInputtext" class="bmd-label-floating">Last Name</label>
              <input type="text" class="form-control" id="exampleInputtext">
              <span class="text-dark font-600 font-15 d-flex w-100">Smith</span>
            </div>

            <div class="form-group col-md-6 my-3">
              <label for="exampleInputEmail1" class="bmd-label-floating">Email ID</label>
              <input type="email" class="form-control" id="exampleInputEmail1">
              <span class="text-dark font-600 font-15 d-flex w-100">alexsmith120@gmail.com</span>
            </div>

            <div class="form-group col-md-6 my-3">
              <label for="exampleInputtext" class="bmd-label-floating">Phone Number</label>
              <input type="text" class="form-control" id="exampleInputtext">
              <span class="text-dark font-600 font-15 d-flex w-100">+91 01236 54563</span>
            </div>

            <div class="form-group col-md-6 my-3">
              <label for="exampleInputtext" class="bmd-label-floating">Company & job role</label>
              <input type="text" class="form-control" id="exampleInputtext">
              <span class="text-dark font-600 font-15 d-flex w-100">Dollop Infotech</span>
            </div>

            <div class="form-group col-md-6 my-3">
              <label for="exampleInputtext" class="bmd-label-floating">College</label>
              <input type="text" class="form-control" id="exampleInputtext">
              <span class="text-dark font-600 font-15 d-flex w-100">IPS Academy</span>
            </div>

            <div class="form-group col-md-6 my-3">
              <label for="exampleInputtext" class="bmd-label-floating">Country</label>
              <input type="text" class="form-control" id="exampleInputtext">
              <span class="text-dark font-600 font-15 d-flex w-100">India</span>
            </div>
            
            <div class="form-group col-md-6 my-3">
              <label for="exampleInputtext" class="bmd-label-floating">City</label>
              <input type="text" class="form-control" id="exampleInputtext">
              <span class="text-dark font-600 font-15 d-flex w-100">Indore</span>
            </div>

            <!-- <div class="col-md-12 mt-4 pt-0 my-3">
              <div class="row m-0">
                <div class="col-md-12 px-0 text-center">
                  <button type="submit" class="btn btn-primary btn-dark py-3 px-5 border-radius-lg font-14">Update Profile</button>
                </div>
              </div>
            </div> -->

          </form>
        </div>
      </div>  
    </div>
  </div>
</section>

<!-- ////////// ------------ ////////// -->

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