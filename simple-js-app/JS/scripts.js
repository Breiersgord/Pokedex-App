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

    let pokemonList2 = [ //pokemon names & stats for pokedex   
        {
            name: ' charmander' , 
            height: .6,  
            types: ' fire', 
            ndex: ' 0004 '
        },
        {
            name: ' charmeleon',
            height: 1.1,
            types: ' fire',
            ndex: ' 0005 '
        },
        {
            name: ' charizard',
            height: 1.7,
            types: [' fire', ' flying '],
            ndex: ' 0006 '
        }
    ];
})();

// printArrayDetails function declaration
function printArrayDetails(list){
    for (let i = 0; i < pokemonList.length; i++) {
        if (pokemonList[i].height >=2){
            //document.write(pokemonList[i].ndex + pokemonList[i].name + pokemonList[i].height + pokemonList[i].types + "- Wow, this is big!");
            document.write('<p> ' + pokemonList[i].ndex + pokemonList[i].name + ": " + pokemonList[i].height + "m," + pokemonList[i].types + "- Wow, this is big!" + ' </p>')

        } else if (pokemonList[i].height <2 && pokemonList[i].height >=1){
            //document.write(pokemonList[i].ndex + pokemonList[i].name + pokemonList[i].height + pokemonList[i].types + "- This is an average size.");
            document.write('<p> ' + pokemonList[i].ndex + pokemonList[i].name + ": " + pokemonList[i].height + "m," + pokemonList[i].types + "- This is an average size." + ' </p>')

        } else {
            //document.write(pokemonList[i].ndex + pokemonList[i].name + pokemonList[i].height + pokemonList[i].types + "- Oh! This is very small.");
            document.write('<p> ' + pokemonList[i].ndex + pokemonList[i].name + ": " + pokemonList[i].height + "m," + pokemonList[i].types + "- Oh! This is very small." + ' </p>')
        }
    }
}

printArrayDetails(pokemonList); // executes the function using ‘pokemonList‘ as its input
printArrayDetails(pokemonList2); // executes the function using ‘pokemonList2‘ as its input