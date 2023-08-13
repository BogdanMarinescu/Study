console.log(`JShomework1.5.js is loaded...`);

function generatePattern(rows, cols) {
  for (let i = 0; i < rows; i++) {
    let rowPattern = "";
    for (let j = 0; j < cols; j++) {
      if ((i + j) % 2 === 0) {
        rowPattern += "0 ";
      } else {
        rowPattern += "1 ";
      }
    }
    console.log(rowPattern);
  }
}
generatePattern(4, 4);

//Without function:

// for (let row = 0; row < 4; row++) {
//   let output = "";
//   for (let i = 0; i < 4; i++) {
//     if ((i + row) % 2 === 0) {
//       output += "0 ";
//     } else {
//       output += "1 ";
//     }
//   }
//   console.log(output);
// }

console.log(`JShomework1.5.js has executed...`);
