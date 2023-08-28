console.log(`dog3.js is loaded...`);

const url = "https://dog.ceo/api/breeds/list/all";

async function getBreeds() {
    const response = await fetch(url);
    const breeds = await response.json();
 
    for(const breedType in breeds.message) {
        console.log(``);
        console.log(breedType);
        console.log(breeds.message[breedType]);
    }
    // console.log(breeds.message[`hound`]);
}

getBreeds();