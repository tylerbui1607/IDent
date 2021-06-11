const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

const userRoutes = require("./routes/userRoute");
const appointmentRoutes = require("./routes/appointmentRoute");
const dentistRoutes = require("./routes/dentistRoute");
const degreeRoute = require("./routes/degreeRoute");
const serviceRoute = require("./routes/serviceRoute");
const shiftRoute = require("./routes/shiftRoute");
const scheduleRoute = require("./routes/scheduleRoute");
const db = require("./config/database");

const app = express();

//set env config path
dotenv.config({
  path: "./config.env",
});

//connect to db
db.connect();

//static files
app.use(express.static(path.join(__dirname, "/shared")));

//set security http header
app.use(helmet());

//cors policy
app.use(cors());

//body parser
app.use(express.json());

//routes
app.use("/api/users", userRoutes);
app.use("/api/dentists", dentistRoutes);
app.use("/api/degrees", degreeRoute);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/services", serviceRoute);
app.use("/api/shifts", shiftRoute);
app.use("/api/schedules", scheduleRoute);

app.use("*", (req, res) => {
  res.status(400).json({ mesage: "Undefined route !" });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listen at port ${port}`);
});
