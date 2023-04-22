fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const $container = document.getElementById("card-container");
    const characters = data.results;
    for (let i = 0; i < characters.length; i++) {
      
      $container.innerHTML += `
        <div class="card">
            <img src="${characters[i].image}">
            <p class="character-name">${characters[i].name}</p>
            <p>${characters[i].gender}</p>
            <p>${characters[i].species}</p>
            <p>${characters[i].status}</p>
        </div>`;
    }
  });