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

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];

const getTotalBalanceByGender = (users, gender) => {
    return users.filter(user => user.gender === gender).reduce((total, user) => { return total + user.balance}, 0)
};

console.log(getTotalBalanceByGender(users, 'male'));
console.log(getTotalBalanceByGender(users, 'female'));