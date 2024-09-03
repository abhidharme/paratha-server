const mongoose = require('mongoose');

const connect = () => {
    try {
        return mongoose.connect('')
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connect