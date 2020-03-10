// implement your API here
// We will write our API with Express( barebones lib for building web servers - Sinatra)
// Step 1 - Install Express - npm install express
// Step 2 - Import express, commonjs syntax instead of native ES modules
const express = require('express');

// Step 3 - Instantiate app
const app = express()

// Step 4 - 'turn on' the ability of the app to read req.body as json
app.use(express.json())

// Step 5 - Decide a port number
const PORT = 3333

// Step 6 - Make an endpoint on '/hello' [GET] that sends back a json { "message": "hello" }
app.get('/hello', (
    req, // req is the 'objectified' version of the actual http request (piece of paper with 3 parts...)
    res, // res is the toolbox that allows us to shape a response and send it back to the client
) => {
 // set a success code of 200 
 // send back a json response
 res
 .status(200)
 .json({ message: 'hello'})
})

// Step 7 - Make the express listen on PORT 
app.listen(PORT, () => {
    console.log('Great! listening on')
})