import React from "react";
import TestPageNav from "./TestPageNav";
import '../assets/css/style.css';

import '../assets/css/bootstrap-material-design.min.css';
import TestPageHeader from "./TestPageHeader";
import TestPExamTimer from "./TestPExamTimer";
import TestPQuestions from "./TestPQuestions";


function CourseDTestPage() {
  return (
      <>
            {/* Test Page NavBar */}
            <TestPageNav />

            {/* Test page Header */}
            <TestPageHeader />

            {/* Exam Timer */}
            <TestPExamTimer />

            {/* Test page Questions */}
            <TestPQuestions />



      </>
  );  
    
};

export default CourseDTestPage;