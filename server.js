const db = require("./models");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/unit18Populater";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

    app.get("api/patients/:id", function(req, res) {
        db.Patient.findOne({ _id: req.params.id })
            .populate("contact")
            .populate("appointment")
            .then(function(dbPatient) {
                res.json(dbPatient);
            })
            .catch(function(err) {
                res.json(err);
            });
    });

