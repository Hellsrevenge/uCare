const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Patient = require("./patient");
const contactSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String},
    phone: {type: String},
    patient: {
        type: Schema.Types.ObjectId,
        ref: "Patient"
    }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
