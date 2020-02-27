// Write a function that takes an array of numbers and a function as parameters. The function parameter
// should return true if the input meets a certain condition or false otherwise. Your function should
// return true if the function parameter returns true for any of the array elements in the array
// parameter or false otherwise

const arrayAnyTrueFunc = function (arr,func) {
    let bool = false;
    arr.forEach(element => {
        if (func(element)) {
            bool = true;
            return bool;
        }
    });
    return bool;
}

const arrayAnyTrueFuncSome = (arr, func) => {
    return arr.some(element => func(element));
}