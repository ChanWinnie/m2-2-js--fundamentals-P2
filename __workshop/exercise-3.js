// Exercise 3
//
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)
//
// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_max.asp
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function getMax(num1, num2) {

  return Math.max(num1, num2);

}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?
//add num3, num4
// Call the function to test your code.
console.log(getMax(12, 43));

// Create more test examples.
console.log(getMax(1, 100));
console.log(getMax(-100, 1));
// This is needed for automated testing (more on that later)
module.exports = getMax;
