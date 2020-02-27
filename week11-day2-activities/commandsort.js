const values = process.argv.slice(2);

const numbers = [1,2,3,4,5];

const doubled = numbers.map(number => number *2);

const numValues = values
                    .map(element => parseFloat(element));

numValues.sort((a,b) => a -b);

console.log("Numbers arr", numbers);

console.log("doubled", doubled);

console.log(values);