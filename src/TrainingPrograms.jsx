import React from "react";
import Header from "./include/Header";
import Footer from "./include/Footer";
import TrainingProgramProf from "./include/TrainingProgramProf";
import HeaderNext from "./include/HeaderNext";


function TrainingPrograms() {
    return(
        <>

            {/* header navbar */}
            <Header />


            {/* next header after navbar */}
            <HeaderNext 
                page="Training Programs" 
                image="" 
                title="TRAINING PROGRAMS"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" 
                background="d-flex flex-wrap wow fadeInDown breadcrumb_section_tp breadcrumb_section_tp_on_courses" 
            />

            {/* Professional Training Program */}
            <TrainingProgramProf />

            {/* Footer */}
            <Footer />

        </>

    );
};   

export default TrainingPrograms;