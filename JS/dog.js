console.log(`dog.js is loaded...`);

const url = `https://dog.ceo/api/breeds/image/random`;

// ASYNCRONOUS CODE!

fetch(url)                                                  // Do the request.
  .then((response) => response.json())                      // Parse the response body as a JSON.
  .then((jsonResponse) => { 
    
    console.log(jsonResponse);                              // Handle the response.

    const img = document.createElement(`img`);
    img.src = jsonResponse.message;
    document.body.append(img);
})              
