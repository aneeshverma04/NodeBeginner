/*function greeting(greet){
console.log(greet)
}
greeting("hello")
*/
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000

const server = http.createServer((req,res)=>{
	res.statusCode = 200; // 200 says everything is okay
	res.setHeader('Content-type','text/plain');
	res.end('Hello World!'); // the output on screen
});

server.listen(port,hostname, ()=>{
	console.log("Server started on port " + port)
});

// ()=> { } callback function