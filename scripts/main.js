//import moves.js;

document.getElementById('run').addEventListener("click", function () {

    let userInput = document.getElementById('input').value;

    fetch(`https://pokeapi.co/api/v2/pokemon/` + userInput.toLowerCase())
        .then(res => res.json())
        .then(pokemon => {
            console.log(pokemon);
            const SPRITE = pokemon.sprites.front_default;
            document.getElementById("image").src = SPRITE;
            console.log(SPRITE);
        })
        .catch(function (err) {
            console.log(err, err.response);
        });
});