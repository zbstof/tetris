var assert = require('chai').assert;
var tetris = require('../tetris')
describe("I-tetromino rotation 4x4", function() {
	var field = tetris.buildField(`
		----
		----
		----
		----
	`)
	it('После 4 поворотов на пустом поле тетрамино должно остаться на этом же месте где и было;', function(){
		var lineTetromino = tetris.buildTetromino(`
			----
			XXXX
			----
			----
		`);
		var rotated90Tetromino = tetris.rotateLine(field, lineTetromino);
		
		var rotated180Tetromino = tetris.rotateLine(field, rotated90Tetromino);
		
		
		var rotated270Tetromino = tetris.rotateLine(field, rotated180Tetromino);
		
		
		var rotated360Tetromino = tetris.rotateLine(field, rotated270Tetromino);
		
		assert.deepEqual(lineTetromino, rotated360Tetromino);
		
	})
	
	it('Первый поворот lineTetromino успешный', function(){
		var lineTetromino = tetris.buildTetromino(`
			----
			XXXX
			----
			----
		`);
		var rotated90  = tetris.rotateLine(field, lineTetromino);
		var expected90 = tetris.buildTetromino(`
			-X--
			-X--
			-X--
			-X--
		`);
		assert.deepEqual(rotated90, expected90);
	})
	
	it("Первый поворот lineTetromino не успешный-не пустое поле", function(){
		var lineTetromino = tetris.buildTetromino(`
			----
			XXXX
			----
			----
		`);
		let field = tetris.buildField(`
			----
			----
			----
			-X--
		`)
		let actual_90 =  tetris.rotateLine(field, lineTetromino);
		let expected_90 = tetris.buildTetromino(`
			----
			XXXX
			----
			----
		`);
		assert.deepEqual(actual_90, expected_90)
	})

	it('После двух поворотов I тетрамино остается на том же месте', function(){
		var lineTetromino = tetris.buildTetromino(`
			----
			XXXX
			----
			----
		`);
		var rotated90 = tetris.rotateLine(field, lineTetromino)
		var rotated180 = tetris.rotateLine(field, rotated90);
		
		
		assert.deepEqual(lineTetromino, rotated180);
	})
	
	it('После двух поворотов вертикальное I тетрамино остается на том же месте', function(){
		var lineTetromino = tetris.buildTetromino(`
			-X--
			-X--
			-X--
			-X--
		`);
		
		var rotated90 = tetris.rotateLine(field, lineTetromino)
		var rotated180 = tetris.rotateLine(field, rotated90);
		assert.deepEqual(lineTetromino, rotated180);
	})
	
	it('Горизонтальное I тетрамино слишком высоко для поворота', function(){
		var lineTetromino = tetris.buildTetromino(`
			XXXX
			----
			----
			----
		`);
		var attemptRotation = tetris.rotateLine(field, lineTetromino)
		assert.deepEqual(lineTetromino, attemptRotation);
	})
	
	it('Горизонтальное I тетрамино слишком низко для поворота y=2', function(){
		var lineTetromino = tetris.buildTetromino(`
			----
			----
			XXXX
			----
		`);
		var attemptRotation = tetris.rotateLine(field, lineTetromino)
		assert.deepEqual(lineTetromino, attemptRotation);
	})
	
	it('Горизонтальное I тетрамино слишком низко для поворота y=3', function(){
		var lineTetromino = tetris.buildTetromino(`
			----
			----
			----
			XXXX
		`);
		var attemptRotation = tetris.rotateLine(field, lineTetromino)
		assert.deepEqual(lineTetromino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком право для поворота x=2', function(){
		var lineTetromino = tetris.buildTetromino(`
			--X-
			--X-
			--X-
			--X-
		`);
		
		var attemptRotation = tetris.rotateLine(field, lineTetromino)
		assert.deepEqual(lineTetromino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком право для поворота x=3', function(){
		var lineTetromino = tetris.buildTetromino(`
			---X
			---X
			---X
			---X
		`);
		
		var attemptRotation = tetris.rotateLine(field, lineTetromino)
		assert.deepEqual(lineTetromino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком лево для поворота', function(){
		var lineTetromino = tetris.buildTetromino(`
			X---
			X---
			X---
			X---
		`)
		
		var attemptRotation = tetris.rotateLine(field, lineTetromino)
		assert.deepEqual(lineTetromino, attemptRotation);
	})
})

describe("I-tetromino rotation 5x5", function() {
	var field = tetris.buildField(`
		-----
		-----
		-----
		-----
		-----
	`)
	it('После 4 поворотов на пустом поле тетрамино должно остаться на этом же месте где и было;', function(){
		var lineTetromino = tetris.buildTetromino(`
			-----
			-----
			-XXXX
			-----
			-----
		`);
		
		var rotated90Tetromino = tetris.rotateLine(field, lineTetromino);
		var rotated180Tetromino = tetris.rotateLine(field, rotated90Tetromino);
		var rotated270Tetromino = tetris.rotateLine(field, rotated180Tetromino);
		var rotated360Tetromino = tetris.rotateLine(field, rotated270Tetromino);
		assert.deepEqual(lineTetromino, rotated360Tetromino);
	})
	
	it('Первый поворот lineTetromino успешный', function(){
		var lineTetromino = tetris.buildTetromino(`
			-----
			-----
			-XXXX
			-----
			-----
		`);
		
		var rotated90     = tetris.rotateLine(field, lineTetromino);
		var expected90    = tetris.buildTetromino(`
			-----
			--X--
			--X--
			--X--
			--X--
		`); 
		
		assert.deepEqual(rotated90, expected90);
	})
	
	it('После двух поворотов I тетрамино остается на том же месте', function(){
		var lineTetromino = tetris.buildTetromino(`
			-----
			XXXX-
			-----
			-----
			-----
		`);
		
		var rotated90 = tetris.rotateLine(field, lineTetromino);
		var rotated180 = tetris.rotateLine(field, rotated90);
		assert.deepEqual(lineTetromino, rotated180);
	})
	
	it("Первый поворот lineTetromino не успешный-не пустое поле 5x5", function(){
		var lineTetromino = tetris.buildTetromino(`
			-----
			-----
			-XXXX
			-----
			-----
		`);
		
		let field = tetris.buildField(`
			-----
			-----
			-----
			-----
			--X--
		`)
		let actual_90 =  tetris.rotateLine(field, lineTetromino);
		let expected_90 = tetris.buildTetromino(`
			-----
			-----
			-XXXX
			-----
			-----
		`);
		
		assert.deepEqual(actual_90, expected_90)
	})
	
	it('После двух поворотов вертикальное I тетрамино остается на том же месте', function(){
		var lineTetromino = tetris.buildTetromino(`
			-----
			--X--
			--X--
			--X--
			--X--
		`); 
		
		var rotated90 = tetris.rotateLine(field, lineTetromino);
		var rotated180 = tetris.rotateLine(field, rotated90);
		assert.deepEqual(lineTetromino, rotated180);
	})
	
	it('Горизонтальное I тетрамино слишком высоко для поворота', function(){
		var lineTetromino = tetris.buildTetromino(`
			-XXXX
			-----
			-----
			-----
			-----
		`);
		
		var attemptRotation = tetris.rotateLine(field, lineTetromino)
		assert.deepEqual(lineTetromino, attemptRotation);
	})
	
	it('Горизонтальное I тетрамино слишком низко для поворота y=3', function(){
		var lineTetromino = tetris.buildTetromino(`
			-----
			-----
			-----
			-XXXX
			-----
		`);
		
		var attemptRotation = tetris.rotateLine(field, lineTetromino)
		assert.deepEqual(lineTetromino, attemptRotation);
	})
	
	it('Горизонтальное I тетрамино слишком низко для поворота y=4', function(){
		var lineTetromino = tetris.buildTetromino(`
			-----
			-----
			-----
			-----
			-XXXX
		`);
		
		var attemptRotation = tetris.rotateLine(field, lineTetromino)
		assert.deepEqual(lineTetromino, attemptRotation);
	})
		
	it('Вертикальное I тетрамино слишком право для поворота x=3', function(){
		var lineTetromino = tetris.buildTetromino(`
			-----
			---X-
			---X-
			---X-
			---X-
		`);
		
		var attemptRotation = tetris.rotateLine(field, lineTetromino)
		assert.deepEqual(lineTetromino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком право для поворота x=4', function(){
		var lineTetromino = tetris.buildTetromino(`
			-----
			----X
			----X
			----X
			----X
		`);
		
		var attemptRotation = tetris.rotateLine(field, lineTetromino)
		assert.deepEqual(lineTetromino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком лево для поворота', function(){
		var lineTetromino = tetris.buildTetromino(`
			-----
			X----
			X----
			X----
			X----
		`);
		
		var attemptRotation = tetris.rotateLine(field, lineTetromino)
		assert.deepEqual(lineTetromino, attemptRotation);
	}) 
})
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

describe("L-tetromino rotation", function() {
	let emptyField = tetris.buildField(`
		----
		----
		----
		----
	`);
	
	it('After 4 turns on an empty emptyField, the L-tetromino should remain in the same place where it was;', function(){
		let tetromino = tetris.buildTetromino(`
			----
			--X-
			XXX-
			----
		`);
		let rotated90_L_Tetromino = tetris.rotateLine(emptyField, tetromino);
		let rotated180_L_Tetromino = tetris.rotateLine(emptyField, rotated90_L_Tetromino);
		let rotated270_L_Tetromino = tetris.rotateLine(emptyField, rotated180_L_Tetromino);
		let rotated360_L_Tetromino = tetris.rotateLine(emptyField, rotated270_L_Tetromino);
		asert.deepEqual(tetromino, rotated360_L_Tetromino);
	})
	
	it('The first rotation L-tetromino successful', function(){
		let tetromino = tetris.buildTetromino(`
			----
			--X-
			XXX-
			----
		`);
		let rotated90_L = tetris.rotateLine(emptyField, tetromino);
		let expected90_L = tetris.buildTetromino(`
			----
			XX--
			-X--
			-X--
		`);
		asert.deepEqual(rotated90_L, expected90_L);
	})
	
	it('The second rotation L-tetromino successful', function(){
		let tetromino = tetris.buildTetromino(`
			----
			XX--
			-X--
			-X--
		`);
		let rotated90_L = tetris.rotateLine(emptyField, tetromino);
		let expected90_L = tetris.buildTetromino(`
			----
			XXX-
			X---
			----
		`);
		asert.deepEqual(rotated180_L, expected180_L);
	})
	
	it('The third rotation L-tetromino successful', function(){
		let tetromino = tetris.buildTetromino(`
			----
			XXX-
			X---
			----
		`);
		let rotated90_L = tetris.rotateLine(emptyField, tetromino);
		let expected90_L = tetris.buildTetromino(`
			----
			X---
			X---
			XX--
		`);
		asert.deepEqual(rotated270_L, expected270_L);
	})
	
	it('L-tetromino too low to turn', function(){
		let tetromino = tetris.buildTetromino(`
			----
			----
			--X-
			XXX-
		`);
		let attemptRotation = tetris.rotateLine(emptyField, tetromino);
		asert.deepEqual(tetromino, attemptRotation);
	})
	
	it("L-tetromino can't turn 90 degrees", function(){
		let tetromino = tetris.buildTetromino(`
			----
			--X-
			XXX-
			----
		`);
		let notEmptyField = tetris.buildField(`
			----
			-X--
			----
			----
		`)
		let actual90_L = tetris.rotateLine(notEmptyField, tetromino);
		let expected90_L = tetris.buildTetromino(`
			----
			--X-
			XXX-
			----
		`);
		asert.deepEqual(actual90_L, expected90_L);
	})
	
	it("L-tetromino can't turn 180 degrees", function(){
		let tetromino = tetris.buildTetromino(`
			----
			XX--
			-X--
			-X--
		`);
		let notEmptyField = tetris.buildField(`
			----
			----
			X---
			----
		`)
		let actual90_L = tetris.rotateLine(notEmptyField, tetromino);
		let actual180_L = tetris.rotateLine(notEmptyField, actual90_L);
		let expected180_L = tetris.buildTetromino(`
			----
			XX--
			-X--
			-X--
		`);
		asert.deepEqual(actual180_L, expected180_L);
	})
	
})
