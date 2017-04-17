var http = require('http');
var url =  require('url');
var fs = require('fs');

http.createServer(function(request, response){
//read the request for a certain pathname
var pathname = url.parse(request.url).pathname;
//print the resource for the path name that is required
console.log('Request for ' +pathname+ ' is received.');
//read the file from the filesystem

fs.readFile(pathname.substr(1), function(err, data) {
	if(err){
		console.log(err);
		response.writeHead(404, {'Content-Type' : 'text/html'})
	}
	else{
		console.log('file found');
		response.writeHead(200, {'Content-Type' : 'text/html'});
		response.write(data.toString());
	}
	response.end();

});

}).listen(8081);

console.log('server started running on port 8081');
