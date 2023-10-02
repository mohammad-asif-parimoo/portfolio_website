const messageModel = require("../models/messageModel");
const { validationResult } = require('express-validator');
const transporter = require("../utils/transporter");
const { emailTemplate } = require("../utils/emailTemplate");

const messageController = async (req, res) => {
    try {
        // Extracting the data from request body
        const { name, email, subject, message } = req.body;

        // Checking whether any errors are there in the Validation --> Defined in formValidation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Saving the data into the database
        await messageModel.create({
            name,
            email,
            subject,
            message
        })

        // Extracting the first name which comes before the spaces from the user
        let firstName = name.split(' ')[0];

        // Sending an email to the user
        const mailOptions = emailTemplate(firstName, email);
        await transporter.sendMail(mailOptions);

        // Returning succesfull response
        return res.status(200).json({
            success: true,
            message: "User's message has been successfully stored into the Database",
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong while storing User's message into the Database"
        })
    }
}

module.exports = messageController;