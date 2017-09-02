// Check if a given string is a isomorphic
// `paper` and `title` would return true.
// `egg` and `sad` would return false.
// `dgg` and `add` would return true.

function isIsomorphic(str1,str2) {
  var hash = {};
   if (str1.length !== str2.length) {
    return false;
  }
  for (var i = 0; i <= str1.length-1 ; i++) {
    if (!hash.hasOwnProperty(str1[i])) {
      hash[str1[i]] = str2[i];
    }
    else if (hash[str1[i]] !== str2[i]) {
      return false;
    }
  }
  return true;
}


// console.log(isIsomorphic("paper", "title"));
// console.log(isIsomorphic("dgg", "add"));