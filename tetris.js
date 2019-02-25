module.exports = {
	
	test: function(x,y){
		return x*y;
	},
	//тетрамино массив из 4 координат [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}]
	// field это массив двухмерный булин значений, если true в ней есть блок, false блока нет
	rotateLine: function(field, tetramino){
		
		var tetraminoLine    = function(field, tetramino){
			return tetramino = [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}];
		}
		var tetraminoLine90  = function(field, tetraminoLine){
			return tetramino = [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}];
		}
		var tetraminoLine180 = function(field, tetraminoLine90){
			return tetramino = [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}];
		}
		var tetraminoLine270 = function(field, tetraminoLine270){
			return tetramino = [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}];
		}
		var lineTetramino360 = function(field, lineTetramino360){
			return tetramino = [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}];
		}
		
		return lineTetramino360
	} 
}