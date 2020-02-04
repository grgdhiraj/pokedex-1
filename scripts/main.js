class Pokemon {
    constructor(allMoves, id, name, sprite, moveSelection, evoLink) {
        this.allMoves = allMoves;
        this.sprite = sprite;
        this.name = name;
        this.id = id;
        this.moveSelection = moveSelection;
        this.evoLink = evoLink;
    }
//FUNCTIONS
}




let aPokemon = new Pokemon();


//ONCLICK EVENT
document.getElementById('run').addEventListener("click", async function () {
    
    let userInput = document.getElementById('input').value;
    await pokeData(userInput);
    let data =  await pokeEvolutionChain(pokeData(userInput));
    console.log(data);
});


//FETCHES
async function pokeData(param) {
    fetch(`https://pokeapi.co/api/v2/pokemon/` + param.toLowerCase())
        .then(res => res.json())
        .then(pokemon => {
    //VARS
            aPokemon.allMoves = pokemon.moves;
            aPokemon.sprite = pokemon.sprites.front_default;
            aPokemon.name = pokemon.name;
            aPokemon.id = pokemon.id;
            aPokemon.evoLink = pokemon.species.url;

    //FUNCTION CALLS
            let randomMoves = randomGenerator();
            aPokemon.moveSelection = insertMoves(randomMoves);
            toHTML();
            pokeEvolutionChain(aPokemon.evoLink);

        })
        .catch(function (err) {
            console.log(err, err.response);
        });
}

async function pokeEvolutionChain(param) {
    await fetch(param)
        .then(res => res.json())
        .then(evoChain => {

            //previousEvolution(chainID);

            return evoChain.evolution_chain.url;


        })
        .catch(function (err) {
            console.log(err, err.response);
        });
}

async  function previousEvolution(param) {

}

//ALL OTHER FUNCTIONS
function randomGenerator() {
    let randomMoves = [];
    while (randomMoves.length < 4) {
        var rand = Math.round(Math.random() * aPokemon.allMoves.length);
        if (randomMoves.indexOf(rand) === -1) {
            randomMoves.push(rand);
        }
    }
    return randomMoves;
}

function insertMoves(randMoves) {
    let movesToDisplay = [];
    for (var i = 0; i < randMoves.length; i++) {
        movesToDisplay.push(aPokemon.allMoves[randMoves[i]].move.name);
    }
    return movesToDisplay;
}

async function toHTML() {
    document.getElementById("sprite").src = aPokemon.sprite;
    document.getElementById("name").innerHTML = aPokemon.name;
    document.getElementById("id").innerHTML = aPokemon.id;
    for (var i = 0; i < 4; i++) {
        document.getElementById('move' + [i]).innerHTML = aPokemon.moveSelection[i];
    }
}
