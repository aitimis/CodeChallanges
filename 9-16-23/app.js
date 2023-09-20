// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel

// Solution:
function disemvowel(str) {
    let result = ''
    //loop through the string
    for(let i = 0; i < str.length; i++){
      //if the character is not a vowel then add it to a new string
      if(str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u' && str[i] !== 'A' && str[i] !== 'E' && str[i] !== 'I' && str[i] !== 'O' && str[i] !== 'U'){
        result += `${str[i]}`
      }
    }
    //return the new string
    return result
  }
