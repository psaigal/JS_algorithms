// Given two strings, return true if they are anagrams of one another "mary" is an anagram of "army"


//Solution 1
function anagram(str1, str2) {
  var counter1 = {};
  var counter2 = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (var i = 0; i <= str1.length-1; i++) {
    if (!counter1.hasOwnProperty(str1[i])){
      counter1[str1[i]] = 1;
    }
    else if (counter1.hasOwnProperty(str1[i])){ 
      counter1[str1[i]] += 1;
    }
    if (!counter2.hasOwnProperty(str2[i])){
      counter2[str2[i]] = 1;
    }
    else if (counter2.hasOwnProperty(str2[i])){ 
      counter2[str2[i]] += 1;
    } 
  }
  for (var key in counter1) {
    if (!counter2.hasOwnProperty(key) || counter2[key] !== counter1[key]) {
      return false;
    }
  }
  return true;
}