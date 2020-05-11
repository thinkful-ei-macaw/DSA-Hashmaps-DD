const HashMap = require('./hashmap');

function main() {
  let lotr = new HashMap();

  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');

  console.log(lotr.get('Hobbit'));
  console.log(lotr.get('Maiar'));

  return lotr;
}



// Drill 1.Create a Hash Map class
// *Returned Sauron and Frodo from the "Maiar" and "Hobbit" keys. the hash seems to be rewriting the value when it finds an identical key.
// *The capacity of the table is 8. And I'm not sure why it isn't 9.

// Drill 2. WhatDoesThisDo
// map1.get(str1) = 20
// map2.get(str3) = 10

const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};


// Drill.3
// 3.1 / |88|17|10|59|4|28|22|31|15|
// 3.2 / |10|28|19|20|12|5|15|33|17|

// question 4
function duplicate(string) {
  let hashmap = new HashMap();
  for (let i = 0; i < string.length; i++) {
    hashmap.set(string.charAt(i), string.charAt(i));
  }
  let newString = '';
  for (let i = 0; i <= hashmap._capacity; i++) {
    // console.log(i);
    // eslint-disable-next-line no-empty
    if (!hashmap._hashTable[i]) {
    } else {
      newString += hashmap._hashTable[i].value;
    }
  }
  console.log(hashmap);
  return newString;
}

// Drill 5. Any permutation a palindrom

function palindrome(string) {
  let hashmap = new Map();

  if (string.length === 0 || string.length === 1 || string.length === 2) {
    return false;
  }

  // poop. length, if its even you just do i/-i up to half of the length. if its odd, racecar length, middle (4), i/-i up to < middle - 1. each character has to occur at least twice except for 1. aka only one character can be lonely (not have a pair). every time we put in a character, we can update a counter variable. then compare the counter variable to the hashmap.length. even == even ||  # !== # palindrome.

  let palindrome = false;
  let counter = 0
  for(let i = 0; i < string.length; i++) {
    hashmap.set(i, string.charAt(i));
    counter++;
  }

  if ((counter - hashmap.length) !== 0 && (counter % hashmap.length) === 0) {
    palindrome = true;
  } palindrome = false;

  return palindrome;
}


// Drill 6. Anagram grouping

function anagram(array) {
  const hashmap = new HashMap();

  for (let i = 0; i < array.length; i++) {
    
    let regexp = RegExp('[' + array[0] +']', 'gi');

    let newArray = [...array[i].matchAll(regexp)]

    console.log(newArray)

    //[east] -- is cars an anagram of east? we answer that by checking to see if cars uses the same letters as east. it doesnt, its false, it gets its own array.

    //[east],[cars] -- is acre an anagram of east or cars? do the same check, it doesnt, its false, it gets its own array

    //[east],[cars],[acre] --is )@#*$& an anagram of any of our words? do the same check, if it is, it goes into the corresponding array. if it isn't, it gets its own array.
    
  }
}


// console.log(duplicate('google all that you think can think of'));
// console.log(main());
// WhatDoesThisDo();
console.log(palindrome('dad'));
console.log(anagram(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))