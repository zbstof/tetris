module.exports = {
	
	test: function(x,y){
		return x*y;
	},
	//тетрамино массив из 4 координат [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}]
	// field это массив двухмерный булин значений, если true в ней есть блок, false блока нет
	rotateLine: function(field, tetramino){
		let arrCoordinates_X  = [];
		let arrCoordinates_Y  = [];
		let cloneTetramino=[];
		let a = -1;
		tetramino.forEach(function(elem){
			cloneTetramino.push(Object.assign({},elem));
			
		})
		
		for(let elem of cloneTetramino){
			arrCoordinates_X.push(elem.x);
			arrCoordinates_Y.push(elem.y);
		}
		
		for(let elem of cloneTetramino){
			elem.x = arrCoordinates_X[1];
			elem.y = arrCoordinates_Y[0] + a;
			a++;
		}
		
		for(let elem of cloneTetramino){
			if((elem.x < 0 || elem.y < 0)  || (elem.x > 9) || (elem.y > 3)){
				return tetramino;
			}
		} 
		
		return cloneTetramino;
	},
	rotateLineTheSecond: function(field, tetramino){
		let arrCoordinates_X  = [];
		let arrCoordinates_Y  = [];
		let tetramino_90 = exports.rotateLine();
		let turningPoint = [];
		let a = -1;
		let cloneTetramino = [];
		tetramino.forEach(function(elem){
			turningPoint.push(Object.assign({},elem));
			
		})
		
		for(let elem of cloneTetramino){
			arrCoordinates_X.push(elem.x);
			arrCoordinates_Y.push(elem.y);
		}
		
		for(let elem of cloneTetramino){
			elem.y = arrCoordinates_Y[1];
			elem.x = arrCoordinates_X[0] + a;
			a++;
		}
		return turningPoint
	},
	turningPoint : function(tetramino){
		let turningPoint = [];
		tetramino.forEach(function(elem){
			turningPoint.push(Object.assign({},elem));
		})
		return turningPoint;
	},
	tetraminoTurn: function(field, tetramino){
		let arrCoordinates_X  = [];
		let arrCoordinates_Y  = [];
		let cloneTetramino = [];
		let a = -1;
		tetramino.forEach(function(elem){
			cloneTetramino.push(Object.assign({},elem));
			
		})
		
		if(arrCoordinates_Y[0] == arrCoordinates_Y[1]&& arrCoordinates_Y[2] == arrCoordinates_Y[3]){
			for(let elem of cloneTetramino){
				elem.x = arrCoordinates_X[1];
				elem.y = arrCoordinates_Y[0] + a;
				a++;
			}
			return cloneTetramino
		}
		
		if(arrCoordinates_X[0] == arrCoordinates_X[1]&& arrCoordinates_X[2] == arrCoordinates_X[3]){
			for(let elem of cloneTetramino){
				elem.y = arrCoordinates_Y[1];
				elem.x = arrCoordinates_X[0] + a;
				a++;
			}
			return cloneTetramino
		}
		
	}
}