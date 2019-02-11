const router = require("express").Router();
const patientRoutes = require(require("./routes/patientRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

router.route("/api/patients/login")
    .get(patientRoutes.findOne);


router.route("/api/patients/:id")
    .get(patientRoutes.findById);


router.route("/api/appointments")
    .get(appointmentRoutes.findAll);


router.route("/api/appointments/:id")
    .get(appointmentRoutes.findById)


module.exports = router;