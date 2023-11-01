/*JS for Intro to JavaScript*/
let pokemonRepository = (function () {
    let pokemonList = [];  /*pokemon names & stats for pokedex from API*/ 
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; //the API with pokemon information

    //Puts the pokemon onto the list of pokemon
    function add(pokemon) {
        if (
            typeof pokemon === "object" && 
            "name" in pokemon 
            // === is a strict equality comparison 
            // && 'logical AND' operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.
        ) {
            pokemonList.push(pokemon);
        }   else {
            console.log("pokemon is not correct");
        }
    }

    //Gets all entries listed in the pokedex
    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        //array is = to '.pokemon-list', the class name for tag <ul>
        let listpokemon = document.createElement("li");
        //create a list item for the <ul> tag in HTML file
        let button = document.createElement("button"); //create button(s)
            button.innerText = pokemon.name; //adds textual context (name of pokemon)
            button.classList.add("button"); //adds CSS elements to button(s)
            listpokemon.appendChild(button);
		    pokemonList.appendChild(listpokemon);
            button.addEventListener("click", function(event) {
                showDetails(pokemon)});
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showModal(title, text) { //the showModal function uses the document method querySelector(). 
        let modalContainer = document.querySelector('#modal-container'); //returns the first element w/i the document that matches #modal-container
  	        modalContainer.innerHTML = ' ';  // Clear all existing modal content

  	    let modal = document.createElement('div');
  	        modal.classList.add('modal'); // Add the new modal content

        let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'Close';

        let titleElement = document.createElement('h1');
            titleElement.innerText = title;

        let contentElement = document.createElement('p');
            contentElement.innerText = text;

            modal.appendChild(closeButtonElement);
            modal.appendChild(titleElement);
            modal.appendChild(contentElement);
            modalContainer.appendChild(modal); //these are all the children we addressed in the CSS

            modalContainer.classList.add('is-visible');
    }

    document.querySelector('#show-modal').addEventListener('click', () => {
        showModal('modal title', 'this is the modal'); //targets the button element in the #show-modal id
    });
  

    function showDetails(item){
        pokemonRepository.loadDetails(item).then(function () { //shows all of the loadDetails items
            showModal(item); //logs to console
        });
        //pokemonRepository.showModal(item).then(function () { //not sure if this is needed here; placeholder
            //console.log(item);
        //});
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

//console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {//a block is w/i {}
        pokemonRepository.addListItem(pokemon);
    
            //if (pokemon.height >=2){
                //document.write(pokemonList[i].ndex + pokemonList[i].name + pokemonList[i].height + pokemonList[i].types + "- Wow, this is big!");
                //document.write('<p> ' + pokemon.ndex + pokemon.name + ": " + pokemon.height + "m," + pokemon.types + "- Wow, this is big!" + ' </p>')
    
            //} else if (pokemon.height <2 && pokemon.height >=1){
                //document.write(pokemonList[i].ndex + pokemonList[i].name + pokemonList[i].height + pokemonList[i].types + "- This is an average size.");
                //document.write('<p> ' + pokemon.ndex + pokemon.name + ": " + pokemon.height + "m," + pokemon.types + "- This is an average size." + ' </p>')
    
            //} else {
                //document.write(pokemonList[i].ndex + pokemonList[i].name + pokemonList[i].height + pokemonList[i].types + "- Oh! This is very small.");
                //document.write('<p> ' + pokemon.ndex + pokemon.name + ": " + pokemon.height + "m," + pokemon.types + "- Oh! This is very small." + ' </p>')
            //}
        });
    });
