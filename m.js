const matn = "  mega kofe ekan  ";

const array = ["bek", "zod", "qul",4,'bola'];

// const z = [...array,...number]
array.sort();

const kalkulyator = {
  natija: 0,
  konsol() {
    return `${this.natija}`;
  },
  qoshadi(son) {
    return this.natija + son;
  },
};
const natija = kalkulyator.qoshadi(10);
console.log(kalkulyator.konsol());

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

// const people = [
//   { name: "ali", city: "tashkent" },
//   { name: "vali", city: "samarkand" },
//   { name: "gali", city: "tashkent" },
// ];

// const byCity = people.reduce((acc, item) => {
//   if(!acc[item.city]) acc[item.city] = []
//   acc[item.city].push(item.name)
//   return acc
// }, {})

// console.log(byCity)

// function factorial(n){
//   if(n<=1) return 1

// return  n * factorial(n-1)
//   console.log(n)
// }
//  console.log(factorial(4))

// function once(fn) {
//   let called = false;
//   let result;
//   return function (...item) {
//     if (!called) {
//       called = true;
//       result = fn(...item);
//     }
//     return result;
//   };
// }

// function partition(array, callback = (e) => e) {
//   let trueArray = [];
//   let falseArray = [];
//   for (const element of array) {
//     if (callback(element)) {
//       trueArray.push(element);
//     } else {
//       falseArray.push(element);
//     }
//   }
//   return [trueArray, falseArray];
// }

// const array = [ 1,2, 4 , 3, 2]

// function replaceItem(arr, item , replace ){
//     for (const [i, element] of arr.entries()) {
//         if (element === item) {
//             arr[i] = replace
//         }
//     } return arr
// }

// function replaceItems(arr, item, replace) {
// const other = [...arr]

//   for (const [i, element] of other.entries()) {
//     if (element === item) {
//       other[i] = replace;
//     }
//   }
//   return other;
// }

// console.log(replaceItems(array,2,'a'))
// console.log(array)

// const soz= 'javascript'
// console.log(soz.slice(0,1).toUpperCase())

// const data = [
//   {
//     type: 'food',
//     price: 130,
//   },
//   {
//     type: 'clothes',
//     price: 7300,
//   },
//   {
//     type: 'other',
//     price: 1400,
//   },
// ];

// function calculatePrice(orders) {
//     // your code goes here
// const total = orders.reduce((acc, narx) => {
//   return acc + narx.price}, 0)
//   return total
// }

// console.log(calculatePrice(data));

// const data = [
//   {
//     firstName: "Gabriel",
//     lastName: "X.",
//     country: "Monaco",
//     continent: "Europe",
//     age: 49,
//     language: "PHP",
//   },

//   {
//     firstName: "Odval",
//     lastName: "F.",
//     country: "Mongolia",
//     continent: "Asia",
//     age: 38,
//     language: "Python",
//   },

//   {
//     firstName: "Emilija",
//     lastName: "S.",
//     country: "Lithuania",
//     continent: "Europe",
//     age: 19,
//     language: "Python",
//   },

//   {
//     firstName: "Sou",
//     lastName: "B.",
//     country: "Japan",
//     continent: "Asia",
//     age: 49,
//     language: "PHP",
//   },
// ];

// function getMostSenior(humans) {
//   // your code goes here
//   const senior = humans.reduce((acc, item) => {
//     return Math.max(acc, item.age);
//   }, 0);
//   const total = humans.filter(e => e.age === senior);
//   return total;
// }

// const result = getMostSenior(data);
// console.log(result)

// const obj = {
//   a: {
//     b: {
//       c: {
//         d: "Hello!",
//       },
//     },
//   },
// };

// function optionalChaining(obj, chain) {
//   for (const key of chain) {
//     if (obj === null || obj === undefined) {
//       return undefined;
//     }

//     if (typeof obj !== 'object') {
//       return undefined
//     }

