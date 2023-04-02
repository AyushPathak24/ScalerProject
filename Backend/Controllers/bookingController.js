const BookingModel = require("../Models/booking");
const SalesModel = require("../Models/sales");

const createBooking = async (req, res) => {
    try {
        const booking = new BookingModel(req.body);
        const createBooking = await booking.save();
        res.status(201).send("Booking done Successfully");
    } catch (error) {
        res.status(400).send(error);
    }
}

const getBookings = async (req, res) => {
    
    try {
        const allBookings = await BookingModel.find();
        res.status(200).send(allBookings);
    } catch (error) {
        res.status(404).send(error);
    }

}

const updateBookings = async (req, res) => {
    try {
        const id = req.params.id;
        const update = await BookingModel.findOneAndUpdate({ _id: id }, {
            $set: {
                email: req.body.email,
                roomNo: req.body.roomNo,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                roomType: req.body.roomType,
                status: req.body.status,
                price: req.body.price
            }
        });
        res.status(200).send(update);
    } catch (error) {
        res.status(401).send(error.message);
    }
}

const removeBooking = async (req, res) => {
    try {
        const id = req.params.id;
        await BookingModel.deleteOne({_id:id})
        res.status(200).send("Booking Deleted");
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { getBookings, createBooking, updateBookings, removeBooking, };
