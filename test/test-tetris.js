var assert = require('chai').assert;
var tetris = require('../tetris')
describe("I-tetramino rotation 4x4", function() {
	var field = tetris.buildField(`
		----
		----
		----
		----
	`)
	it('После 4 поворотов на пустом поле тетрамино должно остаться на этом же месте где и было;', function(){
		var lineTetramino = tetris.buildTetramino(`
			----
			XXXX
			----
			----
		`);
		var rotated90Tetramino = tetris.rotateLine(field, lineTetramino);
		
		var rotated180Tetramino = tetris.rotateLine(field, rotated90Tetramino);
		
		
		var rotated270Tetramino = tetris.rotateLine(field, rotated180Tetramino);
		
		
		var rotated360Tetramino = tetris.rotateLine(field, rotated270Tetramino);
		
		assert.deepEqual(lineTetramino, rotated360Tetramino);
		
	})
	
	it('Первый поворот lineTetramino успешный', function(){
		var lineTetramino = tetris.buildTetramino(`
			----
			XXXX
			----
			----
		`);
		var rotated90  = tetris.rotateLine(field, lineTetramino);
		var expected90 = tetris.buildTetramino(`
			-X--
			-X--
			-X--
			-X--
		`);
		assert.deepEqual(rotated90, expected90);
	})
	
	it("Первый поворот lineTetramino не успешный-не пустое поле", function(){
		var lineTetramino = tetris.buildTetramino(`
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
		let actual_90 =  tetris.rotateLine(field, lineTetramino);
		let expected_90 = tetris.buildTetramino(`
			----
			XXXX
			----
			----
		`);
		assert.deepEqual(actual_90, expected_90)
	})

	it('После двух поворотов I тетрамино остается на том же месте', function(){
		var lineTetramino = tetris.buildTetramino(`
			----
			XXXX
			----
			----
		`);
		var rotated90 = tetris.rotateLine(field, lineTetramino)
		var rotated180 = tetris.rotateLine(field, rotated90);
		
		
		assert.deepEqual(lineTetramino, rotated180);
	})
	
	it('После двух поворотов вертикальное I тетрамино остается на том же месте', function(){
		var lineTetramino = tetris.buildTetramino(`
			-X--
			-X--
			-X--
			-X--
		`);
		
		var rotated90 = tetris.rotateLine(field, lineTetramino)
		var rotated180 = tetris.rotateLine(field, rotated90);
		assert.deepEqual(lineTetramino, rotated180);
	})
	
	it('Горизонтальное I тетрамино слишком высоко для поворота', function(){
		var lineTetramino = tetris.buildTetramino(`
			XXXX
			----
			----
			----
		`);
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Горизонтальное I тетрамино слишком низко для поворота y=2', function(){
		var lineTetramino = tetris.buildTetramino(`
			----
			----
			XXXX
			----
		`);
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Горизонтальное I тетрамино слишком низко для поворота y=3', function(){
		var lineTetramino = tetris.buildTetramino(`
			----
			----
			----
			XXXX
		`);
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком право для поворота x=2', function(){
		var lineTetramino = tetris.buildTetramino(`
			--X-
			--X-
			--X-
			--X-
		`);
		
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком право для поворота x=3', function(){
		var lineTetramino = tetris.buildTetramino(`
			---X
			---X
			---X
			---X
		`);
		
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком лево для поворота', function(){
		var lineTetramino = tetris.buildTetramino(`
			X---
			X---
			X---
			X---
		`)
		
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
})

describe("I-tetramino rotation 5x5", function() {
	var field = tetris.buildField(`
		-----
		-----
		-----
		-----
		-----
	`)
	it('После 4 поворотов на пустом поле тетрамино должно остаться на этом же месте где и было;', function(){
		var lineTetramino = tetris.buildTetramino(`
			-----
			-----
			-XXXX
			-----
			-----
		`);
		
		var rotated90Tetramino = tetris.rotateLine(field, lineTetramino);
		var rotated180Tetramino = tetris.rotateLine(field, rotated90Tetramino);
		var rotated270Tetramino = tetris.rotateLine(field, rotated180Tetramino);
		var rotated360Tetramino = tetris.rotateLine(field, rotated270Tetramino);
		assert.deepEqual(lineTetramino, rotated360Tetramino);
	})
	
	it('Первый поворот lineTetramino успешный', function(){
		var lineTetramino = tetris.buildTetramino(`
			-----
			-----
			-XXXX
			-----
		`);
		
		var rotated90     = tetris.rotateLine(field, lineTetramino);
		var expected90    = tetris.buildTetramino(`
			-----
			--X--
			--X--
			--X--
			--X--
		`); 
		
		assert.deepEqual(rotated90, expected90);
	})
	
	it('После двух поворотов I тетрамино остается на том же месте', function(){
		var lineTetramino = tetris.buildTetramino(`
			-----
			XXXX-
			-----
			-----
			-----
		`);
		
		var rotated90 = tetris.rotateLine(field, lineTetramino);
		var rotated180 = tetris.rotateLine(field, rotated90);
		assert.deepEqual(lineTetramino, rotated180);
	})
	
	it("Первый поворот lineTetramino не успешный-не пустое поле 5x5", function(){
		var lineTetramino = tetris.buildTetramino(`
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
		let actual_90 =  tetris.rotateLine(field, lineTetramino);
		let expected_90 = tetris.buildTetramino(`
			-----
			-----
			-XXXX
			-----
			-----
		`);
		
		assert.deepEqual(actual_90, expected_90)
	})
	
	it('После двух поворотов вертикальное I тетрамино остается на том же месте', function(){
		var lineTetramino = tetris.buildTetramino(`
			-----
			--X--
			--X--
			--X--
			--X--
		`); 
		
		var rotated90 = tetris.rotateLine(field, lineTetramino);
		var rotated180 = tetris.rotateLine(field, rotated90);
		assert.deepEqual(lineTetramino, rotated180);
	})
	
	it('Горизонтальное I тетрамино слишком высоко для поворота', function(){
		var lineTetramino = tetris.buildTetramino(`
			-XXXX
			-----
			-----
			-----
			-----
		`);
		
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Горизонтальное I тетрамино слишком низко для поворота y=3', function(){
		var lineTetramino = tetris.buildTetramino(`
			-----
			-----
			-----
			-XXXX
			-----
		`);
		
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Горизонтальное I тетрамино слишком низко для поворота y=4', function(){
		var lineTetramino = tetris.buildTetramino(`
			-----
			-----
			-----
			-----
			-XXXX
		`);
		
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
		
	it('Вертикальное I тетрамино слишком право для поворота x=3', function(){
		var lineTetramino = tetris.buildTetramino(`
			-----
			---X-
			---X-
			---X-
			---X-
		`);
		
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком право для поворота x=4', function(){
		var lineTetramino = tetris.buildTetramino(`
			-----
			----X
			----X
			----X
			----X
		`);
		
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком лево для поворота', function(){
		var lineTetramino = tetris.buildTetramino(`
			-----
			X----
			X----
			X----
			X----
		`);
		
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
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

describe("generation tetramino, the size tetramino 4x4", function(){
	it("options vertical tetramino x:2 and y:0-3", function(){
		let stringField = `
			--X-
			--X-
			--X-
			--X-
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino =  [
		   {x: 2, y: 0}, 
		   {x: 2, y: 1}, 
		   {x: 2, y: 2}, 
		   {x: 2, y: 3}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("options horizontal tetramino x:0-3 and y:1", function(){
		let stringField = `
			----
			XXXX
			----
			----
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino = [
			{x: 0, y: 1},
			{x: 1, y: 1},
			{x: 2, y: 1},
			{x: 3, y: 1}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("options vertical tetramino x:3 and y:0-3", function(){
		let stringField = `
			---X
			---X
			---X
			---X
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino =  [
		   {x: 3, y: 0}, 
		   {x: 3, y: 1}, 
		   {x: 3, y: 2}, 
		   {x: 3, y: 3}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("options horizontal tetramino x:0-3 and y:0", function(){
		let stringField = `
			XXXX
			----
			----
			----
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino = [
			{x: 0, y: 0},
			{x: 1, y: 0},
			{x: 2, y: 0},
			{x: 3, y: 0}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
})

describe("generation tetramino, the size tetramino 5x5", function(){
	it("invalid length tetramino is an error", function(){
		let stringField = `
			XXXXX
			-----
			-----
			-----
		`
		assert.throws(function(){
			tetris.buildTetramino(stringField)
		})
	})
	
	it("options vertical tetramino x:2 and y:0-4", function(){
		let stringField = `
			--X-
			--X-
			--X-
			--X-
			--X-
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino =  [
		   {x: 2, y: 0}, 
		   {x: 2, y: 1}, 
		   {x: 2, y: 2}, 
		   {x: 2, y: 3},
		   {x: 2, y: 4}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("options horizontal tetramino x:0-4 and y:1", function(){
		let stringField = `
			-----
			XXXXX
			-----
			-----
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino = [
			{x: 0, y: 1},
			{x: 1, y: 1},
			{x: 2, y: 1},
			{x: 3, y: 1},
			{x: 4, y: 1}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("options vertical tetramino x:3 and y:0-4", function(){
		let stringField = `
			---X
			---X
			---X
			---X
			---X
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino =  [
		   {x: 3, y: 0}, 
		   {x: 3, y: 1}, 
		   {x: 3, y: 2}, 
		   {x: 3, y: 3},
		   {x: 3, y: 4}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("options horizontal tetramino x:0-4 and y:0", function(){
		let stringField = `
			XXXXX
			-----
			-----
			-----
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino = [
			{x: 0, y: 0},
			{x: 1, y: 0},
			{x: 2, y: 0},
			{x: 3, y: 0},
			{x: 4, y: 0}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
})

describe("generation tetramino, the size tetramino 3x3", function(){
	it("invalid length tetramino is an error", function(){
		let stringField = `
			---
			-X-
			-X-
			-X-
			---
		`
		assert.throws(function(){
			tetris.buildTetramino(stringField)
		})
	})
	
	it("options vertical tetramino x:2 and y:0-2", function(){
		let stringField = `
			--X
			--X
			--X

		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino =  [
		   {x: 2, y: 0}, 
		   {x: 2, y: 1}, 
		   {x: 2, y: 2}
		   
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("options horizontal tetramino x:0-2 and y:1", function(){
		let stringField = `
			---
			XXX
			---
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino = [
			{x: 0, y: 1},
			{x: 1, y: 1},
			{x: 2, y: 1}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("options vertical tetramino x:3 and y:0-2", function(){
		let stringField = `
			---X
			---X
			---X
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino =  [
		   {x: 3, y: 0}, 
		   {x: 3, y: 1}, 
		   {x: 3, y: 2}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("options horizontal tetramino x:0-2 and y:0", function(){
		let stringField = `
			XXX
			---
			---
			---
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino = [
			{x: 0, y: 0},
			{x: 1, y: 0},
			{x: 2, y: 0}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
})

describe("generation T tetramino", function(){
	it("turned up T tetramino x:0-1 and y:1-3", function(){
		let stringField = `
			--X--
			-XXX-
			-----

		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino =  [
		   {x: 0, y: 2}, 
		   {x: 1, y: 1}, 
		   {x: 1, y: 2},
		   {x: 1, y: 3}
		   
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("turned up T tetramino in the middle of the field x:1-2 and y:1-3", function(){
		let stringField = `
			-----
			--X--
			-XXX-
			-----

		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino =  [
		   {x: 1, y: 2}, 
		   {x: 2, y: 1}, 
		   {x: 2, y: 2},
		   {x: 2, y: 3}
		   
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("turned up T tetramino x:1-2 and y:1-3", function(){
		let stringField = `
			-----
			--X--
			-XXX-
			
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino = [
			{x: 1, y: 2}, 
		    {x: 2, y: 1}, 
		    {x: 2, y: 2},
		    {x: 2, y: 3}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("turned left T tetramino x:0-2 and y:1-2", function(){
		let stringField = `
			--X--
			-XX--
			--X--
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino =  [
		   {x: 0, y: 2}, 
		   {x: 1, y: 1}, 
		   {x: 1, y: 2},
		   {x: 2, y: 2}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("turned left T tetramino in the middle of the field x:1-3 and y:1-2", function(){
		let stringField = `
			-----
			--X--
			-XX--
			--X--
			-----
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino =  [
		   {x: 1, y: 2}, 
		   {x: 2, y: 1}, 
		   {x: 2, y: 2},
		   {x: 3, y: 2}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("turned down T tetramino x:1-2 and y:0", function(){
		let stringField = `
			-----
			-XXX-
			--X--
			
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino = [
			{x: 1, y: 1},
			{x: 1, y: 2},
			{x: 1, y: 3},
			{x: 2, y: 2}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("turned down T tetramino in the middle of the field x:1-2 and y:0", function(){
		let stringField = `
			-----
			-XXX-
			--X--
			-----
			
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino = [
			{x: 1, y: 1},
			{x: 1, y: 2},
			{x: 1, y: 3},
			{x: 2, y: 2}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("turned right T tetramino x:0-2 and y:0", function(){
		let stringField = `
			--X--
			--XX-
			--X--
			
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino = [
			{x: 0, y: 2},
			{x: 1, y: 2},
			{x: 1, y: 3},
			{x: 2, y: 2}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
	it("turned right T tetramino in the middle of the field x:1-3 and y:0", function(){
		let stringField = `
			-----
			--X--
			--XX-
			--X--
			-----
			
		`
		let transformation = tetris.buildTetramino(stringField)
		let bodyTetramino = [
			{x: 1, y: 2},
			{x: 2, y: 2},
			{x: 2, y: 3},
			{x: 3, y: 2}
		];
		assert.deepEqual(transformation, bodyTetramino);
	})
	
})

