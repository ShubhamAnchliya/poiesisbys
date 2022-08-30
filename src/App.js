//import logo from './logo.svg';
import './App.css';
// import { Route, Link, Switch, Router } from "react-router-dom";
import {BrowserRouter as Router,Switch,  Route, Link} from "react-router-dom";
import MainPage from './MainPage';
import AboutUs from './AboutUs';
import AssessmentTest from './AssessmentTest';
import Resources from './Resources';
import TrainingPrograms from './TrainingPrograms';
import ContactUs from './ContactUs';
import TraingProgCourseDetails from './include/TraingProgCourseDetails';
import CourseDTestPage from './include/CourseDTestPage';
import LoginModal from './include/LoginModal';

function App() {
  return (
      <Switch>
        <Router>
          <Route exact path='/' component={MainPage}/>
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/assessmenttest' component={AssessmentTest} />
          <Route path='/resources' component={Resources} />
          <Route path='/trainingprograms' component={TrainingPrograms} />
          <Route path='/contactus' component={ContactUs} />
          <Route path='/coursedetails'  component={TraingProgCourseDetails} />
          <Route path='/testpage' component={CourseDTestPage} />
          {/* <Route path='/tologinmodal' component={LoginModal} /> */}
        </Router>
      </Switch>
    
  );
}

export default App;
