// Import the Express framework
const express = require('express');

// Create an instance of an Express app
const app = express();
app.use(express.json())

// Define the port number for the server
const Port = 5000;

// Middleware function to check the time of day
const middle = (req, res, next) => {
    // Get the current date and time
    const d = new Date();
    // Extract the current hour from the date
    const hour = d.getHours();
    // Log the current hour to the console
    console.log('hour', hour);

    // Check if the current hour is between 9 AM and 3 PM (9:00 to 15:00)
    if (hour > 8 && hour < 15) {
        // If it is, call next() to pass control to the next middleware/route handler
        next();
    } else {
        // Otherwise, log a message to the console and send a response indicating unavailability
        console.log("here");
        res.send('We are not available right now! Come back tomorrow.');
    }
};

// Apply the middleware function to all incoming requests
// app.use(middle);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route handler for the root URL
app.get('/', (req, res) => {
    // Render a response (the specific rendering logic is not implemented here)
    res.render();
});


//user Routes
app.use('/users', require('./Routes/userRoute')) 

// Start the server and listen on the defined port
app.listen(Port,(err)=>{
    err ? console.log('err', err) : console.log(`Server is running on port:${Port}`)
})



// CRUD
// C: create  ==> POST
// R: read    ==> GET
// U: update  ==> PUT
// D: delete  ==> DELETE
