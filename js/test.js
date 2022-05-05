// const filter = (array, test) => {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// }


// console.log(filter([1, 2, 3, 4, 5], value => value >= 3));
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], value => value < 5));

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true, },
//   { name: 'grapes', quantity: 150, isFresh: false, },
//   { name: 'bananas', quantity: 100, isFresh: true, },
// ];


// console.log(filter(fruits, fruit => fruit.quantity >= 120));

// const fnA = function (parametr) {
//   const innerVeriable = 'Это вызывает функцию fnA';

//   const innerFunction = function () {
//     console.log(parametr);
//     console.log(innerVeriable);
//     console.log('Это вызов innerFunction');
//   };

//   return innerFunction;
// }

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готовит ${dish}`);
// }

// makeDish('Mango', 'чай');
// makeDish('Mango', 'суп');
// makeDish('Mango', 'котлеты');

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };

//   return makeDish;
// }

// const mango = makeSheff('Mango');
// console.dir(mango);

// mango('чай');
// mango('суп');
// mango('котлеты');

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function(number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// Change code below this line

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors);