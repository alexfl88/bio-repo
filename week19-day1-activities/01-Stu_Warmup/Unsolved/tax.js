var calculateTax = function(price) {
  // Fill in code here
  if (typeof price === "number") {
    return "$"+(price*1.08).toFixed(2);
  } else {
    return "Input is not a number"
  };
}
module.exports = calculateTax;
