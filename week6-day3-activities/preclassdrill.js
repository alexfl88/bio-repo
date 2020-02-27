var sample = () => {
    var a = b = 3;
}

sample();
console.log("is b defined?", typeof b !== "undefined");
console.log("is a defined?", typeof a !== "undefined");