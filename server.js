const express = require("express");
const cookieParser = require('cookie-parser')


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

require("./routes/patientRoutes")(app);
require("./routes/appointmentRoutes")(app);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
