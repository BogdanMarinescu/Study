console.log(`dog3.js is loaded...`);

// const url = "https://dog.ceo/api/breeds/list/all";

// async function getBreeds() {
//     const response = await fetch(url);
//     const breeds = await response.json();
 
//     for(const breedType in breeds.message) {
//         console.log(``);
//         console.log(breedType);
//         console.log(breeds.message[breedType]);
//     }
//     // console.log(breeds.message[`hound`]);
// }

// getBreeds();

 // Fetch and display the list of available dog breeds
 fetch('https://dog.ceo/api/breeds/list/all')
 .then(response => response.json())
 .then(data => {
     const breedList = document.getElementById('breedList');
     
     for (const breed in data.message) {
         if (data.message[breed].length === 0) {
             // No sub-breeds, add as a list item
             const listItem = document.createElement('li');
             listItem.textContent = breed;
             listItem.addEventListener('click', () => fetchRandomDogImage(breed));
             breedList.appendChild(listItem);
         } else {
             // Has sub-breeds, add as a list item with sub-list
             const listItem = document.createElement('li');
             listItem.textContent = breed;
             const subList = document.createElement('ul');
             data.message[breed].forEach(subBreed => {
                 const subListItem = document.createElement('li');
                 subListItem.textContent = subBreed;
                 subListItem.addEventListener('click', () => fetchRandomDogImage(breed, subBreed));
                 subList.appendChild(subListItem);
             });
             listItem.appendChild(subList);
             breedList.appendChild(listItem);
         }
     }
 })
 .catch(error => console.error('Error fetching breed list:', error));

// Fetch and display a random dog image for the selected breed or sub-breed
function fetchRandomDogImage(breed, subBreed = '') {
 const dogImage = document.getElementById('dogImage');
 let apiUrl = `https://dog.ceo/api/breed/${breed}${subBreed ? `/${subBreed}` : ''}/images/random`;

 fetch(apiUrl)
     .then(response => response.json())
     .then(data => {
         if (data.status === 'success') {
             dogImage.src = data.message;
             dogImage.alt = `Random ${subBreed ? subBreed + ' ' : ''}${breed} Dog Image`;
         } else {
             console.error('Error fetching dog image:', data.message);
         }
     })
     .catch(error => console.error('Error fetching dog image:', error));
}