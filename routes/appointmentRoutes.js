const skype = require("../skype/skype");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function (app) {

    // all existing appointments
    app.get("/api/appointments", isAuthenticated, function (req, res) {
        db.Appointments.all().then(appointments => {
            res.json(appointments);
        });

        /*
        const {username} = req.params
            db.Patients.findAll({
                include: [{
                    model: Appointments,
                    }], 
                    where: {firstName: username}
                }).then(response => {
                     res.json(response);
                });
*/
    });

    //displaying each appointment for a certain one
    app.get("/api/appointments/:id", isAuthenticated, function (req, res) {
        console.log(req.params.id)
        db.Appointments.findAll({
            where: {
                patientId: req.params.id
            },
            include: [{
                model: db.Doctors,
            }],
            order: [
                ['date', 'DESC'],
            ],
        }).then(appointments => {
            res.json(appointments);
        });

        // const {user} = req.params.id;
        // db.Patients.findAll({
        //     include: [{
        //         model: db.Appointments,
        //     }],
        //     where: {patientId: req.params.id}
        // }).then(response => {
        //     res.json(response);
        // });
    });

    app.post("/api/appointments", isAuthenticated, function (req, res) {
        skype.requestInterview(req.body.start, req.body.duration, function (result) {
            const skypeUrl = result.urls[0].url;
            db.Appointments.create({
                subject: req.body.reason,
                date: req.body.date,
                duration: req.body.duration,
                status: 1,
                DoctorId: req.body.doctor_id,
                PatientId: req.body.patient_id,
                skypeUrl: skypeUrl
            }).then(function (appointment) {
                res.json({appointment: appointment})
            }).catch(function (err) {
                res.status(500).json(err)
            });
        });
    });

    app.get("/api/doctors", isAuthenticated, function (req, res) {
        db.Doctors.all().then(doctors => {
            res.json(doctors);
        });
    });
};
