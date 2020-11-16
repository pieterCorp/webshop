const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to database"));

app.listen(process.env.PORT || 4000, () =>{
    console.log("listening on port 4000");
});