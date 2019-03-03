module.exports = {
	
	test: function(x,y){
		return x*y;
	},
	//тетрамино массив из 4 координат [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}]
	// field это массив двухмерный булин значений, если true в ней есть блок, false блока нет
	rotateLine: function(field, tetramino){
		
		function horizontalPosition_I(tetramino){
				let arrPosition_Y = [];
				for(let i of tetramino){
					arrPosition_Y.push(i.y)
				}
				
				let arrPosition_X = [];
				for(let i of tetramino){
					arrPosition_X.push(i.x)
				}
				
				if(arrPosition_Y[0] == arrPosition_Y[1] && arrPosition_Y[2] == arrPosition_Y[3]){
					for(let i of tetramino){
						let oldPosition_X = i.x
						i.x = i.y
						i.y = oldPosition_X
					}
					return tetramino
				}
				
				if(arrPosition_X[0] == arrPosition_X[1] && arrPosition_X[2] == arrPosition_X[3]){
					for(let i of tetramino){
						let oldPosition_Y = i.y
						i.y = i.x
						i.x = oldPosition_Y
					}
					return tetramino
				}
				

				
			}
			
		horizontalPosition_I(tetramino)
		// Тут я определя rotated90Tetramino
		var rotated90Tetramino = horizontalPosition_I(horizontalPosition_I(tetramino))
		
		
		return horizontalPosition_I(rotated90Tetramino)
		
		/* function horizontalPosition_I(tetramino){
				for(let i of tetramino){
					let oldPosition_X = i.x
					i.x = i.y
					i.y = oldPosition_X
				}
				return tetramino
			}
						 
		return horizontalPosition_I(tetramino) */
		
	}
	
}