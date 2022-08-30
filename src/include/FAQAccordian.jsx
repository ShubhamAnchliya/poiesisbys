import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import collapsible from 'react-collapsible';
// import accordion from 'react-responsive-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';



import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// import "./collapsible.scss";
import "./faqcss.css";

import Collapsible from 'react-collapsible';

// import collapse from '@mui/material/Collapse';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fachevronup } from "@fortawesome/free-solid-svg-icons";



function FAQAccordian() {
    return (

        <div className="col-md-6">
       
                <div className="enqry_frm_indx_enqry_crd1">

                    <div className="row mx-0">
                        <h4 className="font-600 text-dark position-relative mx-3 mt-3">Frequently Asked Questions (FAQ)</h4>
                    </div>

                    <div className="row mx-0">

                        <div id="accordion" className="py-5 w-100">

                            {/* <div className="card faq-section">

                                <div className="card-header" id="headingOne">

                                    <h5 className="mb-0">
                                        <button className="btn btn-link text-dark" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                           
                                            How can i reach you?
                                            <span className="material-icons plus"><KeyboardArrowUpIcon /></span>
                                            <span className="material-icons minus"><KeyboardArrowDownIcon /></span>

                                        </button>
                                    </h5>

                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                   
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>

                                </div>

                            </div>

                            <div className="card faq-section">
                                        <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed text-dark" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Do you teach offline also?
                                            <span className="material-icons plus"><KeyboardArrowUpIcon /></span>
                                            <span className="material-icons minus"><KeyboardArrowDownIcon /></span>
                                            </button>
                                        </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                        </div>
                                    </div>
                      
                            <div className="card faq-section">
                                <div className="card-header" id="headingThree">
                                <h5 className="mb-0">
                                    <button className="btn btn-link collapsed text-dark" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How can I invite you at our campus?
                                    <span className="material-icons plus"><KeyboardArrowUpIcon /></span>
                                    <span className="material-icons minus"><KeyboardArrowDownIcon /></span>
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                </div>
                            </div>


                            <div className="card faq-section">
                                <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                    <button className="btn btn-link collapsed text-dark" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Do you sponsor event too?
                                    <span className="material-icons plus"><KeyboardArrowUpIcon /></span>
                                    <span className="material-icons minus"><KeyboardArrowDownIcon /></span>
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                </div>
                            </div>
                                */}



                                {/* <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion> */}


    <Collapsible trigger="How can i reach you?" >
    
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                                 
      </p> 
    </Collapsible>
    <Collapsible trigger="Do you teach offline also?">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                                 
      </p> 
    </Collapsible>
    <Collapsible trigger="How can I invite you at our campus?">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                                 
      </p> 
    </Collapsible>

    <Collapsible trigger=" Do you sponsor event too?">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                                 
      </p> 
    </Collapsible>

                      
                        </div>

                    </div>


                </div>

        </div>
                
      
            
    
    )
}


export default FAQAccordian;