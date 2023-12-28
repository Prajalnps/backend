require('dotenv').config()

const express = require('express') //it is a require module syntax, you can use import express from "express" which is a common js syntax

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello Twitter')
})

//login rout
app.get('/login', (req, res) => {
    res.send(`<h1>Pleas login on backend</h1>`)
})

//output : Cannot GET /login, this is because of hot reloading, on save all files are auto restarted in backend, we need to process it again, meaning stop the server and run it again

//more route
app.get('/youtube', (req, res) => {
    res.send(`<h2>Prajal's Youtube Channel</h2>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})