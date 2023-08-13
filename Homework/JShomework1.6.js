console.log(`JShomework1.6.js is loaded...`);

function readUserNumber() {
  let num = prompt(`Please insert a number`);
  num = Number(num);

  return num;
}

function fizzBuzz(num) {
  if (num <= 0) {
    return "Input number should be greater than 0.";
  }
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      result.push("fizzbuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 4 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }
  return result.join("; ");
}

function displayResult(result) {
  console.log(result);
}

let userNr = readUserNumber();
let displayString = fizzBuzz(userNr);
displayResult(displayString);

console.log(`JShomework1.6.js has executed...`);
