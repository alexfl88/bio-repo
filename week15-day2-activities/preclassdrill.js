// Write a function that takes in a number and reverses the order of the digits

const revNum = num => {
    return Number(num.toString().split('').reverse().join(''));
}

console.log('revNum(12345)', revNum(12345));
console.log('revNum(1021)', revNum(1021));
console.log('revNum(4)', revNum(4));