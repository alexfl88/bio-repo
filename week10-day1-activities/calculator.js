let operatorObj = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/",
    remainder: "%",
    algebra: "algebra",
}

let operation = operatorObj [ProcessingInstruction.argv[2]];

if (operation === "algebra") {
    newAlgebra = (process.argv[3]).split(/x|=|\+/);
    console.log(newAlgebra[3] - newAlgebra[2]) / newAlgebra[0]);
} else {
    console.log(eval())
}