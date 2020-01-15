//import moves.js;

document.getElementById('run').addEventListener("click", function () {

    let userInput = document.getElementById('input').value;


    fetch(`https://pokeapi.co/api/v2/pokemon/` + userInput.toLowerCase())
        .then(res => res.json())
        .then(pokemon => {
            console.log(pokemon);
        })
        .catch(function (err) {
            console.log(err, err.response);
        });
});