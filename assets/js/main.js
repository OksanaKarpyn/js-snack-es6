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
let item =document.querySelector('.item')
let minimo = arrayOggetti[0];
arrayOggetti.forEach((element) => {
 
    if (element.peso < minimo.peso){
        minimo=element;
    }
  


})
const {nome,peso}=minimo;
console.log(nome,peso)
item.innerHTML+=` la ${nome} ha il peso ${peso}`

console.log(minimo.peso,minimo.nome)

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
    punti:0,
    perdite: 0

}]
const squadrePerdite =[];
arraySquadre.forEach((element,i)=>{
    element.punti= Math.floor(Math.random() * 10) + 1;
    element.perdite= Math.floor(Math.random() * 5) + 1;
    let {nome,perdite}=element
    squadrePerdite.push({nome,perdite})
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
let arrCitta = [
    'milano',
    'roma',
    'verona',
    'torino',
    'firenze',
    'trieste'
];

