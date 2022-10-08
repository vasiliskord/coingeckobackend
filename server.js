const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/api', require('./routes/coinRoutes'));

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
