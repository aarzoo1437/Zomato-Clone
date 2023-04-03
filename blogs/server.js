const express = require('express');
const app = express();

app.use('/', (req, res)=>{
    res.send('Hello from server');
})

app.listen('1111', (req, res)=>{
    res.send("listening at pport 1111");
})