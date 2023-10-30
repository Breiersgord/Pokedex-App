/*JS for Intro to JavaScript*/
let pokemonRepository = (function () {
    let pokemonList = [ /*pokemon names & stats for pokedex from API*/ ];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; //the API with pokemon information

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
                console.log(pokemon)});

            listItem.appendChild(button);
		    pokemonList.appendChild(listItem)

    }

    function showDetails(pokemon){
        console.log(pokemon)
    }

    
   
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
    };
})();

// printArrayDetails function declaration
function printArrayDetails(pokemonRepository){
    pokemonRepository.getAll().forEach(function(pokemon) {//a block is w/i {}
        
        
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
}

printArrayDetails(pokemonRepository); // executes the function using ‘pokemonList‘ as its input
