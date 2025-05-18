const express = require('express') // Import express

const app = express() // creating our server app

const port = 3001// defining a port for our server to run on

// Servers are a collection of request handlers for different routes

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.get('/test/api', (req, res)=>{
    // reach out to AI
    // get something from a database
    // send a text message to someone 
    res.send('API is live and functional!')
})

app.listen(port, ()=>{
    console.log("Server running on port: " + port)
})