var http = require('http');
var fs = require('fs');
var url = require('url');

// Creating Server

http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for" + pathname + "received");

    // Reading from File System(fs)

    fs.readFile(pathname.substr(1), function(err, data) {
        // Checking for errors
        if (err) {
            console.log(err);
            response.writeHead(404, { 'Content-Type': 'text/index.html' });
        } else {
            response.writeHead(200, { 'Content-Type': 'text/index.html' });
            response.write(data.toString());
        }
        response.end();
    });

}).listen(8081);
console.log('Server is listening at port 8081');