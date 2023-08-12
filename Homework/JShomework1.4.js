console.log(`JShomework1.4.js is loaded...`);

function countItem(arr, item) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
          count++;
      }
  }

  return count;
}

const myArray = [1, 2, 3, 1, 4, 1, 5, 1];
const itemToCount = 1;
const result = countItem(myArray, itemToCount);

console.log(result);
console.log(`JShomework1.4.js has executed...`);
