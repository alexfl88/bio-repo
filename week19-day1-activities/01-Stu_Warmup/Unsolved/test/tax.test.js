var expect = require("chai").expect;
var calculateTax = require("../tax");

// Write tests for the calculateTax function here

describe("tax.js", () => {
    it('should return the price with 8% tax calculated correctly', () => {
        expect(calculateTax(5)).to.equal("$5.40")
    });
})