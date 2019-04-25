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

describe("L-tetromino rotation 4x4", function() {
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
		assert.deepEqual(tetromino, rotated360_L_Tetromino);
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
		assert.deepEqual(rotated90_L, expected90_L);
	})
	
	it('The second rotation L-tetromino successful', function(){
		let tetromino = tetris.buildTetromino(`
			----
			XX--
			-X--
			-X--
		`);
		let rotated180_L = tetris.rotateLine(emptyField, tetromino);
		let expected180_L = tetris.buildTetromino(`
			----
			XXX-
			X---
			----
		`);
		assert.deepEqual(rotated180_L, expected180_L);
	})
	
	it('The third rotation L-tetromino successful', function(){
		let tetromino = tetris.buildTetromino(`
			----
			XXX-
			X---
			----
		`);
		let rotated270_L = tetris.rotateLine(emptyField, tetromino);
		let expected270_L = tetris.buildTetromino(`
			----
			X---
			X---
			XX--
		`);
		assert.deepEqual(rotated270_L, expected270_L);
	})
	
	it('L-tetromino too low to turn', function(){
		let tetromino = tetris.buildTetromino(`
			----
			----
			XXX-
			X---
		`);
		let attemptRotation = tetris.rotateLine(emptyField, tetromino);
		assert.deepEqual(tetromino, attemptRotation);
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
		assert.deepEqual(actual90_L, expected90_L);
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
		assert.deepEqual(actual180_L, expected180_L);
	})
	
	it("L-tetromino can't turn", function(){
		let tetromino = tetris.buildTetromino(`
			----
			XX--
			-X--
			-X--
		`);
		let notEmptyField = tetris.buildField(`
			----
			X---
			----
			----
		`)
		
		assert.throws(function(){
			tetris.buildField(stringField)
		})
	})
	
	it("L-tetromino can't turn second test", function(){
		let tetromino = tetris.buildTetromino(`
			----
			--X-
			XXX-
			----
		`);
		let notEmptyField = tetris.buildField(`
			----
			----
			--X-
			----
		`)
		
		assert.throws(function(){
			tetris.buildField(stringField)
		})
	})
	
})

describe("L-tetromino rotation 3x3", function() {
	let emptyField = tetris.buildField(`
		---
		---
		---
	`);
	
	it('After 4 turns on an empty emptyField, the L-tetromino should remain in the same place where it was;', function(){
		let tetromino = tetris.buildTetromino(`
			
			--X
			XXX
			---
		`);
		let rotated90_L_Tetromino = tetris.rotateLine(emptyField, tetromino);
		let rotated180_L_Tetromino = tetris.rotateLine(emptyField, rotated90_L_Tetromino);
		let rotated270_L_Tetromino = tetris.rotateLine(emptyField, rotated180_L_Tetromino);
		let rotated360_L_Tetromino = tetris.rotateLine(emptyField, rotated270_L_Tetromino);
		assert.deepEqual(tetromino, rotated360_L_Tetromino);
	})
	
	it('The first rotation L-tetromino successful', function(){
		let tetromino = tetris.buildTetromino(`
			--X
			XXX
			---
		`);
		let rotated90_L = tetris.rotateLine(emptyField, tetromino);
		let expected90_L = tetris.buildTetromino(`
			XX-
			-X-
			-X-
		`);
		assert.deepEqual(rotated90_L, expected90_L);
	})
	
	it('The second rotation L-tetromino successful', function(){
		let tetromino = tetris.buildTetromino(`			
			XX-
			-X-
			-X-
		`);
		let rotated180_L = tetris.rotateLine(emptyField, tetromino);
		let expected180_L = tetris.buildTetromino(`
			XXX-
			X---
			----
		`);
		assert.deepEqual(rotated180_L, expected180_L);
	})
	
	it('The third rotation L-tetromino successful', function(){
		let tetromino = tetris.buildTetromino(`
			XXX-
			X---
			----
		`);
		let rotated270_L = tetris.rotateLine(emptyField, tetromino);
		let expected270_L = tetris.buildTetromino(`
			X---
			X---
			XX--
		`);
		assert.deepEqual(rotated270_L, expected270_L);
	})
	
	it('L-tetromino too low to turn', function(){
		let tetromino = tetris.buildTetromino(`
			---
			XXX
			X--
		`);
		let attemptRotation = tetris.rotateLine(emptyField, tetromino);
		assert.deepEqual(tetromino, attemptRotation);
	})
	
	it("L-tetromino can't turn 90 degrees", function(){
		let tetromino = tetris.buildTetromino(`
			--X
			XXX
			---
		`);
		let notEmptyField = tetris.buildField(`
			-X-
			---
			---
		`)
		let actual90_L = tetris.rotateLine(notEmptyField, tetromino);
		let expected90_L = tetris.buildTetromino(`
			--X
			XXX
			---
		`);
		assert.deepEqual(actual90_L, expected90_L);
	})
	
	it("L-tetromino can't turn 180 degrees", function(){
		let tetromino = tetris.buildTetromino(`
			XX-
			-X-
			-X-
		`);
		let notEmptyField = tetris.buildField(`
			---
			X--
			---
		`)
		let actual90_L = tetris.rotateLine(notEmptyField, tetromino);
		let actual180_L = tetris.rotateLine(notEmptyField, actual90_L);
		let expected180_L = tetris.buildTetromino(`
			XX-
			-X-
			-X-
		`);
		assert.deepEqual(actual180_L, expected180_L);
	})
	
	it("L-tetromino can't turn", function(){
		let tetromino = tetris.buildTetromino(`
			XX-
			-X-
			-X-
		`);
		let notEmptyField = tetris.buildField(`
			X--
			---
			---
		`)
		
		assert.throws(function(){
			tetris.buildField(stringField)
		})
	})
	
	it("L-tetromino can't turn second test", function(){
		let tetromino = tetris.buildTetromino(`
			--X
			XXX
			---
		`);
		let notEmptyField = tetris.buildField(`
			---
			--X
			---
		`)
		
		assert.throws(function(){
			tetris.buildField(stringField)
		})
	})
	
})

describe("Rotate element on axis O", function() {
	if("Rotation 360 degrees", function(){
		let turningPoint = {x:1, y:1}
		let elemen = {x:1, y:2}
		
		let firstRotation = tetris.rotateElement(turningPoint,elemen)
		let secondRotation = tetris.rotateElement(turningPoint,firstRotation)
		let thirdRotation = tetris.rotateElement(turningPoint,secondRotation)
		let fourthRotation = tetris.rotateElement(turningPoint,fourthRotation)
		let fifthRotation = tetris.rotateElement(turningPoint,fifthRotation)
		let sixthRotation = tetris.rotateElement(turningPoint, sixthRotation)
		let seventhRotation = tetris.rotateElement(turningPoint, seventhRotation)
		let eighthRotation = tetris.rotateElement(turningPoint, eighthRotation)
		let ninthRotation = tetris.rotateElement(turningPoint, ninthRotation)
		assert.deepEqual(elemen, ninthRotation)
	})
	
	
}