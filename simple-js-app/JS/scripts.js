/*JS for Intro to JavaScript*/
let pokemonRepository = (function () {
    let pokemonList = [ /*pokemon names & stats for pokedex from API*/ ];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/'; //the API with pokemon information

    //Puts the pokemon onto the list of pokemon
    function add(pokemon) {
        if (
            // === is a strict equality comparison 
            // && 'logical AND' operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.
            typeof pokemon === "object" && 
            "name" in pokemon &&
            "detailsURL" in pokemon
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
        let listItem = document.createElement("li");
        //create a list item for the <ul> tag in HTML file
        let button = document.createElement("button"); //create button(s)
            button.innerText = pokemon.name; //adds textual context (name of pokemon)
            button.classList.add("button"); //adds CSS elements to button(s)
            button.addEventListener("click", function () {
                showDetails(pokemon)});
            listItem.appendChild(button);
		    pokemonList.appendChild(listItem)
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                    height: item.height
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
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon){
        loadDetails(pokemon).then(function() { //shows all of the loadDetails items
            console.log(pokemon); //logs to console
        });
    }

    
   
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

//console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
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
