/*

1) Create a functino with a single argument (which is a string)
2) Create a loop that iterates over each letter in the string
3) Compare the first letter with the last letter. If they are not the
same, return false. Otherwise continue...
4) Compare the second laetter with the second to the last letter, 
return false if they are not the same
5) Repeat until we have exhausted all the letters
6) Return true;

*/

const isPalindrome = str => str.split("").reverse().join('') === str;

console.log(isPalindrome("racecar"));
console.log(isPalindrome("stuff"));

const isPalindromeTwo = (str) ==> {
    let comparison = str.split('').reverse();
    let output = true
    for (let i=0; i<str.length; i++){
        if (str[i] !== comparison[i]) {
            return false
        }
    }
    return output;
    