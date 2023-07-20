// const sendRequest = () =>
//     fetch('http://pokeapi.co/api/v2/pokemon/1')
//         .then(resp => resp.json());


// const runPromise = (param) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (param) {
//                 console.log('Error');
//                 reject();
//             } else {
//                 console.log('Success');

//                 resolve();
//             }
//         }, 2000)
//     })
// }

// // sendRequest().then((responce) => {
// //     console.log(responce);
// // }).catch(error => {
// //     console.log('Error caght: ', error);
// // });

// (async () => {
    
//     const responce = await sendRequest();
//     console.log(responce);
// })();

const fetchPokemon = (indexPokemon) => {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            fetch(`http://pokeapi.co/api/v2/pokemon/${indexPokemon}`)
                .then(resp => resp.json())
                .then((pokemon) => resolve(pokemon));
        }, 2000);
    });
}

const runPromise = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (param) {
                console.log('Error');
                reject();
            } else {
                console.log('Success');

                resolve();
            }
        }, 2000)
    })
}

(async () => {
    
    const pokemon1 = await fetchPokemon(1);
    console.log(pokemon1);

    const pokemon2 = await fetchPokemon(2);
    console.log(pokemon2);

    const pokemon3 = await fetchPokemon(3);
    console.log(pokemon3);
})();