//     if (!(key in obj)) {
//       return undefined;
//     }
//     obj = obj[key];
//   }
//   return obj;
// }
// console.log(optionalChaining(obj,  ["a", "b",  "d", "e"]));

// function sum(...args) {

//   const number = []

//   for (const item of args) {
//     if (typeof item === "number" || item === true) {

//       number.push(item * 1)
//     }
//   }

//   const total = number.reduce((acc,current) => {
//     return acc + current
//   },0)
// return total
// }

// console.log(sum(1, "fqwfqwf", {}, [], 3, 4, 2, true, false));

// class Character {
//     constructor(name, hp){
//         this.name = name
//         this.hp = hp
//     }
// }
// class Warrior extends Character {
//     constructor(name){
//     super(name, 65)
//     this.iq = 130
//     }
// }
// const nadir = new Warrior('nador')
// console.log(nadir)

// class Calc {
//   #result = 0;
//   constructor() {}
//   add(amount) {
//     this.#result += amount;
//     return this;
//   }
//   sub(amount) {
//     this.#result -= amount;
//     return this
//   }
//   result() {
//     return this.#result;
//   }
// }

// class Addition {
//   constructor(num) {
//     this.num = num;
//   }

//   add(...nums) {
//     const sum = (a, b) => a + b;
//     return this.num + nums.reduce(sum);
//   }
// }

// const kengaytirilgan = Addition.prototype.add

// Addition.prototype.add = function (...args) {
//   console.log("called")
//   return kengaytirilgan.call(this, ...args)
// }

// function isEmpty(obj) {
//   if (Object.keys(obj).length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isEmptyWithProtos(obj) {

// let current = obj
// while (current !== Object.prototype && current !== null) {
//   if (!(Object.keys(current).length === 0)){
//     return false
//   }
//   current = Object.getPrototypeOf(current)
// } return true

//   //  if (Object.getPrototypeOf(obj) === Object.prototype) {
//   //     return true;
//   //   } else if (
//   //     Object.keys(obj).length === 0 ||
//   //     Object.keys(Object.getPrototypeOf(obj)).length === 0
//   //   ) {
//   //     return true
//   //   } else {
//   //     return false
//   //   }
// }

// class news {
//   constructor(name, son) {
//     this.name = name;
//     this.son = son;
//   }
// }
// const wa = new news("aka", 21);

// function getLanguagesStatistic(reviews) {
//   const result = reviews
//     .filter((p) => p.year === 2019)
//     .reduce((acc, p) => {
//       if (!acc[p.language]) acc[p.language] = 0;
//       acc[p.language]++;
//       return acc;
//     }, {});
//   return result;
// }

// function merge(...objects){
//   let spread = {}
//   for (const element of objects) {
//     spread = {
//       ...spread,
//       ...element
//     }
//   }
//   return spread
// }
// console.log(
//   merge(
//     {
//       name: "John",
//       age: 22,
//     },
//     {
//       surname: "Klein",
//       age: 20,
//       profession: "student",
//     },
//     {
//       profession: "frontend developer",
//       country: "USA",
//     },
//   ),
// );

// function deepEqual(obj1, obj2) {
//   if (obj1 === obj2) {
//     return true;
//   }

//   if (typeof obj1 !== "object" || typeof obj2 !== "object") {
//     return false;
//   }

//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (const element of keys1) {
//     if (!(element in obj2)) {
//       return false;
//     }

//     if (!deepEqual(obj1[Object.keys(keys1)], obj2[Object.keys(keys2)])) {
//       return false;
//     }
//   }
//   return true;
// }

// const firstObject = {
//   a: {
//     b: {
//       c: 1,
//       d: "string",
//       e: {
//         num: 1,
//       },
//     },
//   },
// };

// const secondObject = {
//   a: {
//     b: {
//       e: {
//         num: 1,
//       },
//       d: "string",
//       c: 1,
//     },
//   },
// };

// console.log(deepEqual(firstObject, secondObject));

