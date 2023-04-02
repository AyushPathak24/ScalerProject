const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const db = process.env.DATABASE;
const dbConn = mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Connection extablished!`)
}).catch((err) => {
    console.log(err);
});

module.exports = dbConn;