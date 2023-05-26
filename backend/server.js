// dotenv
require('dotenv').config();

// import express
const express = require('express')

// import mongoose
const mongoose = require('mongoose');

// import blog routes module
const blogRoutes = require('./routes/blogRoutes');

// express application
const app = express();

// middleware
app.use(express.json());

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.path}`);
//     next();
// });

// use blog routes module
app.use('/api/v1/blogs', blogRoutes);

//connect to db
mongoose
    .connect(process.env.PUBLIC_URI, {dbName: process.DB_NAME})
    .then(() => {

        console.log("connected to the database");

        app.listen(process.env.PORT, (req, res) => {
            console.log(`Backend server is running on server ${process.env.PORT}`);
        })

    })
    .catch(Error => {
        console.log(Error);
    });

// export app
module.exports = app;