// function arraysToCsv(data) {
//   for (let p of data) {
//     for (let d of p) {
//       if (typeof d !== "number" && typeof d !== "string") {
//         throw new Error("Unexpected value");
//       }
//     }
//   }
//   const element = data.map(p => p.map(d => {
//           if (typeof d === "string" && d.includes(",")) {
//             return '"' + d + '"';
//           } return d
//   }).join(",") )
//   const result = element.join('\n')
//   return result
// }

// function isHexColor(str){
//   return /^#[0-9a-f]{6}$/i.test(str)
// }

// function isUzPhone(str) {
//   // shu yerga yozing
//   str = str.replace(/ /g, "");
//   return /^\+998[0-9]{9}$/.test(str)
// }

// function slugify(title) {
//   // shu yerga yozing
//   title = title.toLowerCase();
//   title = title.trim();
//    title.replace(/\W+/, "-");
//    return title.replace(/\W$/,'')
// }

// function Book(name, author, year) {
//   this.name = name;
//   this.author = author;
//   this.year = year;
//   this.reader = null;
// }
// Book.prototype.isAvailable = function () {
//   return this.reader === null;
// };
// Book.prototype.takeBook = function (readerName) {
//   if (this.isAvailable()) {
//     this.reader = readerName;
//     return true;
//   }
//   return false;
// };

// Book.prototype.returnBook = function () {
//   if (!this.isAvailable()) {
//     this.reader = null;
//     return true;
//   }
//   return false;
// };
// Book.prototype.changeBookName = function (newBookName) {
//   if (typeof newBookName === "string" && newBookName !== "") {
//     this.name = newBookName;
//     return true;
//   }
//   return false;
// };
// Book.prototype.changeAuthorName = function (newAuthorName) {
//   if (typeof newAuthorName === "string" && newAuthorName !== "") {
//     this.author = newAuthorName;
//     return true;
//   }
//   return false;
// };
// Book.prototype.getCurrentReader = function () {
//   return this.reader;
// };

// Object.create = function (proto, propertiesObject) {
//   // javob kodini shu yerga yozing
//   if (typeof proto !== 'object' || proto === undefined) {
//     throw new TypeError()
//   }
//   const obj = {}
//   Object.setPrototypeOf(obj,proto)
//   if (propertiesObject) {
//     Object.defineProperties(obj,propertiesObject)
//   }
//   return obj
// };

// class AttemptsLimitExceeded extends Error {
//   constructor() {
//     super("Max attempts limit exceed");
//     this.name = "AttemptsLimitExceeded";
//   }
// }

// class NotFoundError extends Error {
//   constructor() {
//     super("Not found");
//     this.name = "NotFoundError";
//   }
// }

// class TemporaryError extends Error {
//   constructor() {
//     super("TemporaryError");
//     this.name = "TemporaryError";
//   }
// }
// function getRepeatableData(getData, key, maxRequestsNumber) {
//   // Your code here...
//   let attempts = 0;

//   while (attempts < maxRequestsNumber || maxRequestsNumber === undefined) {
//     try {
//       return getData(key);
//     } catch (error) {
//         if (error instanceof NotFoundError) {
//             throw error
//         }
//         if (error instanceof TemporaryError) {
//             attempts ++
//         }
//     }
//   } throw new AttemptsLimitExceeded
// }

// class ExecutionError extends Error {
//   constructor(argument, e) {
//     super();
//     this.arg = argument;
//     this.name = "ExecutionError";
//     this.stack = e.stack;
//   }

//   getArgData() {
//     return this.arg;
//   }
// }

// function applyFn(dataArr, callback) {
//   // Kodingizni shu yerga yozing
//   const obj = {
//     succeeded: [],
//     errors: [],
//   };
//   for (const element of dataArr) {
//     try {
//       let result = callback(element)
//       obj['succeeded'].push(result)
//     } catch (error) {
//         let err = new ExecutionError(element,error)
//         obj['errors'].push(err)
//     }
//   }
//   return obj
// }

// function test(cb) {
//   cb(100);
// }

