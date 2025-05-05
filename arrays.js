const num = [2, 3, 4]

const doubledNumbers = num.map(number => number * 3);

console.log(doubledNumbers) //map() is array method that creates a new array by appling a function to each element of the orininal array

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers) //filter() is a array method that cerate a new array with all the element that pass the test implemented by the provided function

const numb = [1, 2, 3, 4];

const sum = numb.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum) // reduce() is a array method that execute a reducer function on each element of the array and returns a single value

const number = [1, 2, 3, 4, 5];

numbers.splice(2, 1, 6); // numbers: [1, 2, 6, 4, 5] (removed 3, added 6)

console.log(numbers)



