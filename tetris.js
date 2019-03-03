module.exports = {
	
	test: function(x,y){
		return x*y;
	},
	//тетрамино массив из 4 координат [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}]
	// field это массив двухмерный булин значений, если true в ней есть блок, false блока нет
	rotateLine: function(field, tetramino){
		
		function horizontalPosition_I(tetramino){
				let arrPsition_Y = [];
				for(let i of tetramino){
					arrPsition_Y.push(i.y)
				}
				
				let arrPsition_X = [];
				for(let i of tetramino){
					arrPsition_X.push(i.x)
				}
				
				if(arrPsition_Y[0] == arrPsition_Y[1] && arrPsition_Y[2] == arrPsition_Y[3]){
					for(let i of tetramino){
						let oldPosition_X = i.x
						i.x = i.y
						i.y = oldPosition_X
					}
					return tetramino
				}
				
				if(arrPsition_X[0] == arrPsition_X[1] && arrPsition_X[2] == arrPsition_X[3]){
					for(let i of tetramino){
						let oldPosition_Y = i.y
						i.y = i.x
						i.x = oldPosition_Y
					}
					return tetramino
				}
				
			}
		
		
		return horizontalPosition_I(tetramino)
		
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