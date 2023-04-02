const express = require('express');
const db = require('./dbConn/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookingRouter = require('./Routes/bookingRouter');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bookingRouter);

app.listen(3005, () => {
    console.log('server running at port 3005');
});