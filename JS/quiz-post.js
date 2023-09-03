console.log(`quiz-post.js is loaded...`);

// const url = "https://quiz-api.siit.ro/api/register"

// let headers = {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
// };

// let body = {
//     "email": "bogdanmarinescu.work@gmail.com",
//     "name": "bogdan-marinescu.work",
//     "password": "Siit.41",
//     "password_confirm": "Siit.41",
// }

// fetch(url, {
//     method: "POST",
//     headers,
//     body: JSON.stringify(body),
// })

// .then(response => response.json())
// .then(data => console.log(data));

const token = `386|HjlC2jE7287DqS29zeXICkoxvOUudduwX8sLhqYv`

const url = new URL(
    "https://quiz-api.siit.ro/api/profile"
);

let headers = {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
})
.then(response => response.json())
.then(data => console.log(data));