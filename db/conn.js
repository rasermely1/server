const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log('Connection successful');
}).catch((err) => console.log('No connection', err));
