const skype = require("../skype/skype");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    app.get("/api/appointments/:id", isAuthenticated, function (req, res) {
        res.json([]);
    });

    app.post("/api/appointments", isAuthenticated, function (req, res) {
        skype.requestInterview(req.body.start,req.body.duration, function(result) {
            console.log(result);
            res.json({skype: result.urls[0]})
        });
    });

};
