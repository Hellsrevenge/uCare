import axios from "axios";

export default {

  //HOME PAGE

  //save new appointment to database
  saveAppt: function(apptData, id) {
    return axios.post("/api/patients/" + id, apptData);
  },
  // Gets list all of the patients
  getPatients: function() {
    return axios.get("/api/doctor/patients");
  },
  // Gets a patient file
  getPatient: function(id) {
    return axios.get("/api/patients/" + id);
  },
   // returns a search
   searchFile: function(search) {
    return axios.get("/api/search/");
  }

};
