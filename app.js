const express = require('express');
require('dotenv').config();
const connectDB = require('./db/db.connection');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/item.routes');

const app = express();



app.use(bodyParser.json());


app.use('/api', itemRoutes);


app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
});

connectDB();
