module.exports = {
	
	test: function(x,y){
		return x*y;
	},
	//тетрамино массив из 4 координат [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}]
	// field это массив двухмерный булин значений, если true в ней есть блок, false блока нет
	rotateLine: function(field, tetramino){
		function rotateLine(tetramino){
			let arrCoordinates_X  = [];
			let arrCoordinates_Y  = [];
			for(let i of tetramino){
				arrCoordinates_X.push(i.x);
				arrCoordinates_Y.push(i.y);
			}
			if(arrCoordinates_Y[0] == arrCoordinates_Y[1]&& arrCoordinates_Y[2] == arrCoordinates_Y[3]){
				let a = -1;
				for(let i of tetramino){
					i.x = arrCoordinates_X[1];
					i.y = arrCoordinates_Y[0] + a;
					a++;
				}
				return tetramino;
			}
			
			if(arrCoordinates_X[0] == arrCoordinates_X[1]&& arrCoordinates_X[2] == arrCoordinates_X[3]){
				let a = -1;
				for(let i of tetramino){
					i.y = arrCoordinates_Y[1];
					i.x = arrCoordinates_X[0] + a;
					a++;
				}
				return tetramino;
			}		
		}
		var tetraminoRotated_90 = rotateLine(rotateLine(tetramino))
		rotateLine(tetraminoRotated_90)
		return tetramino
	}
}