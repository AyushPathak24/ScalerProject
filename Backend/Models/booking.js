const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    roomNo: {
        type: Number,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Upcoming'
    },
    price: {
        type: Number,
        default: 1000
    },
});


const BookingModel = new mongoose.model("Booking", bookingSchema);

module.exports = BookingModel;



