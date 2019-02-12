const express = require("express");
const cookieParser = require('cookie-parser')
var path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(__dirname));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
} else {
    app.use(express.static(path.join(__dirname, '/client/public')));
    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/public/index.html"));
    });
}

require("./routes/patientRoutes")(app);
require("./routes/appointmentRoutes")(app);

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
