var assert = require('chai').assert;
var pow = require('../pow')
describe("pow", function() {
	
  it("при возведении в отрицательную степень результат NaN", function() {
	var result = pow(2, -1)
    assert(isNaN(result), "pow(2, -1) не NaN: "+ result);
  });
  
  it("при возведении в дробную степень результат NaN", function() {
	var result = pow(2, 1.5)
    assert(isNaN(result), "pow(2, -1.5) не NaN: "+ result);
  });	
	
  it("при возведении 1 в 1ю степень результат 1", function() {
    assert.equal(pow(1, 1), 1);
  });
  
  it("при возведении 100 в 1ю степень результат 100", function(){
	  assert.equal(pow(100, 1), 100);
  })
  
	
  it("при возведении 2 в 3ю степень результат 8", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("при возведении 3 в 4ю степень результат 81", function() {
    assert.equal(pow(3, 4), 81);
  });
  
  it("при возведении 0 в 0ю степень результат 1", function(){
	  assert.equal(pow(0, 0), 1);
  })
  
  it("при возведении 100 в 0ю степень результат 1", function(){
	  assert.equal(pow(100, 0), 1);
  })
  
  
  
  it("при возведении 100 в 2ю степень результат 10000", function(){
	  assert.equal(pow(100, 2), 10000);
  })

});
