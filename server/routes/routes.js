const express = require("express");
const router = express.Router();

// Importing Controllers
const messageController = require("../controllers/messageController");

// Importing validation functions
const {
    validateName,
    validateEmail,
    validateSubject,
    validateMessage,
} = require("../utils/formValidation");

// Making the routes
router.post("/message",
    [
        validateName,
        validateEmail,
        validateSubject,
        validateMessage,
    ],
    messageController
);

module.exports = router;