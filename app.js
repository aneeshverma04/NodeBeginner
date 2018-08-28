/*function greeting(greet){
console.log(greet)
}
greeting("hello")
*/
const http = require('http');
const fs = require('fs')
const hostname = '127.0.0.1';
const port = 3000

fs.readFile('index.html',(err,htmlData) => {
	if(err){
		throw err;
	}


	const server = http.createServer((req,res)=>{
		res.statusCode = 200; // 200 says everything is okay
		res.setHeader('Content-type','text/html');
		res.write(htmlData)
		res.end(); 
	});

	server.listen(port,hostname, ()=>{
		console.log("Server started on port " + port)
	});
});

// ()=> { } callback function