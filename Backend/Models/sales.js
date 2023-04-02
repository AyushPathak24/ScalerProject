const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    cancelledBookings : {
        type: Number,
        default: 0
    },
    upcomingBookings: {
        type: Number,
        default: 0
    },
    passedBookings: {
        type: Number,
        default: 0
    },
    totalBookings: {
        type: Number,
        default: 0
    },
    revenue: {
        type: Number,
        default: 0    
    }
    
});

const SalesModel = new mongoose.model("Sales", salesSchema);

module.exports = SalesModel;