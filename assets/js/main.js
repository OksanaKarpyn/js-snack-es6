// ---------esercizio 1----------------

let arrayOggetti = [{
    nome: 'prima bici',
    peso: 30
}, {
    nome: 'seconda bici ',
    peso: 15
}, {
    nome: 'terza bici ',
    peso: 20
}]
let item = document.querySelector('.item')
let minimo = arrayOggetti[0];
arrayOggetti.forEach((element) => {

    if (element.peso < minimo.peso) {
        minimo = element;
    }
})
const {
    nome,
    peso
} = minimo;
console.log(nome, peso)
item.innerHTML += ` la ${nome} ha il peso ${peso}`
// console.log(minimo.peso,minimo.nome)


// const sorted = arrayOggetti.sort((a, b) => {
//     if (a.peso > b.peso) {
//         return 1;
//     }
//     if(a.peso < b.peso){
//         return -1;
//     }
//     return 0;
// })
// let { nome,peso}=sorted[0]

// console.log(nome,peso)




// -----------2esercizio----------
// let random = Math.floor(Math.random() * 10) + 1;
let arraySquadre = [{
    nome: 'prima squadra',
    punti: 0,
    perdite: 0
}, {
    nome: 'seconda squadra',
    punti: 0,
    perdite: 0

}, {
    nome: 'terza squadra',
    punti: 0,
    perdite: 0

}]
const squadrePerdite = [];
arraySquadre.forEach((element, i) => {
    element.punti = Math.floor(Math.random() * 10) + 1;
    element.perdite = Math.floor(Math.random() * 5) + 1;
    let {
        nome,
        perdite
    } = element
    squadrePerdite.push({
        nome,
        perdite
    })
});

console.log(squadrePerdite)
// console.log(arraySquadre);
// // let squadrePerdite=[];
// // arraySquadre.forEach(element=>{
// //     squadrePerdite.push({nome:element.nome,perdite:element.perdite})
// // })
// const squadrePerdite=arraySquadre.map(element=>{
//     return {nome:element.nome,perdite:element.perdite};
// })

// console.log(squadrePerdite)

// ----------esercizio 3-------
/* Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter. */

let arrCitta = [
    'milano',
    'roma',
    'verona',
    'torino',
    'firenze',
    'trieste'
];
let newCitta = []
let min = parseInt(prompt(`inserisi il numero tra 0 e ${arrCitta.length-1}`));
let max = parseInt(prompt(`inserisi il  numerotra 0 e  ${arrCitta.length-1}`));
// arrCitta.forEach((element, i) => {
//     if (min < i && max > i) {
//         newCitta.push(element)
//     }
// })

// let newAraayCitta = arrCitta.filter((element, i) => {
//     if (min < i && max > i) {
//         return element
//     }
// })

function myfunction(parArray, valoreMin, valoreMax) { //parArray=arrCitta,valoreMax= max,valoreMin=min
    let newarrCitta = parArray.filter((element, i) => {
        if (valoreMin < i && valoreMax > i) {
            return element
        }

    })
  return newarrCitta
}

myfunction(arrCitta, min, max);
console.log(myfunction(arrCitta, min, max) );