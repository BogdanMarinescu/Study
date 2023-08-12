console.log(`JShomework1.3.js is loaded...`);

function displayArr() {
    let arr = [5, 15, 18, -30, 8, -1];
    return arr;
}

function generateMinOfArr(arr) {
  let min = null;
  for (let number of arr) {
    if (min === null) {
      min = number;
    } else if (number < min) {
      min = number;
    }
  }
  return min;
}

function displayMinOfArr(min) {
  console.log(min);
}

let arr = displayArr();
let showMinOfArr = generateMinOfArr(arr);
displayMinOfArr(showMinOfArr);
console.log(`JShomework1.3.js has executed...`);
