console.log(`JShomework.js is loaded...`);

function readUserNumber() {
  let inputNr = prompt(`Please insert a number`);
  inputNr = Number(inputNr);

  return inputNr;
}

function generateResultString(inputNr) {
  let output = ``;
  for (let i = 1; i <= inputNr; i++) {
    if (output) {
      output = output + ``;
    }
    output = output + i;
  }
  return output;
}

function displayResult(output) {
  console.log(output);
}

let userNr = readUserNumber();
let displayString = generateResultString(userNr);
displayResult(displayString);

console.log(`JShomework.js has executed...`);
