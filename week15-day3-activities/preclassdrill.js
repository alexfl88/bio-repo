// Write a function that takes in a string and returns the string with white space removed and all the letters
// changed to lower case. This is a common task when a variable, routeName, etc. needs to be created from
// user input

const noSpaceLowerCase = str => str.toLowerCase().split(' ').join('');

const noSpaceLowerCase = str => {
    return str.replace(/\s+/g,"").toLowerCase()
}

console.log(noSpaceLowerCase('Hello friends!'));