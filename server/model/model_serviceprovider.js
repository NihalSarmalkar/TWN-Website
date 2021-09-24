const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true,

    },
    details: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true

    },
    image: String,
});

const serviceproviderdb = mongoose.model('serviceproviderdb', schema);

module.exports = serviceproviderdb;