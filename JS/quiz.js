console.log(`quiz.js is loaded...`);

//Example of a GET REQUEST//

const url = "https://quiz-api.siit.ro/api/questions?limit=2&random=1";

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "Get",
    headers,
})
.then(response => response.json())
.then(data => console.log(data));