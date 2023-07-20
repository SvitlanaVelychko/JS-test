// const studentOperator = {
//     getSortedMarks: function () {
//         return this.getSortedMarks.sort(function (mark1, mark2) {
//             if (mark1 === mark2) return 0;
//             if (mark1 > mark2) return 1;

//             return -1;
//         });
//     },

//     getAverageMark: function () {
//         const marksSum = this.marks.reduce(function (acc, item) {
//             return acc + item;
//         });

//         return Math.round(marksSum / this.marks.length);
//     }
// };

// const student1 = {
//     marks: [10, 8, 3, 4, 5, 6, 2, 7, 3, 2]
// };

// const student2 = {
//     marks: [8, 2, 6, 4, 5, 6, 7, 4, 2]
// };

// Object.setPrototypeOf(student1, studentOperator);

// *ES5*
// function Person(name, gender) {
//     this.name = name;
//     this.gender = gender;
//     this.family = true;
// }

// Person.prototype.getName = function () {
//     console.log(this.name);
// };

// Person.prototype.setName = function (name) {
//     this.name = name;
//     console.log(this.name);
// };

// *ES6*

// class Person {
//     constructor (name, gender) {
//     this.name = name;
//     this.gender = gender;
//     this.family = true;
        
//     Person.personCount += 1;
//     };
    
//     static personCount = 0

//     static getPersonCount() {
//         return Person.personCount;
//     }

//     getName() {
//         console.log(this.name);
//     };

//     setName(name) {
//         this.name = name;
//         console.log(this.name);
//     };
// };

//*Захист від переназначення лічильника*
// const counterFieldName = Symbol('personCount');

// class Person {
//     constructor (name, gender) {
//     this.name = name;
//     this.gender = gender;
//     this.family = true;
        
//     Person[counterFieldName] += 1;
//     };
    
//     static [counterFieldName] = 0

//     static getPersonCount() {
//         return Person[counterFieldName];
//     }

//     getName() {
//         console.log(this.name);
//     };

//     setName(name) {
//         this.name = name;
//         console.log(this.name);
//     };
// };

// Hoisting

// function run() {
//     var car = 'Honda';

//     if (true) {
//         var car = 'BMW';
//     }

//     console.log('car in run func: ', car);
// }


// function run() {
//     let car = 'Honda';

//     if (true) {
//         let car = 'BMW';

//         console.log('car in block: ', car);
//     }

//     console.log('car out of block: ', car);
// }

// (() => {
//     'use strict';
//     function run() {
//         car1 = 'Tesla';
//     }

//     run();

// })();