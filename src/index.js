module.exports = function longestConsecutiveLength(array) {
  // your solution here
  let length = array.length;
  let tmpArray = array;
  let sortArray =[];
  let lengthNum = 1;
  let ans = 0;
  if(length > 1){
	sortArray = tmpArray.sort((a,b) => a - b);
  	for(let i = 1; i < length - 1; i++){
  		
  		if(sortArray[i] - sortArray[i - 1] == 1 ){
  			lengthNum++
  		} else 
  		if( ans < lengthNum ){ 
  			ans = lengthNum
  			// lengthNum = 1;
  		 } else {
  		 	lengthNum = 1;
  		 }
  	}
  	return ans;
  } else {
  	return length;
  }
}
