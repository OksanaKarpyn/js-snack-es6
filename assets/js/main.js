let arrayOggetti = [{
        nome: 'prima bici',
        peso: 10
    },
    {
        nome: 'seconda bici ',
        peso: 15
    },
    {
        nome: 'terza bici ',
        peso: 20
    }
]
let item = document.querySelector('.item');
let pesoMinimo = arrayOggetti[0].peso;
for (let i = 0; i < arrayOggetti.length; i++) {
    let {
        peso,
        nome
    } = arrayOggetti[i];
    // console.log(peso,nome)
    if (pesoMinimo == arrayOggetti[i].peso) {
    item.innerHTML += `<div class="">${peso}${nome}</div>`
        // console.log(pesoMinimo)
    }
}



// -----------2esercizio----------
// let random = Math.floor(Math.random() * 10) + 1;
// let arraySquadre = [{
//         nome: 'prima squadra',
//         punti: random,
//         perse: random
//     },
//     {
//         nome: 'seconda squadra',
//         punti: random,
//         perse: random

//     },
//     {
//         nome: 'terza squadra',
//         punti: random,
//         perse: random

//     }
// ]
// for (let i = 0; i < arraySquadre.length; i++) {

// }