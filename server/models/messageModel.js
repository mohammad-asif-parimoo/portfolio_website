const mongoose = require('mongoose');
const moment = require('moment-timezone');

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
        type: String,
        default: function () {
            // Get the current date and time in IST
            const currentDate = moment().format("DD MMMM YYYY, dddd, h:mm A");
            return currentDate;
        }
    }
})

module.exports = mongoose.model('message', messageModel);