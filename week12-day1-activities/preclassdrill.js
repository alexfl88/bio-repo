// Write a function that takes in a sring and if the string is a string representation of a number,
// return the negative version of that number. Otherwise, throw in an error

const negNumber = stringOfNumber => {
    return stringOfNumber * -1 || 'error';
};

console.log(negNumber('10'))
console.log(negNumber('bananas'))