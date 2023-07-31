console.log(`main1.1.js is loaded...`);

let nr1 = prompt(`Input your number`);
nr1 = Number(nr1);

if (nr1 < 0) {
    alert(`The number is negative`);
}else if (nr1 > 0) {
    alert(`The number is positive`);
}else if (nr1 === 0) {
    alert(`The numbers is null`);
}
