function intornot(num) {
    // var num = prompt ("input a number");
    parseInt(num);
    if (num % 1 === 0) {
        console.log("It's a whole number");
        return true;
    } else if (num % 1 < 0) {
        console.log("It's an int")
        return true;
    } else {
        console.log (num, "not valid input")
        return false;
    }
}

intornot (3)
intornot("3")
intornot(2.4)



function isInt(n) {
    return n === parseInt(Math.floor(n))
}

console.log("7", isInt("7"))
console.log(7, isInt(7))
console.log(3.4, isInt(3.4))