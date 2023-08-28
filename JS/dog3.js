console.log(`dog3.js is loaded...`);

const url = "https://dog.ceo/api/breeds/list/all";

async function getBreeds() {
    const response = await fetch(url);
    const breeds = await response.json();

    console.log(breeds);
}

getBreeds();