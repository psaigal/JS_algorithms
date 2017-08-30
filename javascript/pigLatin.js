// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

//EXAMPLE:
// hello => ellohay
// apple => appleway



function translatePigLatin(str) {
  if (isVowel(str[0])) {
    return str += "way";
  }
  else {
    for (var i = 1; i <= str.length; i++) {
      if (isVowel(str[i])) {
        var first = str.substring(0,i);
        var second = str.substring(i);
        return second + first + "ay";
        
      }
    }
  }
}

function isVowel(letter) {
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
    return true;
  }
  return false;
}
