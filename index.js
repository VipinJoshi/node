const http = require('http');
const hostName= 'localhost'
const port='3100'

const server= http.createServer((req,res)=>{
    console.log(req.headers);
    
    res.statusCode= 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Hello man</h1></body></html>')
})

server.listen(port,hostName,()=>{
    console.log(`Server running at http://${hostName}:${port}`);
});

/*
const http = require('http');

//create a server object:
http.createServer(function (req, res) {
console.log('hello')
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080);
*/
/* callback example var rect = require('./rectangle');

function solveRectangle(x, y) {
    rect(x, y, (err, rectangle) => {
        if (err) {
            console.log("Error: ", err.message)
        }
        else {
            console.log(`parameter of rect is ${rectangle.perameter()}`);
            console.log(`area of rect is ${rectangle.area()}`);
        }
    }); 
     /*
    console.log('rectangle result');

    if(x<=0 || y<=0){
        console.log('to calculate area of rectangle we must have length and breadth greater than 0');
    }
    console.log(`parameter of rect is ${rect.perameter(x,y)}`);
    console.log(`area of rect is ${rect.area(x,y)}`);

}

solveRectangle(2, 2);
solveRectangle(0, 2);
solveRectangle(3, 4);

*/
