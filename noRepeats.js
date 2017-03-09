//Input: String
//Output: Number

//Example
// Input: a1-a2-b
// Output: 2
// a1-a2-b
// a2-a1-b
// a1-b-a2
// a2-b-a1
// b-a1-a2
// b-a2-a1


// a1 -> a2 -> b
// a1 -> b -> a2

// a2 -> a1 -> b
// a2 -> b -> a1

// b -> a1 -> a2
// b -> a2 -> a1


// ------
// [1,2,3,4,5]

// 1. Start with the first element in the array.
// 2. In this case, 1
// 3. look at the last two elements in the array.
// 4. So we have 1,2,3 ---> 4,5
// 5. Then go to the next element in the array backwards, 3.
// 6.


// ---- 1234
// 1234
// 1243
// 1342
// 1324
// 1423
// 1432

// 2134
// 2143
// 2314
// 2341
// 2431
// 2413

// 3124
// 3142
// 3214
// 3241
// 3412
// 3421

// 4123
// 4132
// 4231
// 4213
// 4312
// 4321

// 34
// 43




// ---12345 ----> 12, 13, 14, 15

// 123-45
// 123-54
// 124-35
// 124-53
// 125-34
// 125-43

// -> 24 * 5

// ---123456
// 1234-56
// 1234-65
// 1235-64
// 1235-46
// 1236-45
// 1236-54
// 124-365
// 124









// 1234
// 1243
// 1342
// 1324
// 1423
// 1432

// 2134
// 2143
// 2314
// 2341
// 2431
// 2413

// 3124
// 3142
// 3214
// 3241
// 3412
// 3421

// 4123
// 4132
// 4231
// 4213
// 4312
// 4321


// // [1,2,3,4,5]

// // 12345
// // 12354
// // 12435
// // 12453
// // 12534
// // 12543


// 1. Start with a string, "aab"
// 2. We will first write a function to get all the permutations of a string

function permAlone(str) {
  allPerms(str,[])
  return str;
}

function allPerms(str,arr,s) {
  // var yolo;
  if (str.length === 1) {
    // console.log(yolo);
    arr.push(s + str);
    console.log(arr);
    return arr;
  }
  for(var i = 0; i <= str.length-1; i++) {
    for(var j = 0; j <= str.length-1; j++) {
      console.log(str + " efuerbfe")
      var first = str[i];
      var last = str[j];
      str = str.replace(str[j], first);
      str = str.replace(str[i], last);
      console.log(str + " lol");
      s = str[0];
      var blah = str.slice(1);
      // console.log(yolo);
      allPerms(blah, arr, s);
    }
  }
}

allPerms("123",[])






