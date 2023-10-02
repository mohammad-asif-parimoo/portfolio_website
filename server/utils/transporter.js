const nodemailer = require('nodemailer');
require("dotenv").config();

// Creating a transporter object for sending emails
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

module.exports = transporter;