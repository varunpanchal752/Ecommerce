// importing app constant from express
const app = require('./app');

//importing third party libraries
const cloudinary = require("cloudinary");

//database
const connectDatabase = require('./config/database');

//Handling Uncaught Exception
process.on('uncaughtException', (err) => {
    console.log(`Error : ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);

    process.exit(1);
});

//configuring file path for dotenv
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({path:'backend/config/config.env'});
}

connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

//creating a server and make it listen at PORT
const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
});

//Unhandled Promise Rejection
process.on('unhandledRejection', err => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    })
})