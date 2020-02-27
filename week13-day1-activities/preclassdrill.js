// Write a function that takes an array of numebrs and a function as parameters. The function
// parameter should do something to a numbers (increment, double, decrement, etc) and return
// the result. Your function should return the array that results form applying the function
// parameter to each element in the number array

const doSomething = (arr, func) => {
    return arr.map(x => func(x))
}

console.log(doSomething([1,2,3], num => num * 2));
console.log(doSomething([1,2,3], num => num + 1));