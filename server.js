// Dependencies 
const express = require("express")

// Initiators
const app = express()

// Functions
function middleware1(request, response, next) {
    request.customProperty = 100;
    next()
}

function middleware2(request, response, next) {
    console.log(`The custom property value is: ${request.customProperty}`);
    request.customProperty = 600;
    next()
}

function errorHandler(error, request, response, next) {
    response.json({ error: error })
}

// Global Middlewares
app.use(middleware1)
app.use(middleware2)

// Routes and Callback Functions
app.get("/", (request, response, next) => {
    response.send(`The value is ${request.customProperty}`)
})

// Error Handler
app.use(errorHandler) // Error handler needs to be placed at the very end of your server code.  Needs to be placed here to handle all errors from middleware 

// Server Listening
app.listen(3000)