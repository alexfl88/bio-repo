/*
    Output--Am i always expected to return an array? Lets the interviewer know you are checking for any edge cases
    Input--Am i always expected to be given an array? Let the interviewer know you are trying to break down the problem and get rid of any edge cases
    Code--Write code!!!
    Edge Cases--Try multiple edge cases, incase something is wrong
*/

function removeDup(arr) {
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
var a = [1, 2, 2, 3]
var b = [4, 5, 4, 4, 7, 5]
var c = [1, 2, 3, 5]
console.log(a, removeDup(a))
console.log(b, removeDup(b))
console.log(c, removeDup(c))





function deduper(arr) {
    var hashMap = {};
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        hashMap[arr[i]] = arr[i];
    }
    
    for(var key in hashMap) {
        newArr.push(hashMap.key);
    }
​
    return newArr;
​
}


// How to write a Promise based function for technical interviews
const isEven = function(value) {
    return new Promise((resolve, reject) => {
        if(value % 2 === 0){
            resolve("I'm happy!");
        } else {
            reject('I need an even number!');
        }
    });
}

isEven(1)
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.log(e);
    })
