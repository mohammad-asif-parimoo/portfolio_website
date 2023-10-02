const { check } = require('express-validator');

// Validation for name
const validateName = check('name')
    .trim() // Removing leading and trailing spaces
    .isLength({ min: 1 }).withMessage("Name is required")
    .isLength({ min: 3 }).withMessage("Name should be a minimum of 3 characters")
    .isString().withMessage("Only alphabetical characters from a-z or A-Z are valid")
    .matches(/^[a-zA-Z\s]+$/).withMessage("Name must contain only alphabetical characters")

// Validation for email
const validateEmail = check('email').isEmail().withMessage("Please provide a valid email address");

// Validation for subject
const validateSubject = check('subject')
    .isLength({ min: 3 }).withMessage("Subject should be a minimum of 3 characters")
    .isLength({ max: 100 }).withMessage("Subject length must not exceed 100 characters")
    .custom((value) => {
        if (!/^[a-zA-Z0-9\s]*$/.test(value) || /^\s*$/.test(value)) {
            throw new Error("Use only letters (a-z or A-Z) and numbers (0-9)");
        }
        return true;
    });

// Validation for message
const validateMessage = check('message')
    .isLength({ min: 5 }).withMessage("Message should be a minimum of 5 characters")
    .isLength({ max: 5000 }).withMessage("Message length must not exceed 5000 characters")
    .custom((value) => {
        if (!/^[a-zA-Z0-9\s~`!@#$%^&*()_+=[\]{}|;:'",<.>/?\\-]+$/.test(value) || /^\s*$/.test(value)) {
            throw new Error("Use only letters (a-z or A-Z), numbers (0-9) and special characters");
        }
        return true;
    });

module.exports = {
    validateName,
    validateEmail,
    validateSubject,
    validateMessage,
};