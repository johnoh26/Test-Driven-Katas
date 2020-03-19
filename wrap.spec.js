const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("wrap is a function", () => {
    expect(typeof wrap).to.equal("function");
  });
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  it("Returns the correct string with the correct length", () => {
    expect(wrap("0123456789", 10)).to.equal("0123456789");
  });
  it("Returns the correct string with the correct length", () => {
    expect(wrap("0123456789", 5)).to.equal("01234\n56789");
  });
  it("Returns the correct string with the correct length", () => {
    expect(wrap("012 3456 789", 5)).to.equal("012\n3456\n789");
  });
  it("Returns the correct string with the correct length", () => {
    expect(wrap("012 3456 789", 2)).to.equal("Error");
  });
});
