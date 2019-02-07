const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh!';
var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = function (app) {

    app.post("/api/patients/login", function (req, res) {
        const {email, password} = req.body;
        db.Patients.findOne({
            where: {
                email: email
            }
        }).then(function (user, err) {
            if (err) {
                console.error(err);
                res.status(500).json({error: 'Internal error please try again'});
            } else if (!user) {
                res.status(401).json({error: 'Incorrect email or password'});
            } else {
                if (user.validPassword(password)) {
                    // Issue token
                    const payload = {email};
                    const token = jwt.sign(payload, secret, {expiresIn: '1h'});
                    res.cookie('token', token, {httpOnly: true}).json({token: token, patient: user});
                } else {
                    res.status(401).json({error: 'Incorrect email or password'});
                }
            }
        });
    });

    // Check token
    app.get("/api/patients/token", isAuthenticated, function (req, res) {
        res.sendStatus(200).json({valid:true});
    });

    app.get("/api/patients/logout", function (req, res) {
        //
    });

    app.post("/api/patients/signup", function (req, res, next) {
        if (!req.body.email || !req.body.password) {
            res.status(422).json({error: "Missing credentials"});
            return next("Missing credentials");
        }

        db.Patients.findOne({
            where: {
                email: req.body.email
            }
        }).then(function (dbUser) {
            if (dbUser) {
                res.status(400).json({error: "User " + dbUser.email + " already exists"});
                return next("User " + dbUser.email + " already exists");
            } else {
                db.Patients.create({
                    email: req.body.email,
                    password: req.body.password,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName
                }).then(function (user) {
                    res.status(200).json({user: {id: user.id}});
                }).catch(function (err) {
                    res.status(500).json(err)
                });
            }
        });
    });

    app.get("/api/patients/:id", isAuthenticated, function (req, res) {
        db.Patients.findById(req.params.id).then(function (patient) {
            patient.password = null;
            res.json(patient);
            /*
        const {user} = req.params.id;
        db.Patients.findAll({
            where: {firstName: user}
        }).then(response => {
            res.json(response);
        });
            */
        })
    });

/* this is the routing for all patient files of a certain doctor
    app.get("/api/doctor/patients/:id", isAuthenticated, function (req, res) {
        db.Doctors.findAll({
            where: {
                include: [{
                    model: Patients,
                }],
                : req.params.id
            }
        })
    });*/
};
