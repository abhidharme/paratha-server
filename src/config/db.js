const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://dharmeabhi2021:HSwcCPdld6TqotNK@cluster0.mz3cv.mongodb.net/Parathas');
        // await mongoose.connect('mongodb://localhost:27017/paraths');
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
    }
}

module.exports = connect;

// HSwcCPdld6TqotNK  dharmeabhi2021
