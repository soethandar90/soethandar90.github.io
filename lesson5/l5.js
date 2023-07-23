// Function to find the maximum of two numbers
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Function to find the maximum of three numbers
function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

// Function to check if a character is a vowel
function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.indexOf(char.toLowerCase()) !== -1;
}

// Function to calculate the sum of an array of numbers
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// Function to calculate the product of an array of numbers
function multiply(numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
}

// Function to reverse a string
function reverse(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Function to find the length of the longest word in an array of words
function findLongestWord(words) {
  let longestLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestLength) {
      longestLength = words[i].length;
    }
  }
  return longestLength;
}

// Function to filter words longer than a given length from an array of words
function filterLongWords(words, i) {
  let filteredWords = [];
  for (let j = 0; j < words.length; j++) {
    if (words[j].length > i) {
      filteredWords.push(words[j]);
    }
  }
  return filteredWords;
}

//Fiddle modification
const a = [1, 3, 5, 3, 3];
const b = a.map(function(elem) {
  return elem * 10;
});
console.log(b); // Output: [10, 30, 50, 30, 30]
const c = a.filter(function(elem) {
  return elem === 3;
});
console.log(c); // Output: [3, 3, 3]
const d = a.reduce(function(prevValue, elem) {
  return prevValue * elem;
});
console.log(d); // Output: 135
const d2 = a.find(function(elem) {
  return elem > 1;
});
console.log(d2); // Output: 3
const d3 = a.findIndex(function(elem) {
  return elem > 1;
});
console.log(d3); // Output: 1