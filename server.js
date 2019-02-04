const db = require("./models");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const axios = require("axios");
// const skype = require("skype");
const PORT = process.env.PORT || 3001;
const app = express();

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ucare";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


require("./routes/patientRoutes")(app);

app.post("/api/appointments",function(req,res) {

});


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
