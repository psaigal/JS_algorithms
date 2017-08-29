//Find longest string in the sentence
// Input: string
// Output: number

// Example:
//Input: "The quick brown fox jumped over the lazy dog"
//Output: 6

// Steps:
// 1. Put string into array
// 2. Loop through array
// 3. Set a variable called findLongestWord
// 4. For each word in array, check length
// 5. If current word is longer than previous word, set findLongestWord value to equal current word value
// 6. Return findLongestWord


function findLongestWord(str) {
	var findLongestWord = 0;
	var strArray = str.split(" ");
	strArray.forEach(function(word) {
	  console.log(word);
	  if (word.length >= findLongestWord) {
	    findLongestWord = word.length;
	  }
	})
  return findLongestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");