module.exports = {
	//тетрамино массив из 4 координат [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}]
	// field это массив двухмерный булин значений, если true в ней есть блок, false блока нет
	rotateLine: function(field, tetromino){
		let lengthField_X = field[0].length;
		let lengthField_Y = field.length;
		let turningPoint = [];
		let arrCoordinates_X  = [];
		let arrCoordinates_Y  = [];
		let a = -1;
		let localTetromino = []
		
		tetromino.forEach(function(elem){
			localTetromino.push(Object.assign({},elem));
		})
		tetromino.forEach(function(elem){
			turningPoint.push(Object.assign({},elem));
		})
		
		for(let elem of turningPoint){
			arrCoordinates_X.push(elem.x);
			arrCoordinates_Y.push(elem.y);
		}
		
		if((arrCoordinates_Y[0] == arrCoordinates_Y[1]) && (arrCoordinates_Y[2] == arrCoordinates_Y[3]) && (arrCoordinates_Y[1] == arrCoordinates_Y[2])){
			
			for(let i of turningPoint){
				i.x = arrCoordinates_X[1];
				i.y = arrCoordinates_Y[0] + a;
				a++;
			}
			let newPosition = allItemsOnTheField(turningPoint)
			if(checkThatTheFieldIsFree(newPosition)){
				return localTetromino
			}else{
				return newPosition
			}
		}
		
		if((arrCoordinates_X[0] == arrCoordinates_X[1]) && (arrCoordinates_X[2] == arrCoordinates_X[3]) && (arrCoordinates_X[1] == arrCoordinates_X[2])){
			let cloneTetromino = [];
				turningPoint.forEach(function(elem){
				cloneTetromino.push(Object.assign({},elem));
			})				
			for(let i of cloneTetromino){
				i.y = arrCoordinates_Y[1];
				i.x = arrCoordinates_X[0] + a;
				a++;
			}
			
			let newPosition = allItemsOnTheField(cloneTetromino)
			if(checkThatTheFieldIsFree(newPosition)){
				return localTetromino
			}else{
				return newPosition
			}
		}
		
		function allItemsOnTheField(elem){
			for(let i of elem){
				if((i.x < 0 || i.y < 0)  || (i.x >= lengthField_X) || (i.y >= lengthField_Y)){
					return localTetromino;
				}
			}
			return elem;
		}
			
		function checkThatTheFieldIsFree(elem){
			let coordinates_X =[]
			let coordinates_Y =[]
			for(let i of elem){
				coordinates_X.push(i.x)
				coordinates_Y.push(i.y)
			}
			
			for(let i = 0; i < arrCoordinates_X.length; i++){
				if(field[coordinates_Y[i]][coordinates_X[i]] == true){
					return true
				}
			}
		}
		
		if(arrCoordinates_X[0] < arrCoordinates_X[1] && arrCoordinates_X[1] < arrCoordinates_X[2] && arrCoordinates_X[2] == arrCoordinates_X[3] && arrCoordinates_Y[0] == arrCoordinates_Y[1]&& arrCoordinates_Y[1] > arrCoordinates_Y[2] && arrCoordinates_Y[2] < arrCoordinates_Y[3]){
			function first_rotation_L(tetromino){
				let newCoordenats = []
				for(let i = 0, j = 0; i < tetromino.length; i++, j++){
					let obj = {}
					if(j == 0){
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y-1;
					}else if(j == 1){
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y-1;
					}else if( j == 2){
						obj.x = tetromino[i].x-1;
						obj.y = tetromino[i].y+1;
					}else if( j == 3){
						obj.x = tetromino[i].x-1;
						obj.y = tetromino[i].y+1;
					}
					newCoordenats.push(obj)
				}
				return newCoordenats
			}
			return first_rotation_L(localTetromino)
		}
		
		if(arrCoordinates_X[0] < arrCoordinates_X[1] && arrCoordinates_X[1] == arrCoordinates_X[2] && arrCoordinates_X[2] == arrCoordinates_X[3] && arrCoordinates_Y[0] == arrCoordinates_Y[1] && arrCoordinates_Y[1] < arrCoordinates_Y[2] && arrCoordinates_Y[2] < arrCoordinates_Y[3]){
			function second_rotation_L(tetromino){
				let newCoordenats = []
				for(let i = 0, j = 0; i < tetromino.length; i++, j++){
					let obj = {}
					if(j == 0){
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y;
					}else if(j == 1){
						obj.x = tetromino[i].x-1;
						obj.y = tetromino[i].y+1;
					}else if( j == 2){
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y-1;
					}else if( j == 3){
						obj.x = tetromino[i].x+1;
						obj.y = tetromino[i].y-2;
					}
					newCoordenats.push(obj)
				}
				return newCoordenats
			}
			return second_rotation_L(localTetromino)
		}
		
		if(arrCoordinates_X[0] == arrCoordinates_X[1] && arrCoordinates_X[1] < arrCoordinates_X[2] && arrCoordinates_X[2] < arrCoordinates_X[3] && arrCoordinates_Y[0] < arrCoordinates_Y[1] && arrCoordinates_Y[1] > arrCoordinates_Y[2] && arrCoordinates_Y[2] == arrCoordinates_Y[3]){
			function third_rotation_L(tetromino){
				let newCoordenats = []
				for(let i = 0, j = 0; i < tetromino.length; i++, j++){
					let obj = {}
					if(j == 0){
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y;
					}else if(j == 1){
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y;
					}else if( j == 2){
						obj.x = tetromino[i].x-1;
						obj.y = tetromino[i].y+2;
					}else if( j == 3){
						obj.x = tetromino[i].x-1;
						obj.y = tetromino[i].y+2;
					}
					newCoordenats.push(obj)
				}
				return newCoordenats
			}
			return third_rotation_L(localTetromino)
		}
		
		if(arrCoordinates_X[0] == arrCoordinates_X[1] && arrCoordinates_X[1] == arrCoordinates_X[2] && arrCoordinates_X[2] < arrCoordinates_X[3] && arrCoordinates_Y[0] < arrCoordinates_Y[1] && arrCoordinates_Y[1] < arrCoordinates_Y[2] && arrCoordinates_Y[2] == arrCoordinates_Y[3]){
			function fourth_rotation_L(tetromino){
				let newCoordenats = []
				for(let i = 0, j = 0; i < tetromino.length; i++, j++){
					let obj = {}
					if(j == 0){
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y+1;
					}else if(j == 1){
						obj.x = tetromino[i].x+1;
						obj.y = tetromino[i].y;
					}else if( j == 2){
						obj.x = tetromino[i].x+2;
						obj.y = tetromino[i].y-2;
					}else if( j == 3){
						obj.x = tetromino[i].x+1;
						obj.y = tetromino[i].y-1;
					}
					newCoordenats.push(obj)
				}
				return newCoordenats
			}
			return fourth_rotation_L(localTetromino)
		}
			
	},
	/*
		-----
		-X-X-
		-XXX-
		XXX-X

		transform into
		[
			[false,false,false,false,false],
			[false,true, false,true, false],
			[false,true, true ,true, false],
			[true, true, true, false,true ]
		
		]
		
	*/
	buildField: function(stringField){
		
		let arr = stringField.split("\n")
		for(let k = 0; k < arr.length; k++){
			for(let z = 0; z < arr[k].length; z++){
				if( arr[k][z] != "-" && arr[k][z] != "X" && arr[k][z] != false) {
					throw new Error("invalid symbol")
				}
			}
		}
		
		let newArr = []
		
		for(let i = 0; i < arr.length; i++){
			let elementsForNewArray = []
			for(let j = 0; j < arr[i].length; j++){
			if(arr[i][j] == "-"){
				elementsForNewArray.push(false)
			}else if(arr[i][j] == "X"){
				elementsForNewArray.push(true)
			 }
			}
			if(elementsForNewArray.length != 0){
				newArr.push(elementsForNewArray)
			}
		}
		if(newArr.length == 0){
			throw new Error("field whitespace")		
		}
		return newArr;
	},
	
	buildTetromino: function(stringOfCoordinates){
		let math = stringOfCoordinates.split("\n")
		let arrayOfCoordinates = []
		let quantityElem = 0;
		
		for(let i = 0, elem_Y = 0; i < math.length; i++){
			if(math[i]!= false){
				
				for(let j = 0, elem_X = 0; j < math[i].length; j++){
					let obj = {}
					if(math[i][j]!= false){
						if(math[i][j] == "X"){
							console.log(math[i][j])
							obj.x = elem_X
							obj.y = elem_Y
							quantityElem++;
							
							arrayOfCoordinates.push(obj)
							
						}
						elem_X++
					}
					
				}
				elem_Y++
			}
			
		}
		let repeatCycle = true;
		while (repeatCycle) {
			for(let i = 0, j = 1; j < arrayOfCoordinates.length; i++, j++){
				if(arrayOfCoordinates[i].x > arrayOfCoordinates[j].x){
					let b  = arrayOfCoordinates[j];
					arrayOfCoordinates[j] = arrayOfCoordinates[i];
					arrayOfCoordinates[i] = b
				} 
				
			}
			if(arrayOfCoordinates[0].x <= arrayOfCoordinates[1].x && arrayOfCoordinates[1].x <= arrayOfCoordinates[2].x && arrayOfCoordinates[2].x <= arrayOfCoordinates[3].x){
				repeatCycle = false
			}					
		}
		if(quantityElem != 4){
			throw new Error("tetromino size is not correct");
		} 
		return arrayOfCoordinates;
		
	}
	
}