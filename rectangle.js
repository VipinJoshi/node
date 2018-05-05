
module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        setTimeout(() =>
            callback(
                new Error('to calculate area of rectangle we must have length and breadth greater than 0')
                , null)
            , 3000);
    }
    else {
        setTimeout(() =>
            callback(null, {
                perameter: () => 2 * (x + y),
                area: () => x * y
            })
            , 3000);
    }
}


