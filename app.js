const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');

require('dotenv').config({ path: "./config/config.env" });

// Using Middleware
app.use(express.json({
    limit: '50mb'
}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(
    cors({
        origin: "https://soicout.onrender.com",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);


// Routes import
const post = require('./routes/post');
const user = require('./routes/user');

// Using routes
app.use('/api/v1', post);
app.use('/api/v1', user);

module.exports = app;