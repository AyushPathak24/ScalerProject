const express = require('express');
const { createBooking, getBookings, updateBookings, removeBooking, }  = require('../Controllers/bookingController');
const router = express.Router();

router.route('/').get(getBookings);
// router.route('/data').get(getSalesData);
router.route('/create').post(createBooking);
// router.route('/createData').post(createSalesData)
router.route('/edit/:id').put(updateBookings);
router.route('/cancel/:id').delete(removeBooking);

module.exports = router;