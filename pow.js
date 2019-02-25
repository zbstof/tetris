module.exports = function(x,n){
	if(n < 0){
		return NaN;
	}
	
	if(n != Math.round(n)){
		return NaN;
	}
	
	var sum = 1;
	
	for(var i = 0; i < n; i++){
		sum = sum * x;
	}
	return sum
}