// const square = {
// 	area : (a) => (a*a),
// 	perimeter : (a) => (4*a)
// }

const square = require('./square');

const calsquare = (a) => {
	console.log(`the value of a is ${a} and its area is ` + square.area(a));
	console.log(`the value of a is ${a} and its perimeter is ` + square.perimeter(a));
}

calsquare(5);