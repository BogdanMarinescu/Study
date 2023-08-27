console.log(`chuck-norris.js is loaded...`);

const url = `https://api.chucknorris.io/jokes/random`;
const displayDiv = document.querySelector(`#display`);
const fetchBtn = document.querySelector(`#new-quote`);

fetchBtn.addEventListener(`click`, function () {
  displayDiv.textContent = `Loading quote...`;
  fetchBtn.disabled = true;
  fetch(url)
    .then((response) => response.json())
    .then((jsonResponse) => {
      console.log(jsonResponse);
      displayDiv.textContent = jsonResponse.value;
      fetchBtn.disabled = false;
    });
});
