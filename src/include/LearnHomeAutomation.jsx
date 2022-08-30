import React, { useState } from "react";
import iot_weather_icon_gif from "../assets/images/iot_weather_icon_gif.svg";
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import RouterIcon from '@material-ui/icons/Router';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import KitchenIcon from '@material-ui/icons/Kitchen';

function LearnHomeAutomation() {

    const [condition, setCondition] = useState(false);
    //const [loggedIn, setLoggedIn] = useState(false);
    const dash_iot_sec_on_func_on_music = () => { setCondition(!condition) };


    return(
        <>
            <section className ="iot_section">

                <div className ="title_heading_iot_sec d-flex flex-wrap wow fadeInDown" data-wow-delay=".12s;">
                    <h1 className ="mx-auto d-inline-block position-relative text-center" style={{lineHeight: "1.2"}}>
                        Learn
                        <b>Home Automation</b>
                    </h1>
                </div>

                <div className ="container-fluid">
                    <div className ="row m-0 mt-5">
                    
                        <div className ="col-md-5 wow fadeInLeft" data-wow-delay=".34s" style={{height: "900px"}}>
                            <div className ="dashboard-iot-sec">

                                <div className ="iphone-x">
                                    <i className ="Speaker_iphone"></i>
                                    <b className ="camera_iphone"></b>
                                                               
                                    <div className ="dash_iot_contain_Sec">
                                        <div className ="dash_iot_contain_Sec0101">
                                            {/* <!-- <div className ="py-4" style={{"background: white"></div> --> */}
                                            <header className ="header-iot-sec">
                                                <div className ="f fe mb-2 position-relative" style={{padding: "0 15px"}}>
                                                    <div className ="icon icon-w">
                                                        <div className ="weather_anim">
                                                            <img src={iot_weather_icon_gif}/>
                                                        </div>
                                                    </div>
                                                    <div className ="heading">
                                                        <h5 className ="date mb-0">1 Feb 2019</h5>
                                                        <h3 className ="title">Cloudy</h3>
                                                    </div>
                                                </div>                                           
                                                <div className ="weather f row m-0">
                                                <div className ="col-md-4">
                                                    <strong>26°<sup>C</sup></strong>
                                                    <p>Indoor Temp.</p>
                                                </div>
                                                <div className ="col-md-4">
                                                    <strong>48.2%</strong>
                                                    <p>Outdoor Humidity</p>
                                                </div>
                                                <div className ="col-md-4">
                                                    <strong>52.99</strong>
                                                    <p>Indoor Temp.</p>
                                                </div>
                                            </div>
                                            </header>

                                            <section className ="section-iot-sec">
                                                {/* <!-- Category --> */}
                                                <div className ="category-iot-sec">
                                                    <ul>
                                                        <li><a href="#!" className ="active">Living Room</a></li>
                                                        <li><a href="#!">Kitchen</a></li>
                                                        <li><a href="#!">Dinning</a></li>
                                                        <li><a href="#!">Weather</a></li>
                                                    </ul>
                                                </div>
                                                {/* <!-- Appliances --> */}
                                                <div className ="appliances">
                                                    
                                                    <div className ="appliance">
                                                        <div className ="position-relative h-100 d-inline-block w-100">
                                                            <input type="checkbox" name="a" id="a"/>
                                                            <label for="a" className ="lbl_of_lmp">
                                                            <i className ="l"></i>
                                                            <strong>Lamp</strong>
                                                            <span data-o="opened" data-c="closed"></span>
                                                            <small></small>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className ="appliance">
                                                        <div className ="position-relative h-100 d-inline-block w-100">
                                                            <input type="checkbox" name="a" id="b"/>
                                                            <label for="b" className ="lbl_of_rout">
                                                            <i className ="r"></i>
                                                            <strong>Router</strong>
                                                            <span data-o="opened" data-c="closed"></span>
                                                            <small></small>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className ="appliance">
                                                        <div className ="position-relative h-100 d-inline-block w-100">
                                                            <input type="checkbox" name="a" id="c"/>
                                                            <label for="c" className ="lbl_of_ac">
                                                            <i className ="a"></i>
                                                            <strong>Air</strong>
                                                            <span data-o="opened" data-c="closed"></span>
                                                            <small></small>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className ="appliance">
                                                        <div className ="position-relative h-100 d-inline-block w-100">
                                                            <input type="checkbox" name="a" id="d"/>
                                                            <label for="d" className ="lbl_of_frig">
                                                            <i className ="f"></i>
                                                            <strong>Fridge</strong>
                                                            <span data-o="opened" data-c="closed"></span>
                                                            <small></small>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className ="m-player">
                                                        <h5 className ="mt-2">Shared Devices</h5>
                                                        <div className ="player">
                                                            <div className ="disc"></div>
                                                            <div className ="artist">
                                                                <p>Rosetta Stoned</p>
                                                                <small>Tool</small>
                                                            </div>
                                                            <div className ="controls">
                                                                <input type="checkbox" onClick={dash_iot_sec_on_func_on_music} name="a" id="p"/>
                                                                <label for="p" className ="m-0">
                                                                    <div className ="control"></div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            
                                            </section>

                                        </div>
                                    </div>
                                </div>
                           
                            </div>
                        </div>

                        {/* <!-- ////////////////// --> */}

                        <div className ="col-md-7 m-auto">
                            <div className ="dash_iot_sec_on_func_al">
                                <div className ="row m-0">
                                
                                    <div className ="col-md-6 mb-4 wow zoomIn" data-wow-delay=".14s">
                                        <div className ="dash_iot_sec_on_func_on_light text-center">
                                            <section id="sha_temp_body" className ="py-4">
                                                <span className ="sha_temp">
                                                    <span>
                                                        <span className ="temp-data temp_data_on_fun">
                                                            {/* <!-- <img src=""> --> */}
                                                            <span className ="material-icons temp_data_on_fun_on_lmp"><WbIncandescentIcon /></span>
                                                        </span>
                                                        <span className ="temp-info d-flex flex-wrap text-center mt-3 justify-content-center" style={{fontWeight: "500"}}>
                                                            Lamp
                                                        </span>
                                                    </span>
                                                </span>
                                            </section>
                                        </div>
                                    </div>

                                    <div className ="col-md-6 mb-4 wow zoomIn" data-wow-delay=".14s">
                                        <div className ="dash_iot_sec_on_func_on_rout text-center">
                                            <section id="sha_temp_body" className ="py-4">
                                                <span className ="sha_temp">
                                                    <span>
                                                        <span className ="temp-data temp_data_on_fun">
                                                            {/* <!-- <img src=""> --> */}
                                                            <span className ="material-icons"><RouterIcon/></span>
                                                        </span>
                                                        <span className ="temp-info d-flex flex-wrap text-center mt-3 justify-content-center" style={{fontWeight: "500"}} >
                                                            Router
                                                        </span>
                                                    </span>
                                                </span>
                                            </section>
                                        </div>
                                    </div>

                                    <div className ="col-md-6 mb-4 wow zoomIn" data-wow-delay=".14s">
                                        <div className ="dash_iot_sec_on_func_on_ac text-center">
                                            <section id="sha_temp_body" className ="py-4">
                                                <span className ="sha_temp">
                                                    <span>
                                                        <span className ="temp-data temp_data_on_fun">
                                                            {/* <!-- <img src=""> --> */}
                                                            <span className ="material-icons"><AcUnitIcon /></span>
                                                        </span>
                                                        <span className ="temp-info d-flex flex-wrap text-center mt-3 justify-content-center" style={{fontWeight:"500" }}>
                                                            Air
                                                        </span>
                                                    </span>
                                                </span>
                                            </section>
                                        </div>
                                    </div>

                                    <div className ="col-md-6 mb-4 wow zoomIn" data-wow-delay=".14s">
                                        <div className ="dash_iot_sec_on_func_on_frig text-center">
                                            <section id="sha_temp_body" className ="py-4">
                                                <span className ="sha_temp">
                                                    <span>
                                                        <span className ="temp-data temp_data_on_fun">
                                                            {/* <!-- <img src=""> --> */}
                                                            <span className ="material-icons"><KitchenIcon/></span>
                                                        </span>
                                                        <span className ="temp-info d-flex flex-wrap text-center mt-3 justify-content-center" style={{fontWeight:"500"}}>
                                                            Fridge
                                                        </span>
                                                    </span>
                                                </span>
                                            </section>
                                        </div>
                                    </div>

                                    <div className ="col-md-10 mb-4 m-auto mt-5 wow fadeInUp" data-wow-delay=".34s">
                                        <div className={condition ? "dash_iot_sec_on_func_on_music text-center highlight_music" : "dash_iot_sec_on_func_on_music text-center"}>
                                            {/* see css of it */}
                                        {/* <div className ="dash_iot_sec_on_func_on_music text-center"> */}
                                            <section id="sha_temp_body" className ="py-4">
                                                <div className ="m-player">
                                                    <h5 className ="mt-2 text-left">Music Player</h5>
                                                    <div className ="player">
                                                        <div className ="disc disc_on_animate"></div>
                                                        <div className ="artist text-left" style={{fontWeight: "500"}}>
                                                            <p>Rosetta Stoned</p>
                                                            <small>Tool</small>
                                                        </div>
                                                        <div id="music_equ_bars">
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>
                                                            <div className ="music_equ_bar"></div>  
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>    

        </>


    );
};

export default LearnHomeAutomation;