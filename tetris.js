module.exports = {
	
	test: function(x,y){
		return x*y;
	},
	//тетрамино массив из 4 координат [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}]
	// field это массив двухмерный булин значений, если true в ней есть блок, false блока нет
	rotateLine: function(field, tetramino){
		// тут запишу значение тетримино при 180 градусах
		var turningPoint = []
		tetramino.forEach(function(elem){
			turningPoint.push(Object.assign({},elem));
		})
		
		
		function rotate_I_tetramino(tetramino){//принимаю значение тетрамино
			let cloneTetramino=[];
			tetramino.forEach(function(elem){//делаю копию значений тетрамино
				cloneTetramino.push(Object.assign({},elem));
			})
			rotateLine(cloneTetramino)// переварачиваю тетерамино на 90 градусов
			for(let i of cloneTetramino){
				//проверяю все ли элементы находяться на поле, если нет то возвращаю входящее значение
				//поле по Х = от 0 до 9 и по Y = от нуля, а низ поля не считаю ибо за поле в низу он не будет выходить
				if((i.x < 0 || i.y < 0)  || (i.x > 9)){
					return tetramino;
				}
			}
			//все элементы на поле, я возвращаю новое значение тетрамино
			return cloneTetramino
		}
		
		
		//функция которая переворачивает тетрамино
		
		function rotateLine(elem){
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
		
		
	}
}