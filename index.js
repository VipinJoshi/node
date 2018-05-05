const rect = require('./rectangle');

function solveRectangle(x,y){
    console.log('rectangle result');

    if(x<=0 || y<=0){
        console.log('to calculate area of rectangle we must have length and breadth greater than 0');
    }
    console.log(`parameter of rect is ${rect.perameter(x,y)}`);
    console.log(`area of rect is ${rect.area(x,y)}`);

}

solveRectangle(2,2);
solveRectangle(3,4);