import React from "react";
import Header from "./include/Header";
import Footer from "./include/Footer";
import AssessmentTestPesSkill from "./include/AssessmentTestPesSkill";
import HeaderNext from "./include/HeaderNext";

function AssessmentTest() {
    return(
        <>

            {/* header navbar */}
            <Header />


            {/* next header after navbar */}
            <HeaderNext 
                page="Pes Assessment Test" 
                image="" 
                title="PeS ASSESSMENT TEST"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" 
                background="d-flex flex-wrap wow fadeInDown breadcrumb_section_tp breadcrumb_section_tp_on_pes_asses" 
            />

            {/* AssessmentTest Pes Skill */}
            <AssessmentTestPesSkill  />
            

            {/* Footer */}
            <Footer />



        </>

    );
};

export default AssessmentTest;