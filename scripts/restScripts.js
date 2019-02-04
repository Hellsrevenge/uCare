const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

// current user main collections

const patientData = [
  {
    name: "Swechchha Parajuli",
    currPrimaryDoctor: "",
    currHealth: "",
    currTherapist: "", 
    pastHealthcare: "", // refers to db collection of 
    pastMedicine: medicineData[0] // refer to certain points in the database of medicine
  },
  {
    name: "Varvara Kourova",
    currPrimaryDoctor: "Stephen King",
    currHealth: ""
  },
  {
    name: "Amanda Murillo",
    currPrimaryDoctor: "Stephen King",
    currHealth: ""
  }
];

const doctorData = [
    {
      name:"",
      specialty: "",
      patientList:"",
      pastPatients: "",

    }
];

const therapistData = [
  {
    name:"",
    specialty: "",
    patientList:"",
    pastPatients: "",

  }
];

const physicalTherapistData = [
  {
    name:"",
    specialty: "",  
    patientList:"",
    pastPatients: "",
  }
];

const nurseData = [
  {
    name:"",
    specialty: "",
    patientList:"", 
    pastPatients: "", // includes all past medical incidents per patient, including notes and documents
  }
];

const dentistData = [
  {
    name:"",
    specialty: "",
    patientList:"",
    pastPatients: "",

  }
];


//attributes of each medicine to be prescribed

const medicineData = [
  {

  }
];

// list of hospital incidents with doctors, nurses and other staff included
// everything that is entered in the database gets dumped in here as well, from prescriptions to surgeries to emergency room visits
const medicalHistory = [
  {

  }
];

// 


db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(patientData))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
