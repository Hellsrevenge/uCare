const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Patient = require("./patient");
const skype = require("skype");
const appointmentSchema = new Schema({
    subject: {type: String},
    date: {type: String},
    status: {type: Number},
    patient: {
        type: Schema.Types.ObjectId,
        ref: "Patient"
    }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