// test((x) => {
//   console.log(x); // 100
// });

// function getUsersInfo(onload){
// getUsersIds((ids) => {
//   const users = []
//   let count = 0
//   ids.forEach((id, index) => {
//     getUserInfo(id, (userinfo)=>{
//         users[index]= userinfo
//         count++
//         if (count=== ids.length) {
//             onload(users)
//         }
//     })
//   });
// });
// }

// class EventEmitter {
//   constructor() {
//     this.obj = {};
//   }
//   on(event, callback) {
//     if (!this.obj[event]) {
//       this.obj[event] = [];
//     }
//     this.obj[event].push(callback);
//   }
//   off(event, callback) {
//     if (this.obj[event]) {
//       let index = this.obj[event].indexOf(callback);
//       if (index !== -1) {
//         this.obj[event].splice(index, 1);
//       }
//     }
//   }
//   once(event, callback) {
//     const canceler = (...args)=>{
//       this.off(event,canceler)
//       callback(...args)
//     }
//     this.on(event,canceler)
//   }
//   emit(event, ...args) {
//     if (this.obj[event]) {
//       for (const element of this.obj[event]) {
//         element(...args);
//       }
//     }
//   }
// }

// class BroadcastEventEmitter extends EventEmitter {
//   constructor() {
//     super();
//   }
//   emit(event, ...args) {
//     if (event === "*") {
//       for (const key in this.obj) {
//         for (const element of this.obj[key]) {
//           element(...args);
//         }
//       }
//     }
//   }
// }

// function throttle(fn, throttleTime = 0) {
//   let lastTime = 0;
//   return function (...args) {
//     let now = Date.now();
//     if (now - lastTime >= throttleTime) {
//       lastTime = now;
//       fn.apply(this, args);
//     }
//   };
// }

// function debounce (fn, delay){
//   let timer
//   return function (...args){
//     clearTimeout(timer)
//     timer = setTimeout(()=> fn.apply(this,args),delay)
//   }
// }

// function parseCookie(str) {
//   // bu yerga yozin
//   let obj = {};
//   if (str.trim() === '') {
//     return obj;
//   }
//   const array = str.split(";");
//   for (let name of array) {
//     const [first, second] = name.split("=")
//     obj[first] = second;
//   }
//   return obj;
// }
// console.log(parseCookie("sdv=fd;vsd=sd"));

// function buildQuery(obj) {
//   // bu yerga yozing
//   let array = [];
//   const spread = Object.entries(obj);
//   for (let name of spread) {
//     if (name[1] !== null && name[1] !== undefined) {
//       let key = encodeURIComponent(name[0]);
//       let value = encodeURIComponent(name[1]);
//       array.push(key + "=" + value);
//     }
//   }
//   return array.join("&");
// }
// (buildQuery({ q: "olma anor" })); // → 'q=olma%20anor'
// console.log(buildQuery({ a: 1, b: null, c: 3 })); // → 'a=1&c=3'

// function withAuth(headers, token) {
//   // bu yerga yozing
//   return { ...headers, Authorization: "Bearer " + token };
// }
// const h = { Accept: "application/json" };
// console.log(withAuth(h, "abc123"));

// matchInPath(path, selector): path dagi birinchi mos tugunni qaytaring (yoki null).
// function matchInPath(path, selector) {

//   let soz = selector;
//   for (let name of path) {
//     if (selector.includes(".") || selector.includes("#")) {
//       soz = selector.slice(1);
//     }
//     for (let obj in name) {
//       if (Array.isArray(name[obj])) {
//         let spread = name[obj][0];
//         if (spread === soz) {
//           return name;
//         }
//       }

//       if (name[obj] === soz) {
//         return name;
//       }
//     }
//   }
//   return null;
// }
// const path = [
//   { tag: "span", id: "", classes: ["icon"] },
//   { tag: "button", id: "save", classes: ["btn"] },
// ];
// console.log(matchInPath(path, ".btn"));

