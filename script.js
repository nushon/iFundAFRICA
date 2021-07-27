let express = require("express");
let app = express();
const route = express.Router();
const path = require('path');

route.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));

});

// app.use('/about', function(req, res) {
//     res.sendFile(path.join(__dirname + '/about.html'));

// });

// app.get('/contact', function(req, res) {
//     res.sendFile(path.join(__dirname + '/contact.html'));

// });


app.use('/', route);
app.use(express.static('assets'));
// app.use(express.static('files'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/img', express.static(__dirname + '/img'));


let server = app.listen(3000, function() {
    let port = server.address().port;
    console.log("Server is listening at http://localhost:%s", port);
});