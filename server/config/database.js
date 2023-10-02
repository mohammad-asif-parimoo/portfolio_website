const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {

    await mongoose.connect(process.env.DATABASE_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
        .then(() => {
            console.log("Database has been connected successfully");
        })
        .catch((error) => {
            console.log("Error occured while connecting with the Database", error);
        })
}

module.exports = dbConnect;