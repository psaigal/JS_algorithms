// Question: Capitalize the first letter of every word in the string
//Input: string
//Output: string

//Example
//Input: I'm a little tea pot" 
//Output: "I'm A Little Tea Pot"

function titleCase(str) {
	strArray = str.toLowerCase().split(" ");
	for (var i = 0; i <= strArray.length-1; i++) {
		strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1,strArray[i].length+1);
	}
  	return strArray.join(" ");
}

titleCase("sHoRt AnD sToUt");
