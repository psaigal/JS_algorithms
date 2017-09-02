
// Question was "Given a pattern and a string input - find if  the string follows the same pattern and return 0 or 1. Examples: 1) Pattern : "abba", input: "redblueredblue" should return 1. 2) Pattern: "aaaa", input: "asdasdasdasd" should return 1. 3) Pattern: "aabb", input: "xyzabcxzyabc" should return 0.




// Question was "Given a pattern and a string input - find if the string follows the same pattern and return 0 or 1. Examples: 1) Pattern : "abba", input: "redblueredblue" should return 1. 2) Pattern: "aaaa", input: "asdasdasdasd" should return 1. 3) Pattern: "aabb", input: "xyzabcxzyabc" should return 0.


function stringPattern(pattern,str) {
  var patternLength = str.length/4
  for (var i = 0; i <= str.length-1; i+= 3) {
    if (str.substring(i, i+3) === str.substring(i+6, i+9) ) {
      console.log("yolo");
    }
    else {
      console.log("blahhh")
    }
  }
}

i = 0, i+= (patternLength*2), i=6
str.substring(i, i+patternLength-1) === str.substring(i+patternLength, i+(patternLength*2)-1)

stringPattern("aabb","xyzxzyabcabc") 





i = 0
str.substring(i, i+patternLength-1) === str.substring(str.length-1-patternLength)

abba, redbluebluered
  



// Pseudocode:
// Input: abba, redblueredblue
// Output: 1

// Take string.length and divide into 4 parts

