/*JS for Intro to JavaScript*/

let pokemonlist = [ //pokemon names & stats for pokedex
    {
        name: 'bulbasaur', 
        height: '.711m',  
        types: ['grass', 'poison'], 
        ndex: 0001
    },
    {
        name: 'ivysaur',
        height: '1m',
        types: ['grass', 'poison'],
        ndex: 0002
    },
    {
        name: 'venusaur',
        height: '2m',
        types: ['grass', 'poison'],
        ndex: 0003
    }
];

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >=2){
        document.write(pokemonList[i].name + pokemonList[i].height + "- Wow, this is big!");
    }else if (pokemonList[i].height <2 && pokemonList[i].height >=0){
        document.write(pokemonList[i].name + pokemonList[i].height + "- This is an average size.");
    } else {
        document.write(pokemonList[i].name + pokemonList[i].height + "- Oh! This is very small.");
    }
    }