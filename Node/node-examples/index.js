var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
    
    rect(l,b, (err, rectangle) => {
        if (err) {
            console.log("Error: ", err.message);
        } else {
            console.log("For Rectangle("+l+","+b+") Area: " + rectangle.area() + " Perimeter: " + rectangle.perimeter());
        }
    });
    console.log("This Statement is after the call to rect");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
