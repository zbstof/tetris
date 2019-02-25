var assert = require('chai').assert;
var tetris = require('../tetris')
describe("I-tetramino rotation", function() {
	var field = [
		    //x: 0   x: 1   x: 2   x: 3
		    [false, false, false, false], // y: 0
		    [false, false, false, false], // y: 1
		    [false, false, false, false], // y: 2
		    [false, false, false, false]  // y: 3
	];
	it('После 4 поворотов на пустом поле тетрамино должно остаться на этом же месте где и было;', function(){
		var lineTetramino = [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}];
		var rotated90Tetramino = tetris.rotateLine(field, lineTetramino);
		var rotated180Tetramino = tetris.rotateLine(field, rotated90Tetramino);
		var rotated270Tetramino = tetris.rotateLine(field, rotated180Tetramino);
		var rotated360Tetramino = tetris.rotateLine(field, rotated270Tetramino);
		assert.equal(lineTetramino, rotated360Tetramino);
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
		assert.equal(rotated90, expected90);
	})

	it('После двух поворотов I тетрамино остается на том же месте', function(){
		var lineTetramino = [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}];
		var rotated90 = tetris.rotateLine(field, lineTetramino);
		var rotated180 = tetris.rotateLine(field, rotated90Tetramino);
		assert.equal(lineTetramino, rotated180);
	})
	
	it('После двух поворотов вертикальное I тетрамино остается на том же месте', function(){
		var lineTetramino = [
			{x: 1, y: 0}, 
			{x: 1, y: 1}, 
			{x: 1, y: 2}, 
			{x: 1, y: 3}
		];
		var rotated90 = tetris.rotateLine(field, lineTetramino);
		var rotated180 = tetris.rotateLine(field, rotated90Tetramino);
		assert.equal(lineTetramino, rotated180);
	})
	
	it('Горизонтальное I тетрамино слишком высоко для поворота', function(){
		var lineTetramino = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}];
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.equal(lineTetramino, attemptRotation);
	})
	
	it('Горизонтальное I тетрамино слишком низко для поворота y=2', function(){
		var lineTetramino = [{x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}];
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.equal(lineTetramino, attemptRotation);
	})
	
	it('Горизонтальное I тетрамино слишком низко для поворота y=3', function(){
		var lineTetramino = [{x: 0, y: 3}, {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}];
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.equal(lineTetramino, attemptRotation);
	})
	
	
	it('Вертикальное I тетрамино слишком право для поворота x=2', function(){
		var lineTetramino = [
			{x: 2, y: 0}, 
			{x: 2, y: 1}, 
			{x: 2, y: 2}, 
			{x: 2, y: 3}
		]; 
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.equal(lineTetramino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком право для поворота x=3', function(){
		var lineTetramino = [
			{x: 3, y: 0}, 
			{x: 3, y: 1}, 
			{x: 3, y: 2}, 
			{x: 3, y: 3}
		]; 
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.equal(lineTetramino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком лево для поворота', function(){
		var lineTetramino = [
			{x: 0, y: 0}, 
			{x: 0, y: 1}, 
			{x: 0, y: 2}, 
			{x: 0, y: 3}
		];
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.equal(lineTetramino, attemptRotation);
	})	
})

describe("I-tetramino rotation", function() {
	var field = [
		    //x: 0   x: 1   x: 2   x: 3   x: 4
		    [false, false, false, false, false], // y: 0
		    [false, false, false, false, false], // y: 1
		    [false, false, false, false, false], // y: 2
		    [false, false, false, false, false], // y: 3
		    [false, false, false, false, false]  // y: 4
	];
	it('После 4 поворотов на пустом поле тетрамино должно остаться на этом же месте где и было;', function(){
		var lineTetramino = [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}];
		var rotated90Tetramino = tetris.rotateLine(field, lineTetramino);
		var rotated180Tetramino = tetris.rotateLine(field, rotated90Tetramino);
		var rotated270Tetramino = tetris.rotateLine(field, rotated180Tetramino);
		var rotated360Tetramino = tetris.rotateLine(field, rotated270Tetramino);
		assert.equal(lineTetramino, rotated360Tetramino);
	})
	
	it('Первый поворот lineTetramino успешный', function(){
		var lineTetramino = [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}];
		var rotated90 = tetris.rotateLine(field, lineTetramino);
		var expected90    = [
			{x: 2, y: 1}, 
			{x: 2, y: 2}, 
			{x: 2, y: 3}, 
			{x: 2, y: 4}
		];
		assert.equal(rotated90, expected90);
	})

	it('После двух поворотов I тетрамино остается на том же месте', function(){
		var lineTetramino = [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}];
		var rotated90 = tetris.rotateLine(field, lineTetramino);
		var rotated180 = tetris.rotateLine(field, rotated90Tetramino);
		assert.equal(lineTetramino, rotated180);
	})
	
	it('После двух поворотов вертикальное I тетрамино остается на том же месте', function(){
		var lineTetramino = [
			{x: 2, y: 1}, 
			{x: 2, y: 2}, 
			{x: 2, y: 3}, 
			{x: 2, y: 4}
		];
		var rotated90 = tetris.rotateLine(field, lineTetramino);
		var rotated180 = tetris.rotateLine(field, rotated90Tetramino);
		assert.equal(lineTetramino, rotated180);
	})
	
	it('Горизонтальное I тетрамино слишком высоко для поворота', function(){
		var lineTetramino = [{x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}];
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.equal(lineTetramino, attemptRotation);
	})
	
	it('Горизонтальное I тетрамино слишком низко для поворота y=3', function(){
		var lineTetramino = [{x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3}];
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.equal(lineTetramino, attemptRotation);
	})
	
	it('Горизонтальное I тетрамино слишком низко для поворота y=4', function(){
		var lineTetramino = [{x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4}];
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.equal(lineTetramino, attemptRotation);
	})
	
	
	it('Вертикальное I тетрамино слишком право для поворота x=3', function(){
		var lineTetramino = [
			{x: 3, y: 1}, 
			{x: 3, y: 2}, 
			{x: 3, y: 3}, 
			{x: 3, y: 4}
		]; 
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.equal(lineTetramino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком право для поворота x=4', function(){
		var lineTetramino = [
			{x: 4, y: 1}, 
			{x: 4, y: 2}, 
			{x: 4, y: 3}, 
			{x: 4, y: 4}
		]; 
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.equal(lineTetramino, attemptRotation);
	})
	
	it('Вертикальное I тетрамино слишком лево для поворота', function(){
		var lineTetramino = [
			{x: 0, y: 1}, 
			{x: 0, y: 2}, 
			{x: 0, y: 3}, 
			{x: 0, y: 4}
		];
		var attemptRotation = tetris.rotateLine(field, lineTetramino)
		assert.equal(lineTetramino, attemptRotation);
	})
})