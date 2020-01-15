//import moves.js;

document.getElementById('run').addEventListener("click", function () {

    let userInput = document.getElementById('input').value;

<<<<<<< HEAD
    fetch(`https://pokeapi.co/api/v2/pokemon/` + userInput)
=======

    fetch(`https://pokeapi.co/api/v2/pokemon/` + userInput.toLowerCase())
>>>>>>> f097394c8b5f37231d6e2ffef73e6777b9361577
        .then(res => res.json())
        .then(pokemon => {
            console.log(pokemon);
        })
        .catch(function (err) {
            console.log(err, err.response);
        });
});