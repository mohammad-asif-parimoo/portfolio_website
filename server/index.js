const express = require('express');
const app = express();
const cors = require('cors');

// Loading Env
require('dotenv').config();

// Using Middlewares
app.use(cors({
    origin: ["https://portfolio-website-mohammad-asif-parimoo.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

// Mapping with the routes
const routes = require("./routes/routes");
app.use("/contact", routes);

// Starting the Server
const Port = process.env.PORT || 5000;
app.listen(Port, () => {
    console.log(`Server is running succesfully at http://localhost:${Port}`);
})

// Connecting with the Database
const dbConnect = require("./config/database");
dbConnect();

// Setting a default route
app.get("/", (req, res) => {
    res.json("This is the backend of Asif's Portfolio Website.");
})