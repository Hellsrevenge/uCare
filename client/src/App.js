import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import DoctorProfile from "./pages/DoctorProfile";
import PatientList from "./pages/PatientList";
import PatientProfile from "./pages/PatientProfile";
import NewAppt from "./pages/NewAppt";
import PatientFile from "./pages/PatientFile";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import './App.css';


function App() {
  return (
    <Router>
     <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/doctor" component={DoctorProfile} />
          <Route exact path="/patientlist" component={PatientList} />
          <Route exact path="/patient" component={PatientProfile} />
          <Route exact path="/newappt" component={NewAppt} />
          <Route exact path="/patient/:id" component={PatientFile} />
          <Route exact path="/search" component={Search} />
        </Switch>
        {/* Footer component that will show up on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
