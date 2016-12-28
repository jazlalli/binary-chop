'use strict';

require('./binarySearch');

let target = [];
for (let i = 0; i < 10000; i++) {
  target.push(i);
}

// search
target.binarySearch(800);
