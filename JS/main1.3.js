console.log(`main1.3.js is loaded...`);
let i = prompt(`Input your number`);
i = Number(i);

while (i < 0) {
    console.log(i);
    i = Math.abs(-i) - 1; 
}while (i > 0) {
    console.log(i);
    i = -Math.abs(i) + 1; 
}

console.log(`Finish`);

