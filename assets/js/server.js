// var http = require('http');
// var fs = require('fs');
// var url = require('url');
const express = require('express');
const app = express();
const port = 5000;

// Creating Server

app.use(express.static('public'));

// Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index', { text: 'Ifund Africa' })
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(port, () => console.info(`App listening on port ${port}`))