var assert = require('chai').assert;
var tetris = require('../tetris')

describe("field generation works correctly", function(){
	it("field witch has elements",function(){
		let stringField = `
			-----
			-X-X-
			-XXX-
			XXX-X
		`
		let actual = tetris.buildField(stringField)
		let expected = [
			[false,false,false,false,false],
			[false,true, false,true, false],
			[false,true, true ,true, false],
			[true, true, true, false,true ]
		
		]
		assert.deepEqual(actual,expected)
	})
	
	it("empty field 4x1", function(){
		let stringField = `
			-
			-
			-
			-
		`
		let actual = tetris.buildField(stringField);
		let expected = [
			[false],
			[false],
			[false],
			[false]
		];
		
		assert.deepEqual(actual, expected)
	})
	
	it("horizontal field 2x5", function(){
		let stringField = `
			--XXX
			XXX--
		`
		let expected = [
			[false,false,true, true ,true ],
			[true, true ,true ,false,false]
		]
		let actual = tetris.buildField(stringField);
		assert.deepEqual(actual, expected);
	})
	it("invalid symbol is an error", function(){
		let stringField = `
			-X
			Y-
		`
		assert.throws(function(){
			tetris.buildField(stringField)
		})
	})
	it("field empty is an error", function(){
		assert.throws(function(){
			tetris.buildField("")
		})
	})
	
	it("field whitespace is an error", function(){
		assert.throws(function(){
			tetris.buildField("  ")
		})
	})
	
	it("field only newlines is an error", function(){
		assert.throws(function(){
			tetris.buildField(`
			     
			`)
		})
	})
	
	it("field has 5 empty lines is an error", function(){
		assert.throws(function(){
			tetris.buildField(`
			
			
			
			
			
			`)
		})
	})
	
	it("invalid two symbols is an error", function(){
		let stringField = `
			-X
			YY
		`
		assert.throws(function(){
			tetris.buildField(stringField)
		})
	})
	
	it("invalid symbol between symbols is an error", function(){
		let stringField = `
			-X-
			XYX
		`
		assert.throw(function(){
			tetris.buildField(stringField)
		})
	})
	
	it("five spaces is an error", function(){
		let stringField = "     "
		
		assert.throw(function(){
			tetris.buildField(stringField)
		})
	})
	
})

