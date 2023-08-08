/*JS for Intro to JavaScript*/
let pokemonRepository = (function () {
    let pokemonList = [ //pokemon names & stats for pokedex   
        {
            name: ' bulbasaur' , 
            height: .7,  
            types: [' grass', ' poison '], 
            ndex: ' 0001 '
        },
        {
            name: ' ivysaur',
            height: 1,
            types: [' grass', ' poison '],
            ndex: ' 0002 '
        },
        {
            name: ' venusaur',
            height: 2,
            types: [' grass', ' poison '],
            ndex: ' 0003 '
        }
    ];

    //Puts the pokemon onto the list of pokemon
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    //Gets all entries listed in the pokedex
    function getAll() {
        return pokemonList;
    }
   
    return {
        add: add,
        getAll: getAll
    };
})();

// printArrayDetails function declaration
function printArrayDetails(list){
    pokemonRepository.getAll().forEach(function(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        //array is = to '.pokemon-list', the class name for tag <ul>
        let listItem = document.createElement('li');
        //create a list item for the <ul> tag in HTML file
        let button = document.createElement('button'); //create button(s)
            button.innerText = pokemon.name; //adds textual context (name of pokemon)
            button.classList.add('button'); //adds CSS elements to button(s)

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
