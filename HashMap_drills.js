const HashMap = require("./hashmap");

function main() {
  let lotr = new HashMap();

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");

  console.log(lotr.get("Hobbit"));
  console.log(lotr.get("Maiar"));

  return lotr;
}

console.log(main());

// Drill 1.Create a Hash Map class
// *Returned Sauron and Frodo from the "Maiar" and "Hobbit" keys. the hash seems to be rewriting the value when it finds an identical key.
// *The capacity of the table is 8. And I'm not sure why it isn't 9.

// Drill 2. WhatDoesThisDo
// map1.get(str1) = 20
// map2.get(str3) = 10

const WhatDoesThisDo = function () {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
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

// WhatDoesThisDo();

// question 4
function duplicate(string) {
  let hashmap = new HashMap();
  for (let i = 0; i < string.length; i++) {
    hashmap.set(string.charAt(i), string.charAt(i));
  }
  let newString = "";
  for (let i = 0; i <= hashmap._capacity; i++) {
    // console.log(i);
    if (!hashmap._hashTable[i]) {
    } else {
      newString += hashmap._hashTable[i].value;
    }
  }
  console.log(hashmap);
  return newString;
}
console.log(duplicate("google all that you think can think of"));
