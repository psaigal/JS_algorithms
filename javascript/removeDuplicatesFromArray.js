//Question: Remove duplicate numbers from an array

//Input: Array
//Output: Array without the duplicates

// Example:

// Input: [1,4,7,6,5,6,4,8,9,4,3];
// Output: [1,4,7,6,5,8,9,3];


//SOLUTION 1
function removeDuplicatesFromArray(arr) {
	var counter = {};
	for (var i = 0; i <= arr.length-1; i++){
		if(counter.hasOwnProperty(arr[i])){
			counter[arr[i]] += 1
		}
		else {
			counter[arr[i]] = 1;
		}
	}
	for (var key in counter) {
		if (counter[key] > 1) {
  		for (var z = counter[key]; z > 1; z --) {
  		  arr.splice(arr.indexOf(Number(key)), 1);
  		}
		}
	}
	return arr;
}


//SOLUTION 2
function removeDuplicatesFromArray(arr) {
	var counter = {};
	var result = [];
	for (var i = 0; i <= arr.length-1; i++){
	  var check = arr[i];
		if(!counter.hasOwnProperty(check)){
			result.push(arr[i]);
			counter[check] = 1;
		}
	}
	return result;
}

removeDuplicatesFromArray([1,4,7,6,5,6,4,8,9,4,3]);