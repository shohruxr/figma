// const matn = "  mega kofe ekan  ";

// const array = ["bek", "zod", "qul",4,'bola'];

// // const z = [...array,...number]
// array.sort();

// const kalkulyator = {
//   natija: 0,
//   konsol() {
//     return `${this.natija}`;
//   },
//   qoshadi(son) {
//     return this.natija + son;
//   },
// };
// const natija = kalkulyator.qoshadi(10);
// console.log(kalkulyator.konsol());

// const it = "baa"

// it === 'it' ? console.log('vav') : console.log('yoqal')

// for (let index = 110; index >= 5; index-=2) {
// console.log(index)
// }

// let n = 6
// do {
//     console.log(n)
//     n++
// } while (n<9);

// const number = [2, 40, [83, 3], 3];

// number.forEach(function(son, index){
//     console.log(`${index} : ${son}`)
// })

// number.forEach((son) => console.log(son))

// const object = {
//   kalit: "key",
//   number: 32,
//   object: {
//     item: "none",
//     number: 0,
//   },
// };

// for (const obj in object){
//     console.log(`${obj} : ${object[obj]}`)
// }

// function salomBer(ism) {
//   return `salom ${ism}`;
// }
// function ishla(fn, value) {
//   return fn(value);
// }

// console.log(ishla(salomBer, 'ali'));

// function ikkikarra(son){
//     return function(a){
//         return son * a
//     }
// }

// const son = ikkikarra(4)
// console.log(ikkikarra(8)(9))

// function teskari(a){
//     return function nom(b){
//         return a+b
//     }
// }
// console.log(teskari(8)(9))

// function factorial(a) {
//   if (a <= 1) return 1;
//   console.log(a)
//   return a * factorial(a - 1);
// }
// console.log(factorial(4));

// function Sum(arr ){
//     let total = 0
//     for (const item of arr ){
//         if ( Array.isArray(item)){
//             total += Sum(item)
//         } else {
//             total += item
//         }
//     } return total
// }

// console.log(Sum ( [3, 40, [4,5]]))

// function lettersCount(str) {
//   str = str.toLowerCase();

//   let satr = {};

// for( let item of str)
// if(satr[item]){
// return true
// }
// } return satr

// console.log(lettersCount('saLOm sita'))

// function createObjectCalculator(a, b) {

 
//   return {
//     read(a, b) {
//      this.a = a
//      this.b = b;
//   },
//     sum() {
//       return a + b;
//     },
//     mul() {
//       return a * b;
//     },
//   };
// }

// const calculator = createObjectCalculator(1,6);
// console.log(calculator.sum());
// console.log(calculator.mul());
// calculator.read(12,34)
// console.log(calculator.sum());
// console.log(calculator.mul());


const people = [
  { name: "ali", city: "tashkent" },
  { name: "vali", city: "samarkand" },
  { name: "gali", city: "tashkent" },
];

const byCity = people.reduce((acc, item) => {
  if(!acc[item.city]) acc[item.city] = []
  acc[item.city].push(item.name)
  return acc
}, {})

console.log(byCity)