describe("generation tetromino, the size tetromino 4x4", function(){
	it("options vertical tetromino x:2 and y:0-3", function(){
		let stringField = `
			--X-
			--X-
			--X-
			--X-
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [
		   {x: 2, y: 0}, 
		   {x: 2, y: 1}, 
		   {x: 2, y: 2}, 
		   {x: 2, y: 3}
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
	it("options horizontal tetromino x:0-3 and y:1", function(){
		let stringField = `
			----
			XXXX
			----
			----
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino = [
			{x: 0, y: 1},
			{x: 1, y: 1},
			{x: 2, y: 1},
			{x: 3, y: 1}
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
	it("options vertical tetromino x:3 and y:0-3", function(){
		let stringField = `
			---X
			---X
			---X
			---X
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [
		   {x: 3, y: 0}, 
		   {x: 3, y: 1}, 
		   {x: 3, y: 2}, 
		   {x: 3, y: 3}
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
	it("options horizontal tetromino x:0-3 and y:0", function(){
		let stringField = `
			XXXX
			----
			----
			----
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino = [
			{x: 0, y: 0},
			{x: 1, y: 0},
			{x: 2, y: 0},
			{x: 3, y: 0}
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
})

describe("generation tetromino, the size tetromino 5x5", function(){
	it("invalid length tetromino is an error", function(){
		let stringField = `
			XXXXX
			-----
			-----
			-----
		`
		assert.throws(function(){
			tetris.buildTetromino(stringField)
		})
	})
	
	it("invalid length tetromino is an error", function(){
		let stringField = `
			--X-
			--X-
			--X-
			--X-
			--X-
		`
		assert.throws(function(){
			tetris.buildTetromino(stringField)
		})
	})
})

describe("generation tetromino, the size tetromino 3x3", function(){
	 it("invalid length tetromino is an error", function(){
		let stringField = `
			---
			-X-
			-X-
			-X-
			---
		`
		assert.throws(function(){
			tetris.buildTetromino(stringField)
		})
	})
	
	it("invalid length horizontal tetromino is an error", function(){
		let stringField = `
			---
			---
			XXX
			---
			---
		`
		assert.throws(function(){
			tetris.buildTetromino(stringField)
		})
	})
})

describe("generation T tetromino", function(){
	it("turned up T tetromino x:1-3 and y:0-1", function(){
		let stringField = `
			--X--
			-XXX-
			-----
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 1, y: 1},
		   {x: 2, y: 0},		   
		   {x: 2, y: 1},
		   {x: 3, y: 1}
		   
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
	it("turned up T tetromino in the middle of the field x:1-3 and y:1-2", function(){
		let stringField = `
			-----
			--X--
			-XXX-
			-----
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 1, y: 2},
		   {x: 2, y: 1},
		   {x: 2, y: 2},
		   {x: 3, y: 2}
		   
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
	it("turned up T tetromino x:1-3 and y:1-2", function(){
		let stringField = `
			-----
			--X--
			-XXX-
			
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino = [
			{x: 1, y: 2},
			{x: 2, y: 1}, 
			{x: 2, y: 2},
			{x: 3, y: 2}
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
	it("turned left T tetromino x:1-2 and y:0-2", function(){
		let stringField = `
			--X--
			-XX--
			--X--
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 1, y: 1},
		   {x: 2, y: 0},
		   {x: 2, y: 1},
		   {x: 2, y: 2}
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
	it("turned left T tetromino in the middle of the field x:1-2 and y:1-3", function(){
		let stringField = `
			-----
			--X--
			-XX--
			--X--
			-----
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 1, y: 2},
		   {x: 2, y: 1},
		   {x: 2, y: 2},
		   {x: 2, y: 3}
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
	it("turned down T tetromino x:1-3 and y:1-2", function(){
		let stringField = `
			-----
			-XXX-
			--X--
			
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino = [
			{x: 1, y: 1},
			{x: 2, y: 1},
			{x: 2, y: 2},
			{x: 3, y: 1}
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
	it("turned down T tetromino in the middle of the field x:1-3 and y:1-2", function(){
		let stringField = `
			-----
			-XXX-
			--X--
			-----
			
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino = [
			{x: 1, y: 1},
			{x: 2, y: 1},
			{x: 2, y: 2},
			{x: 3, y: 1}
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
	it("turned right T tetromino x:2-3 and y:0-2", function(){
		let stringField = `
			--X--
			--XX-
			--X--
			
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino = [
			{x: 2, y: 0},
			{x: 2, y: 1},
			{x: 2, y: 2},
			{x: 3, y: 1}
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
	it("turned right T tetromino in the middle of the field x:2-3 and y:1-3", function(){
		let stringField = `
			-----
			--X--
			--XX-
			--X--
			-----
			
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino = [
			{x: 2, y: 1},
			{x: 2, y: 2},
			{x: 2, y: 3},
			{x: 3, y: 2}
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
})
describe("generation Z Tetromino", function(){
	it("Initial position Z tetromino", function(){
		let stringField = `
			-XX--
			--XX-
			-----
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 1, y: 0},
		   {x: 2, y: 0},		   
		   {x: 2, y: 1},
		   {x: 3, y: 1}
		   
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
	it("Tetromino Z looks up", function(){
		let stringField =`
			--X--
			-XX--
			-X---
			-----
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 1, y: 1},
		   {x: 1, y: 2},
           {x: 2, y: 0},		   
		   {x: 2, y: 1}
		   
		   
		];
		assert.deepEqual(transformation, bodyTetromino);	
	})
	
	it("Tetromino Z inside field ", function(){
		let stringField =`
			-----
			-XX--
			--XX-
			-----
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 1, y: 1},
		   {x: 2, y: 1},		   
		   {x: 2, y: 2},
		   {x: 3, y: 2}
		   
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
	it("Tetromino Z looks up inside field", function(){
		let stringField =`
			-----
			--X--
			-XX--
			-X---
			-----
			
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 1, y: 2},
		   {x: 1, y: 3},
		   {x: 2, y: 1},
		   {x: 2, y: 2},
		   
		   
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
})

describe("generation mirror Z Tetromino", function(){
	it("Initial position mirror Z tetromino", function(){
		let stringField = `
			--XX-
			-XX--
			-----
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [
		   {x: 1, y: 1},
		   {x: 2, y: 0},
		   {x: 2, y: 1},
		   {x: 3, y: 0}		   		   
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
	it("Tetromino mirror Z looks up", function(){
		let stringField =`
			-X---
			-XX--
			--X--
			-----
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 1, y: 0},
		   {x: 1, y: 1},		   
		   {x: 2, y: 1},
		   {x: 2, y: 2}
		   
		];
		assert.deepEqual(transformation, bodyTetromino);	
	})
	
	it("Initial position mirror Z tetromino", function(){
		let stringField = `
			-----
			--XX-
			-XX--
			-----
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [
		   {x: 1, y: 2},	
		   {x: 2, y: 1},
		   {x: 2, y: 2},
		   {x: 3, y: 1},		   
		];
		assert.deepEqual(transformation, bodyTetromino);
	})
	
	it("Tetromino mirror Z looks up", function(){
		let stringField =`
			-----
			-X---
			-XX--
			--X--
			-----
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 1, y: 1},
		   {x: 1, y: 2},		   
		   {x: 2, y: 2},
		   {x: 2, y: 3}
		   
		];
		assert.deepEqual(transformation, bodyTetromino);	
	})
})

describe("generation L Tetromino", function(){
	
	it("Starting position L Tetromino", function(){
		let stringField =`
			--X--
			--X--
			--XX-
			
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 2, y: 0},
		   {x: 2, y: 1},		   
		   {x: 2, y: 2},
		   {x: 3, y: 2}
		   
		];
		assert.deepEqual(transformation, bodyTetromino);	
	})
	
	it("L Tetromino turned to the left", function(){
		let stringField =`
			-----
			-XXX-
			-X---
			
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 1, y: 1},
		   {x: 1, y: 2},
		   {x: 2, y: 1},		   
		   {x: 3, y: 1}
		   
		];
		assert.deepEqual(transformation, bodyTetromino);	
	})
	
	it("L Tetromino turned to the top", function(){
		let stringField =`
			-XX--
			--X--
			--X--
			
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 1, y: 0},
		   {x: 2, y: 0},		   
		   {x: 2, y: 1},
		   {x: 2, y: 2}
		   
		];
		assert.deepEqual(transformation, bodyTetromino);	
	})
	
	it("L Tetromino turned to the right", function(){
		let stringField =`
			---X-
			-XXX-
			-----
			
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 1, y: 1},		   
		   {x: 2, y: 1},
		   {x: 3, y: 0},
		   {x: 3, y: 1}
		   
		];
		assert.deepEqual(transformation, bodyTetromino);	
	})
})

describe("generation J Tetromino", function(){
	it("Starting position J Tetromino", function(){
		let stringField =`
			--X--
			--X--
			-XX--
			
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 1, y: 2},
		   {x: 2, y: 0},
		   {x: 2, y: 1},		   
		   {x: 2, y: 2}
		   
		];
		assert.deepEqual(transformation, bodyTetromino);	
	})
	
	it("J Tetromino turned to the right", function(){
		let stringField =`
			-X---
			-XXX-
			-----
			
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 1, y: 0},
		   {x: 1, y: 1},		   
		   {x: 2, y: 1},
		   {x: 3, y: 1}
		   
		];
		assert.deepEqual(transformation, bodyTetromino);	
	})
	
	it("J Tetromino turned to the top", function(){
		let stringField =`
			--XX-
			--X--
			--X--
			
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 2, y: 0},		   
		   {x: 2, y: 1},
		   {x: 2, y: 2},
		   {x: 3, y: 0}
		   
		];
		assert.deepEqual(transformation, bodyTetromino);	
	})
	
	it("J Tetromino turned to the right", function(){
		let stringField =`
			-----
			-XXX-
			---X-
			
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 1, y: 1},		   
		   {x: 2, y: 1},
		   {x: 3, y: 1},
		   {x: 3, y: 2}
		   
		];
		assert.deepEqual(transformation, bodyTetromino);	
	})
})

describe("generation Square Tetromino", function(){
	it("Square Tetromino turned to the right", function(){
		let stringField =`
			--XX-
			--XX-
			-----
			
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 2, y: 0},
		   {x: 2, y: 1},		   
		   {x: 3, y: 0},
		   {x: 3, y: 1}
		   
		];
		assert.deepEqual(transformation, bodyTetromino);	
	})
	
	it("Square Tetromino inside field", function(){
		let stringField =`
			-----
			--XX-
			--XX-
			-----
			
		`
		let transformation = tetris.buildTetromino(stringField)
		let bodyTetromino =  [ 
		   {x: 2, y: 1},
		   {x: 2, y: 2},		   
		   {x: 3, y: 1},
		   {x: 3, y: 2}
		   
		];
		assert.deepEqual(transformation, bodyTetromino);	
	})
})