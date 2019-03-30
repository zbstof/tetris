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
		var lineTetramino = [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}];
		var rotated90Tetramino = tetris.rotateLine(field, lineTetramino);
		newField = [
		    //x: 0   x: 1   x: 2   x: 3
		    [false, false, false, false], // y: 0
		    [false, false, false, false], // y: 1
		    [false, false, false, false], // y: 2
		    [false, false, false, false]  // y: 3
		];
		//assert.deepEqual(newField, field);
		var rotated180Tetramino = tetris.rotateLine(field, rotated90Tetramino);
		
		//assert.deepEqual(newField, field);
		var rotated270Tetramino = tetris.rotateLine(field, rotated180Tetramino);
		
		//assert.deepEqual(newField, field);
		var rotated360Tetramino = tetris.rotateLine(field, rotated270Tetramino);
		
		assert.deepEqual(lineTetramino, rotated360Tetramino);
		//assert.deepEqual(newField, field);
	})
	
	it('Первый поворот lineTetramino успешный', function(){
		var lineTetramino = [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}];
		var rotated90 = tetris.rotateLine(field, lineTetramino);
		var expected90    = [
			{x: 1, y: 0}, 
			{x: 1, y: 1}, 
			{x: 1, y: 2}, 
			{x: 1, y: 3}
		];
		assert.deepEqual(rotated90, expected90);
	})
	
	it("Первый поворот lineTetramino не успешный-не пустое поле", function(){
		var lineTetramino = [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}];
		let field = tetris.buildField(`
			----
			----
			----
			-X--
		`)
		let actual_90 =  tetris.rotateLine(field, lineTetramino);
		let expected_90 = [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}];
		assert.deepEqual(actual_90, expected_90)
	})

	it('После двух поворотов I тетрамино остается на том же месте', function(){
		var lineTetramino = [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}];
		var rotated90 = tetris.rotateLine(field, lineTetramino)
		var rotated180 = tetris.rotateLine(field, rotated90);
		
		
		assert.deepEqual(lineTetramino, rotated180);
	})
	
	it('После двух поворотов вертикальное I тетрамино остается на том же месте', function(){
		var lineTetramino = [
			{x: 1, y: 0}, 
			{x: 1, y: 1}, 
			{x: 1, y: 2}, 
			{x: 1, y: 3}
		];
		
		var rotated90 = tetris.rotateLine(field, lineTetramino)
		var rotated180 = tetris.rotateLine(field, rotated90);
		assert.deepEqual(lineTetramino, rotated180);
	})
	
	it('Горизонтальное I тетрамино слишком высоко для поворота', function(){
		var lineTetramino = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}];
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Горизонтальное I тетрамино слишком низко для поворота y=2', function(){
		var lineTetramino = [{x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}];
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Горизонтальное I тетрамино слишком низко для поворота y=3', function(){
		var lineTetramino = [{x: 0, y: 3}, {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}];
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	
	it('Вертикальное I тетрамино слишком право для поворота x=2', function(){
		var lineTetramino = [
			{x: 2, y: 0}, 
			{x: 2, y: 1}, 
			{x: 2, y: 2}, 
			{x: 2, y: 3}
		]; 
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком право для поворота x=3', function(){
		var lineTetramino = [
			{x: 3, y: 0}, 
			{x: 3, y: 1}, 
			{x: 3, y: 2}, 
			{x: 3, y: 3}
		]; 
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком лево для поворота', function(){
		var lineTetramino = [
			{x: 0, y: 0}, 
			{x: 0, y: 1}, 
			{x: 0, y: 2}, 
			{x: 0, y: 3}
		];
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
		var lineTetramino = [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}];
		var rotated90Tetramino = tetris.rotateLine(field, lineTetramino);
		var rotated180Tetramino = tetris.rotateLine(field, rotated90Tetramino);
		var rotated270Tetramino = tetris.rotateLine(field, rotated180Tetramino);
		var rotated360Tetramino = tetris.rotateLine(field, rotated270Tetramino);
		assert.deepEqual(lineTetramino, rotated360Tetramino);
	})
	
	it('Первый поворот lineTetramino успешный', function(){
		var lineTetramino = [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}];
		var rotated90     = tetris.rotateLine(field, lineTetramino);
		var expected90    = [
			{x: 2, y: 1}, 
			{x: 2, y: 2}, 
			{x: 2, y: 3}, 
			{x: 2, y: 4}
		];
		assert.deepEqual(rotated90, expected90);
	})
	
	it('После двух поворотов I тетрамино остается на том же месте', function(){
		var lineTetramino = [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}];
		var rotated90 = tetris.rotateLine(field, lineTetramino);
		var rotated180 = tetris.rotateLine(field, rotated90);
		assert.deepEqual(lineTetramino, rotated180);
	})
	
	it("Первый поворот lineTetramino не успешный-не пустое поле 5x5", function(){
		var lineTetramino = [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}];
		let field = tetris.buildField(`
			-----
			-----
			-----
			-----
			--X--
		`)
		let actual_90 =  tetris.rotateLine(field, lineTetramino);
		let expected_90 = [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}];
		assert.deepEqual(actual_90, expected_90)
	})
	
	it('После двух поворотов вертикальное I тетрамино остается на том же месте', function(){
		var lineTetramino = [
			{x: 2, y: 1}, 
			{x: 2, y: 2}, 
			{x: 2, y: 3}, 
			{x: 2, y: 4}
		];
		var rotated90 = tetris.rotateLine(field, lineTetramino);
		var rotated180 = tetris.rotateLine(field, rotated90);
		assert.deepEqual(lineTetramino, rotated180);
	})
	
	it('Горизонтальное I тетрамино слишком высоко для поворота', function(){
		var lineTetramino = [{x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}];
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Горизонтальное I тетрамино слишком низко для поворота y=3', function(){
		var lineTetramino = [{x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3}];
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Горизонтальное I тетрамино слишком низко для поворота y=4', function(){
		var lineTetramino = [{x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4}];
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
		
	it('Вертикальное I тетрамино слишком право для поворота x=3', function(){
		var lineTetramino = [
			{x: 3, y: 1}, 
			{x: 3, y: 2}, 
			{x: 3, y: 3}, 
			{x: 3, y: 4}
		]; 
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком право для поворота x=4', function(){
		var lineTetramino = [
			{x: 4, y: 1}, 
			{x: 4, y: 2}, 
			{x: 4, y: 3}, 
			{x: 4, y: 4}
		]; 
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.deepEqual(lineTetramino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком лево для поворота', function(){
		var lineTetramino = [
			{x: 0, y: 1}, 
			{x: 0, y: 2}, 
			{x: 0, y: 3}, 
			{x: 0, y: 4}
		];
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
	
})