var rect = require('./rectangle');

function solveRectangle(x, y) {
    rect(x, y, (err, rectangle) => {
        if (err) {
            console.log("Error: ", err.message)
        }
        else {
            console.log(`parameter of rect is ${rectangle.perameter()}`);
            console.log(`area of rect is ${rectangle.area()}`);
        }
    });  /*
    console.log('rectangle result');

    if(x<=0 || y<=0){
        console.log('to calculate area of rectangle we must have length and breadth greater than 0');
    }
    console.log(`parameter of rect is ${rect.perameter(x,y)}`);
    console.log(`area of rect is ${rect.area(x,y)}`);
*/
}

solveRectangle(2, 2);
solveRectangle(0, 2);
solveRectangle(3, 4);