// Write a function that takes 2 parameters: the first is an array. The second is an eleemt which may or may
// not be in the array. Without using any built in array methods, return true if the element is in the array
// or false otherwise. (Then try to do it with a built in array method)

const isContained = (arr,element) => {
    let existsInArray = false;
    arr.forEach(elem => {
        if (elem === element) {
            existsInArray = true;
        }
    })
    return existsInArray;
}

console.log('isContained1 true', isContained([1,2,3,4], 1));
console.log('isContained2 false', isContained([1,2,3,4],5));

const isContained2 = (arr, element) => {
    return arr.includes(element);
}