console.log(`dog3.js is loaded...`);

 fetch('https://dog.ceo/api/breeds/list/all')
 .then(response => response.json())
 .then(data => {
     const breedList = document.getElementById('breedList');
     
     for (const breed in data.message) {
         if (data.message[breed].length === 0) {
            
             const listItem = document.createElement('li');
             listItem.textContent = breed;
             listItem.addEventListener('click', () => fetchRandomDogImage(breed));
             breedList.appendChild(listItem);
         } else {
             
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