const express = require('express');
const connect = require('./src/config/db');

const app = express();

app.get('/a', (req, res) => {
    try {
        res.send('hello abhijeet')
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000, async () => {
    await connect()
    console.log(
        'done'
    )
})