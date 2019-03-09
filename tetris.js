module.exports = {
	
	test: function(x,y){
		return x*y;
	},
	//тетрамино массив из 4 координат [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}]
	// field это массив двухмерный булин значений, если true в ней есть блок, false блока нет
	rotateLine: function(field, tetramino){
		let turningPoint = [];
		let arrCoordinates_X  = [];
		let arrCoordinates_Y  = [];
		let cloneTetramino = [];
		let a = -1;
		
		tetramino.forEach(function(elem){
			cloneTetramino.push(Object.assign({},elem));
			
		})
		
		tetramino.forEach(function(elem){
			turningPoint.push(Object.assign({},elem));
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
		
		let resultTetramino = []
		
		cloneTetramino.forEach(function(elem){
			resultTetramino.push(Object.assign({},elem));
		})
		
		function rotate(elem){
			let arrCoordinates_X  = [];
			let arrCoordinates_Y  = [];
			for(let i of elem){
				arrCoordinates_X.push(i.x);
				arrCoordinates_Y.push(i.y);
			}
			
			if(arrCoordinates_Y[0] == arrCoordinates_Y[1]&& arrCoordinates_Y[2] == arrCoordinates_Y[3]){
				let a = -1;
				for(let i of elem){
					i.x = arrCoordinates_X[1];
					i.y = arrCoordinates_Y[0] + a;
					a++;
				}
				return elem
			}
			
			if(arrCoordinates_X[0] == arrCoordinates_X[1]&& arrCoordinates_X[2] == arrCoordinates_X[3]){
				let a = -1;
				for(let i of elem){
					i.y = arrCoordinates_Y[1];
					i.x = arrCoordinates_X[0] + a;
					a++;
				}
				return elem
			}
		}
		
		let tetramino_180 = []
		
		rotate(cloneTetramino).forEach(function(elem){
			tetramino_180.push(Object.assign({},elem));
		})
		
		return {resultTetramino: resultTetramino, rotate: tetramino_180}
	},
	
}