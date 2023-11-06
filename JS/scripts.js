/*JS for Intro to JavaScript*/
let pokemonRepository = (function () {
    let pokemonList = [];  /*pokemon names & stats for pokedex from API*/ 
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; //the API with pokemon information


    function add(pokemon) { //Puts the pokemon onto the list of pokemon
        if (
            typeof pokemon === "object" && // === is a strict equality comparison
            "name" in pokemon && // && 'logical AND' operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.
            "detailsUrl" in pokemon  
        ) {
            pokemonList.push(pokemon);
        }   else {
            console.log("pokemon is not correct");
        }
    }


    function getAll() { //Gets all entries listed in the pokedex
        return pokemonList;
    }


    function showModal(pokemon) { //the showModal function uses the document method querySelector(). 
        let modalBody = document.querySelector('.modal-body')
            modalBody.innerHTML = '';
    
        let modalTitle = document.querySelector('.modal-title')
            modalTitle.innerHTML = '';

        let nameElement = document.createElement('h1');
            nameElement.innerText = pokemon.name;

        let spriteImage = document.createElement('img');
            spriteImage.classList.add('modal-img');
            spriteImage.src = pokemon.imageURL;
            //spriteImage.src = pokemon.imageURL           
            
        let heightElement = document.createElement('p');
            heightElement.innerText = "height" + ": " + pokemon.height;
            
            modalTitle.appendChild(nameElement);
            modalBody.appendChild(spriteImage);
            modalBody.appendChild(heightElement);
    }


    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list"); //array is = to '.pokemon-list', the class name for tag <ul>
        
        let listpokemon = document.createElement("li"); //create a list item for the <ul> tag in HTML file
            listpokemon.classList.add('list-group-item'); // creating li element inside the ul
            listpokemon.classList.add('col-12');
            listpokemon.classList.add('col-md-4'); 
        
        let button = document.createElement('button'); //create button(s)
            button.classList.add('btn');
            button.classList.add('btn-block')
            button.setAttribute('data-target', '#modalCenter'); // bootstrap attr
            button.setAttribute('data-toggle', 'modal'); // bootstrap attr
            button.innerText = pokemon.name; //adds textual context (name of pokemon)
            button.classList.add('button-class');

            listpokemon.appendChild(button); // Append button to the li listpokemon as its child
            pokemonList.appendChild(listpokemon); // Append the li listpokemon to the ul pokemonList as its child

            button.addEventListener('click', function() { // Add event listener to button with the showDetails function
                    showDetails(pokemon);
            });        
    }


    async function loadList() {
        try {
            const response = await fetch(apiUrl);
            const json = await response.json();
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                    //imageUrl: item.spriteImage
                };
                add(pokemon);
            });
        } catch (e) {
            console.error(e);
        }
    }


    async function loadDetails(item) {
        let url = item.detailsUrl;
        try {
            const response = await fetch(url);
            const details = await response.json();
            // Now we add the details to the item
            item.imageURL = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        } catch (e) {
            console.error(e);
        }
    }

  
    function showDetails(pokemon){
        pokemonRepository.loadDetails(pokemon).then(function () { //shows all of the loadDetails items
            showModal(pokemon); //logs to console
        });
    }
   

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal //pretty sure showModal needs to be returned; note to check in
    };
})();


pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {//a block is w/i {}
        pokemonRepository.addListItem(pokemon);
        });
    });

  
    let form = document.querySelector('.form-inline')
    , input = document.createElement('input');
  function searchFunction() {
      let pokemon, item, modalBody, modalTitle, listPokemon;
      for (modalBody = 0,
      pokemon = input.value.toUpperCase(),
      item = document.getElementsByClassName('list-group-item'); modalBody < item.length; modalBody++)
          (modalTitle = (listPokemon = item[modalBody].getElementsByClassName('button-class')[0]).innerText).toUpperCase().indexOf(pokemon) > -1 ? item[modalBody].style.display = '' : item[modalBody].style.display = 'none'
  }
  input.classList.add('form-control'),
  input.setAttribute('type', 'text'),
  input.setAttribute('placeholder', 'Search'),
  input.setAttribute('aria-label', 'Search'),
  form.appendChild(input),
  input.addEventListener('keyup', searchFunction);