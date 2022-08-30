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

<style type="text/css">
  
  .container{
    max-width: 1140px !important;
  }

</style>

<body>

<nav class="navbar navbar-user-dash-checkout navbar-expand-lg navbar-light bg-light wow fadeInDown" data-wow-delay=".24s">
  <div class="container">
    <div class="back_to_dash_btn">
      <a href="User_dashboard.php" class="btn btn-primary">
        <span class="material-icons">arrow_back</span>
        <span style="position: relative; top: -1px;">Back to Dashboard</span>
      </a>
    </div>
    <a class="navbar-brand navbar-user-dash-brand p-0 d-flex flex-wrap" href="index.php">
      <img class="m-auto img-fluid mh-100" src="assets/images/logo_01_on_fixed.png" />
    </a>    
  </div>
</nav>

<!-- ////// CheckOut Section /////// -->

<section class="Checkout_section">
  <div class="container">
    <h3 class="font-600 mt-5 mb-4 mt-5 px-3">Secure Checkout</h3>
    <div class="row mx-0">
      <!-- ///////// Left menu Details ///////// -->
      <div class="col-md-8">
        <!-- /////// -->
        <div class="checkout_prdct_card_Sec mb-4 w-100 position-relative">
          <span class="checkout_steps_badge_title">1</span>
          <div class="checkout_prdct_card_Sec_container card-shadow bg-white">            
            <h5 class="font-600 mb-4 mx-2 border-bottom-gray">Account</h5>
            <div class="row mx-0">
              <div class="col-md-6 px-2">
                <h6 class="font-600">Full Name</h6>
                <p class="mb-1">Alex Carry</p>
              </div>
              <div class="col-md-6 px-2">
                <h6 class="font-600">Email Address</h6>
                <p class="mb-1">alexcary012@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <!-- /////// -->
        <div class="checkout_prdct_card_Sec mb-4 w-100 position-relative">
          <span class="checkout_steps_badge_title">2</span>
          <div class="checkout_prdct_card_Sec_container card-shadow bg-white">            
            <h5 class="font-600 mb-2 mx-2 border-bottom-gray">Billing Details</h5>
            <div class="row mx-0">
              <form class="row mx-0 mt-0 mb-0 w-100">             

                <div class="form-group col-md-6">
                  <label for="exampleInputtext" class="bmd-label-floating">First Name</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                </div>

                <div class="form-group col-md-6">
                  <label for="exampleInputtext" class="bmd-label-floating">Last Name</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                </div>

                <div class="form-group col-md-6">
                  <label for="exampleInputEmail1" class="bmd-label-floating">Email ID</label>
                  <input type="email" class="form-control" id="exampleInputEmail1">
                </div>

                <div class="form-group col-md-6">
                  <label for="exampleInputtext" class="bmd-label-floating">Phone Number</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                </div>

                <div class="form-group col-md-6">
                  <label for="exampleInputtext" class="bmd-label-floating">Company & job role</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                </div>

                <div class="form-group col-md-6">
                  <label for="exampleInputtext" class="bmd-label-floating">College</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                </div>

                <div class="form-group col-md-6">
                  <label for="exampleInputtext" class="bmd-label-floating">Address Line 1</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                </div>
                
                <div class="form-group col-md-6">
                  <label for="exampleInputtext" class="bmd-label-floating">Address Line 2</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                </div>

                <div class="form-group col-md-6">
                  <label for="exampleInputtext" class="bmd-label-floating">Country</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                </div>
                
                <div class="form-group col-md-6">
                  <label for="exampleInputtext" class="bmd-label-floating">City</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                </div>

                <div class="form-group col-md-12">
                  <label for="exampleInputtext" class="bmd-label-floating">Postal / Zip code</label>
                  <input type="text" class="form-control" id="exampleInputtext">
                </div>

                <div class="col-md-12 mt-3 pt-0">
                  <div class="row m-0">
                    <div class="col-md-6 px-0 m-auto">
                      <div class="checkbox">
                        <label class="m-0">
                          <input type="checkbox"> <span class="font-14 ml-2 text-dark font-500">Accept Terms & Conditions</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 px-0 text-right">
                      <!-- <button class="btn btn-default">Cancel</button> -->
                      <button type="submit" class="btn btn-primary btn-dark py-3 px-5 border-radius-lg">Create Billing</button>
                    </div>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
        <!-- /////// -->
        <div class="checkout_prdct_card_Sec mb-4 w-100 position-relative">
          <span class="checkout_steps_badge_title">3</span>
          <div class="checkout_prdct_card_Sec_container card-shadow bg-white">            
            <h5 class="font-600 mb-2 mx-2 border-bottom-gray">Payment Method</h5>
            <div class="row mx-0">
              <h6 class="font-600 my-3 mx-2 w-100">Choose payment method below</h6>            
              <div id="accordion" class="w-100 payment_option_acc_section_chkout">

                <div class="row mx-0 mb-4 mt-3 w-100">
                  <div class="col-md-6" id="headingOne">
                    <button class="payment_option_acc_section_chkout_btn btn btn-primary w-100" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <span class="material-icons check_radio_icon">check_circle</span>
                      <div class="img_pay_option_container">
                        <img class="img-fluid" src="assets/images/debit_credit_cards.svg">
                      </div>
                      <span class="d-flex justify-content-center m-auto">
                        Credit / Debit Card
                      </span>
                    </button>
                  </div>
                  <div class="col-md-6" id="headingTwo">
                    <button class="payment_option_acc_section_chkout_btn btn btn-primary collapsed w-100" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <span class="material-icons check_radio_icon">check_circle</span>
                      <div class="img_pay_option_container">
                        <img class="img-fluid" src="assets/images/upi_icon.svg">
                      </div>
                      <span class="d-flex justify-content-center m-auto">Pay via UPI</span>
                    </button>
                  </div>
                  <!-- <div class="card-header col-md-4" id="headingThree">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Collapsible Group Item #3
                      </button>
                    </h5>
                  </div>  -->
                </div>

                <div class="pay_container_detail_all px-3">
                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="pay_card_body_detail_fill mb-3">
                      <h6 class="mx-3 my-0">Add Debit / Credit / ATM Card</h6>
                      <div class="d-inline w-100 mt-3 px-3">
                        <img src="assets/images/master_card.svg" class="mr-3" style="height: 25px;">
                        <img src="assets/images/rupay.svg" class="mr-3" style="height: 25px;">
                        <img src="assets/images/visa.svg" class="mr-3" style="height: 25px;">
                      </div>
                      <form class="row mx-0 mt-4 mb-0 w-100">             

                        <div class="form-group col-md-12">
                          <label for="exampleInputtext" class="bmd-label-floating">Name on Card</label>
                          <input type="text" class="form-control" id="exampleInputtext">
                        </div>

                        <div class="form-group col-md-12">
                          <label for="exampleInputtext" class="bmd-label-floating">Card Number</label>
                          <input type="text" class="form-control" id="exampleInputtext">
                        </div>

                        <div class="form-group col-md-6">
                          <label for="exampleInputtext" class="bmd-label-floating">Expiry Date (MM/YY)</label>
                          <input type="text" class="form-control" id="exampleInputtext">
                        </div>

                        <div class="form-group col-md-6">
                          <label for="exampleInputtext" class="bmd-label-floating">CVV</label>
                          <input type="text" class="form-control" id="exampleInputtext">
                        </div>

                        <div class="col-md-12 mt-3 pt-0">
                          <div class="row m-0">
                            <div class="col-md-6 px-0 m-auto">
                              <div class="checkbox">
                                <label class="m-0">
                                  <input type="checkbox"> <span class="font-14 ml-2 text-dark font-500">Save this card for future payments</span>
                                </label>
                              </div> 
                            </div>
                            <div class="col-md-6 px-0 text-right">
                              <button type="submit" class="btn btn-primary btn-dark mb-0 py-3 px-5 border-radius-lg">Checkout</button>
                            </div>
                          </div>
                        </div>

                      </form>
                    </div>
                  </div>
                </div>

                <div class="pay_container_detail_all px-3">
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="pay_card_body_detail_fill mb-3">
                      <h6 class="mx-3 my-0">Add new UPI</h6>
                      <div class="d-inline w-100 mt-3 px-3">
                        <img src="assets/images/google_pay.svg" class="mr-3" style="height: 17px;">
                        <img src="assets/images/phone_pe.svg" class="mr-3" style="height: 17px;">
                        <img src="assets/images/Amazon_Pay.svg" class="mr-3" style="height: 17px;">
                        <img src="assets/images/paytm.svg" class="mr-3" style="height: 17px;">
                      </div>
                      <form class="row mx-0 mt-4 mb-0 w-100"> 
                        <div class="form-group col-md-8">
                          <label for="exampleInputtext" class="bmd-label-floating">example@upi</label>
                          <input type="text" class="form-control" id="exampleInputtext">
                        </div>
                        <div class="col-md-4 px-0 text-right">
                          <button type="submit" class="btn btn-primary btn-dark mb-0 py-3 px-5 border-radius-lg">Checkout</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <!-- /////// -->
      </div>
      <!-- ///////// Right menu Details ///////// -->
      <div class="col-md-4">
        <div class="order_summary_sec_rght card-shadow px-2 py-3">
          <h5 class="font-600 mb-2 mx-2 border-bottom-gray">Order Summary</h5>
          <div class="order_summary_sec_rght_list_prdct">
            <ul class="px-2 m-0">
              <li class="mt-2">
                 <h6 class="my-2 w-75">Internet of Things Architect</h6>
                 <div class="courses_pricing_detail my-2">            
                    <h6 class="font-600 mb-0">
                      <img src="assets/images/rupee.svg" width="14" style="position: relative;top: -2px;">
                      365
                      <span class="font-14 font-600 primary_cut_amount position-relative">
                        <img src="assets/images/rupee_light.svg" width="12" style="position: relative;top: -2px;">
                        499
                      </span>
                      <span class="font-13 font-600 text-green ml-2">
                        27% Off
                      </span>
                    </h6>
                  </div>
                 <a href="#!" class="btn btn-primary delete_icon_on_cart_sec">
                   <span class="material-icons">remove_circle</span>
                 </a>
              </li>
              <li class="mt-2">
                 <h6 class="my-2 w-75">Internet of Things Communication</h6>
                 <div class="courses_pricing_detail my-2">            
                    <h6 class="font-600 mb-0">
                      <img src="assets/images/rupee.svg" width="14" style="position: relative;top: -2px;">
                      470
                      <span class="font-14 font-600 primary_cut_amount position-relative">
                        <img src="assets/images/rupee_light.svg" width="12" style="position: relative;top: -2px;">
                        554
                      </span>
                      <span class="font-13 font-600 text-green ml-2">
                        15% Off
                      </span>
                    </h6>
                  </div>
                 <a href="#!" class="btn btn-primary delete_icon_on_cart_sec">
                   <span class="material-icons">remove_circle</span>
                 </a>
              </li>
            </ul>
          </div>

          <div class="d-flex my-3 w-100">
            <h6 class="font-500 font-15 mx-3 mb-0 w-100 border-bottom-gray pb-2" style="color: #005eec !important">Your total savings<span class="d-flex float-right font-600">₹218.00</span></h6>
          </div>

          <div class="d-flex my-3 w-100">
            <h6 class="font-500 font-15 mx-3 mb-0 w-100">Original Price:
            <span class="d-flex float-right font-600">₹1053.00</span></h6>
          </div>

          <div class="d-flex my-3 w-100">
            <h6 class="font-500 font-15 mx-3 mb-0 w-100">Total Discount:
            <span class="d-flex float-right font-600">-₹218.00</span></h6>
          </div>

          <div class="d-flex my-3 w-100">
            <h6 class="font-500 font-15 mx-3 mb-0 w-100">Tax:
            <span class="d-flex float-right font-600">+₹45.00</span></h6>
          </div>

          <div class="d-flex my-3 w-100">
            <h6 class="font-500 font-15 mx-3 mb-0 w-100 border-top-gray pt-3 border-bottom-gray pb-3" style="color: #005eec !important">Final Price<span class="d-flex float-right font-600">₹880.00</span></h6>
          </div>

           <div class="d-flex mt-3 w-100 set_place_ordr_btn_btm_set">
              <a href="#!" class="d-flex w-100 text-center justify-content-center btn btn-primary btn-theme border-radius-lg px-4 py-3 mx-3 font-600">
                Place Order
              </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

<!-- //////////--------------///////// -->

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
           
        </script>

</html>