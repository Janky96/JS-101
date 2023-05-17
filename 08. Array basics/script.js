let array = [5, 2, 7, 10, 10]

// Stampa array
console.log(array)

// Stampa elemento in posizione 1 dell'arrray
console.log(array[1])

// Stampa somma di due elementi
console.log(array[1] + array[3])

// Cambiare elemento in posizione x
array[0] = 9
console.log(array)

array.push(128)
console.log(array)

array.push(52)
console.log(array)

array.reverse()
console.log(array)

// for (let soldi = 0; soldi <= 10000; soldi = soldi + 500) {
//   console.log(soldi)
// }for (let i = 0; i < array.length; i++) {
//   array[i] = 0
// }
// let somma = 0
// for (let i = 0; i < array.length; i++) {
//   somma = somma + array[i]
// }

// console.log(somma)

// let prodotto = 1
// for (let i = 0; i < array.length; i++) {
//   prodotto = prodotto * array[i]
// }
// console.log(prodotto)

// console.log(array)
// for (let i = 0; i < array.length; i++) {
//   array[i] = 0
// }
// console.log(array)

// 1-1-2-3-5-8-13-21-34-55-89

let numA = 1
let numB = 1
console.log(numA)
console.log(numB)
for (let i = 0; i < 100; i++) {
  let numC = numB
  numB = numA + numB
  numA = numC
  console.log(numB)
}
