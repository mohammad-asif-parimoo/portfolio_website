const mongoose = require('mongoose');

const messageModel = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },

    date: {
        type: String,  // Changed the type to String for setting custom type of Date
        default: function () {

            // Format the date in this way e.g., 01 January 1990, Tuesday, 5:00 PM
            const currentDate = new Date();
            const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: true
            };
            return currentDate.toLocaleString(undefined, options);
        }
    }
})

module.exports = mongoose.model('message', messageModel);