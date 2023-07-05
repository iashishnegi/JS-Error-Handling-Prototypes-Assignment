/*9. Check the presence using closures.
Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
returned function should take another number as an argument and return true if the number is in the array, and
false otherwise.*/

function numberChecker(array){
    return function(number){
        return array.includes(number);
    }
}

let numbers = [1,2,3,4,5];
let checkNumber = numberChecker(numbers);

console.log(checkNumber(3)); // Output : True
console.log(checkNumber(6)); // Output : False