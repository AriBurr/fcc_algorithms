// Given an array of two numbers, return the sum of those two numbers and all numbers between them.

sumAll = array => {
  const end = Math.max(...array);
  const start = Math.min(...array);
  const range = new Array(end - start).fill().map((d, i) => i + start);
  return [...range, end].reduce((accum, total) => accum + total);
};

sumAll([10, 5]);

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.

diffArray = (arr1, arr2) => {
  return arr1
    .filter(val => arr2.indexOf(val) === -1)
    .concat(arr2.filter(val => arr1.indexOf(val) === -1));
};

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Convert the given number into a roman numeral.

const roman = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

convertToRoman = num => {
  let converted = '';
  Object.keys(roman).forEach(key => {
    while (num >= roman[key]) {
      converted += key;
      num -= roman[key];
    }
  });
  return converted;
};

convertToRoman(36);

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument).

whatIsInAName = (collection, source) => {
  var srcKeys = Object.keys(source);
  return collection.filter(obj => {
    return srcKeys.every(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
};

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
);

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

myReplace = (str, before, after) => {
  const regexp = /^[A-Z]/;
  if (regexp.test(before)) {
    return str.replace(before, after.charAt(0).toUpperCase() + after.slice(1));
  } else {
    return str.replace(before, after);
  }
};

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

pairElement = str => {
  return str.split('').map(char => {
    if (char === 'A' || char === 'T')
      return char === 'A' ? ['A', 'T'] : ['T', 'A'];
    else return char === 'G' ? ['G', 'C'] : ['C', 'G'];
  });
};

pairElement('GCG');

// Find the missing letter in the passed letter range and return it.

fearNotLetter = str => {
  let missing = '';
  str.split('').forEach((char, i) => {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1)
      missing += String.fromCharCode(str.charCodeAt(i) - 1);
  });
  return missing;
};
fearNotLetter('abce');

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

uniteUnique = () => {
  const args = Array.from(arguments);
  return [...new Set([].concat(...args))];
};

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

const entities = {
  '&': '&amp;',
  ';': '&semi;',
  ',': '&comma;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
};

convertHTML = str => {
  return str
    .split('')
    .map(char => {
      return entities[char] || char;
    })
    .join('');
};

convertHTML('Dolce & Gabbana');

// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

findElement = (arr, func) => {
  return arr.filter(elem => func(elem))[0];
};

findElement([1, 2, 3, 4], function(num) {
  return num % 2 === 0;
});
