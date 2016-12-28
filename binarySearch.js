'use strict';

Array.prototype.binarySearch = function binarySearch(searchTerm) {
  if (!Number.isInteger(searchTerm)) {
    throw new TypeError(`Expected argument to be an integer but instead got ${searchTerm}`);
  }

  let min = 0,
      max = this.length - 1;

  let currentIndex,
      currentElement,
      steps = 0;

  console.log('\r\n🕵 SEARCHING\r\n');

  while (min <= max) {
    currentIndex = Math.round((min + max) / 2);
    currentElement = this[currentIndex];
    steps += 1;

    if (currentElement < searchTerm) {
      console.log(`|${min}.....${max}| -> CHOP 💇🏽`);
      min = currentIndex + 1;
    } else if (currentElement > searchTerm) {
      console.log(`|${min}.....${max}| <- CHOP 💇🏽`);
      max = currentIndex + 1;
    } else {
      console.log('\r\n🎉 BINGO');
      console.log(`🎉 FOUND ${searchTerm} IN A ${this.length} ITEM ARRAY IN ${steps} ITERATIONS`);

      return currentIndex;
    }
  }

  console.log(`\r\n😢 ${searchTerm} IS NOT IN THE ARRAY`);
  return -1;
};

module.exports = Array;
