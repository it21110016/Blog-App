// dotenv
require('dotenv').config();

// import express
const express = require('express')

// import mongoose
const mongoose = require('mongoose');

// Import cors module
const cors = require('cors');

// import blog routes module
const blogRoutes = require('./routes/blogRoutes');

// express application
const app = express();

// middleware
app.use(express.json());

//method to show the rest api call in the console
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Use cors module
app.use(cors({
    origin: 'https://blog-app-6vki.onrender.com',
}));

// use blog routes module
app.use('/api/v1/blogs', blogRoutes);

//connect to db
mongoose
    .connect(process.env.MONGO_URI, {dbName: process.env.DB_NAME})
    .then(() => {

        console.log(`connected to the database ${process.env.DB_NAME}`);

        app.listen(process.env.PORT, (req, res) => {
            console.log(`Backend server is running on server ${process.env.PORT}`);
        })

    })
    .catch(Error => {
        console.log(Error); 
    });

// export app
module.exports = app;