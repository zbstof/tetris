module.exports = {
	//тетрамино массив из 4 координат [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}]
	// field это массив двухмерный булин значений, если true в ней есть блок, false блока нет
	rotateLine: function(field, tetramino){
		let lengthField_X = field[0].length;
		let lengthField_Y = field.length;
		let turningPoint = [];
		let arrCoordinates_X  = [];
		let arrCoordinates_Y  = [];
		let a = -1;
		let localTetramino = []
		
		tetramino.forEach(function(elem){
			localTetramino.push(Object.assign({},elem));
		})
		tetramino.forEach(function(elem){
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
			return allItemsOnTheField(turningPoint)
		}
		
		if((arrCoordinates_X[0] == arrCoordinates_X[1]) && (arrCoordinates_X[2] == arrCoordinates_X[3]) && (arrCoordinates_X[1] == arrCoordinates_X[2])){
			let cloneTetramino = [];
				turningPoint.forEach(function(elem){
				cloneTetramino.push(Object.assign({},elem));
			})				
			for(let i of cloneTetramino){
				i.y = arrCoordinates_Y[1];
				i.x = arrCoordinates_X[0] + a;
				a++;
			}
			return allItemsOnTheField(cloneTetramino)
		}
		
		function allItemsOnTheField(elem){
			for(let i of elem){
				if((i.x < 0 || i.y < 0)  || (i.x >= lengthField_X) || (i.y >= lengthField_Y)){
					return localTetramino;
				}
			}
			return elem;
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
		if(stringField == ""){
			throw new Error("empty field")
		}
		let arr = stringField.split("\n")
		let size_Y = arr.length
		let size_X = arr[0].length
		let newArr = []
		
		for(let i = 1; i < arr.length-1; i++){
				let elementsForNewArray = []
			for(let j = 4; j < arr[1].length; j++){
				if(arr[i][j] == "-"){
					elementsForNewArray.push(false)
				}else if(arr[i][j] == "X"){
					elementsForNewArray.push(true)
				}
			}
			newArr.push(elementsForNewArray)
		}
		return newArr;
	},
	
	
}