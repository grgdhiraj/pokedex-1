var allPokeMoves = [];

async function pokeData(param) {
    fetch(`https://pokeapi.co/api/v2/pokemon/` + param.toLowerCase())
        .then(res => res.json())
        .then(pokemon => {

//VARS
            let randomMoves = [];
            let movesToDisplay = [];
            const SPRITE = pokemon.sprites.front_default;
            allPokeMoves = pokemon.moves;
            const EVOLUTIONLINK = pokemon.species.url;
            console.log("evo: "+EVOLUTIONLINK);

//FUNCTION CALLS
            randomGenerator(randomMoves);
            insertMoves(randomMoves, movesToDisplay);

//CONSOLE

//TO HTML
            document.getElementById("sprite").src = SPRITE;
            document.getElementById("name").innerHTML = pokemon.name;
            document.getElementById("id").innerHTML = pokemon.id;

            for (var i = 0; i < 4; i++) {
                document.getElementById('move' + [i]).innerHTML = movesToDisplay[i];
            }

            return EVOLUTIONLINK;

        })
        .catch(function (err) {
            console.log(err, err.response);
        });
}


function randomGenerator(param) {
    while (param.length < 4) {
        var rand = Math.round(Math.random() * allPokeMoves.length);
        if (param.indexOf(rand) === -1) {
            param.push(rand);
        }
    }
    return param;
}

function insertMoves(argOne, argTwo) {
    for (var i = 0; i < argOne.length; i++) {
        argTwo.push(allPokeMoves[argOne[i]].move.name);
    }
    return argTwo;
}

async function pokeEvolution() {


}

document.getElementById('run').addEventListener("click", function () {

    let userInput = document.getElementById('input').value;
    //pokeData(userInput).then(r => alert(r));
    let aPokemon = new Pokemon('Pikachu', '25',  )

});

class Pokemon {
    constructor(name, id, moves, evolution) {
        this.name = name;
        this.id = id;
        this.moves = moves;
        this.evolution = evolution;
    }
}
