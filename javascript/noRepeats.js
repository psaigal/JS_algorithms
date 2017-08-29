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

function allPerms(str,arr,yolo) {
  if (str.length === 1) {
      console.log("HERE!");
      arr.push(str);
      arr.join();
      yolo.push(arr.join(""));
      arr = [];
      // console.log(arr);
      return yolo;
    }
  for(var i = 0; i <= str.length-1; i++) {
    for(var j = 0; j <= str.length-1; j++) {
      console.log(i + " i");
      console.log(j + " j");
      // if (i === 0){
      //   console.log(arr);
      // }
      var first = str[i];
      var last = str[j];
      str = str.replace(str[j], first);
      str = str.replace(str[i], last);
      s = str[0];
      var blah = str.slice(1);
      if (i === 0 || i === 1) {
        console.log(arr + " arr");
        console.log(str + " str");
        console.log(str.length + " str length");
        console.log(s + " s");
        console.log(blah + " blah");
        console.log(yolo + " yolo");
        console.log("********************");
      }
      arr.push(s) + allPerms(blah, arr, yolo);
    }
  }
  // return yolo;
}

allPerms("123",[],[])


// i     j     first     last    str     s     blah      arr

// 0     0       1         1     123     1      23       [1 + fxn]
// 0     0       2         2     23      2       3       [2 + fxn]
// 0     1       3         2     32      3       2        [123]  


// var arr = [];

// function printName(str) {
//   for(var i=0; i<str.length-4; i++)
//     arr.push(str[i]);
//   return arr;
// }

// printName("priyanka");





// i     j     first     last    str     s     blah      arr

// 0     0       1         1     123     1      23       [1 + fxn]
// 0     0       2         2     23      2       3       [2 + fxn]
//


// var arr = [];

// function printName(str) {
//   for(var i=0; i<str.length-4; i++)
//     arr.push(str[i]);
//   return arr;
// }

// printName("priyanka");





function allPerms(str,yolo) {
  if (str.length === 1) {
    console.log(yolo);
    return yolo;
  }
  for(var i = 0; i <= str.length-1; i++) {
    for(var j = 0; j <= str.length-1; j++) {
      var y = swapStr(str,i,j);
      yolo.push(y);
      console.log(y);
      var s = y[0];
      var blah = y.slice(1);
      s + allPerms(blah,yolo);
    }
  }
  // return yolo;
}

allPerms("123",[])
---------------------------------------------
        
function swapStr(str, first, last){
  var start = str[first]; 
  var end = str[last];
  var arr = str.split('');
  arr[last] = start;
  arr[first] = end;
  return arr.join('');
}


function allPerms(str,yolo,u) {
  if (str.length === 1) {
    return yolo;
  }
  var i = 0
  for(var j = 0; j <= str.length-1; j++) {
    var y = swapStr(str,i,j);
    var s = y[0];
    yolo.push(y);
    var blah = y.slice(1);
    s + allPerms(blah,yolo);
  }
  return yolo;
}

allPerms("123",[])

        
function swapStr(str, first, last){
  var start = str[first]; 
  var end = str[last];
  var arr = str.split('');
  arr[last] = start;
  arr[first] = end;
  return arr.join('');
}
  
// i     j     first     last    str      newstr    s     blah      arr

  // 0      0       1        1       123       123   
  // 0      1       1        2       213       213  
  // 0      2       2        3       312       321 
  

  


------------------------------------------------------------------------------
function allPerms(str,yolo) {
  if (str.length === 1) {
    return str;
  }
  for(var i = 0; i<= str.length-1; i++) {
    for(var j = 0; j <= str.length-1; j++) {
      var y = swapStr(str,i,j);
      var blah = y.slice(1);
      return y[i] + allPerms(blah,yolo);
    }
  }
}

allPerms("123",[])


        
function swapStr(str, first, last){
  var start = str[first]; 
  var end = str[last];
  var arr = str.split('');
  arr[last] = start;
  arr[first] = end;
  return arr.join('');
}
  
// i     j     y     s     blah    yolo
// 0     0     123   1     23      [123] 
// 0     0     23    2     3       [23]
// 0     1     32    3     2       [32]-----------------
// 0     1     213   2     13      [213]
// 0     0     13    1     3       [13]
// 0     1     31    3     1       [31]-----------------
// 0     2     321   3     21      [321]


// function test(str){
//   if(str.length === 6 ) {
//     console.log("!!!!!!");
//     return str;
//   }
//   for (var i=0;i<=str.length-3;i++){
//     str = str.replace(str[0],"x");
//     var t = str.slice(1);
//     console.log(str + " str");
//     console.log(t + " t");
//     return str[i] + test(t);
//   }
// }

// test("Priyanka");











