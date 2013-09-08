var should = require('chai').should();

function sum(a, b) {
  return a + b;
};

describe("sum should", function() {
  it("be 5 when sum(0,5)", function() {
    sum(0, 5).should.equal(5);
  });

  it("be 7 when sum(2,5)", function() {
    sum(2, 5).should.equal(8);
  });
});
