//GLOBAL VARIABLES
let userInput = document.getElementById('input').value;


    fetch(`https://pokeapi.co/api/v2/pokemon/` + userInput)
        .then(res => res.json())
        .then(pokemon => {
            console.log(pokemon);
            console.log(userInput);
        })
        .catch(function (err) {
            console.log(err, err.response);
        });
