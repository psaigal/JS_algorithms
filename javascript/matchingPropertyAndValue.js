// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.



function whatIsInAName(collection, source) {
  var arr = [];
  var sourceKey = Object.keys(source);
  var found;
  for (var i = 0; i <= collection.length-1; i++) {
    for (var j = 0; j <= sourceKey.length-1; j++){
      if (collection[i].hasOwnProperty(sourceKey[j]) && source[sourceKey[j]] == collection[i][sourceKey[j]]) {
        found = true;
      }
      else {
        found = false;
      }
    }
    if (found) {
      arr.push(collection[i]);
    }
  }
  return arr;
}
