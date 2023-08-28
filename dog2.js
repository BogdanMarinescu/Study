console.log(`dog2.js is loaded...`);

const url = `https://dog.ceo/api/breeds/list/all`;

fetch(url)
  .then((response) => response.json())
  .then((jsonResponse) => console.log(jsonResponse));
