// var arr = [1, 2, 3, 4];

// var iterator = arr[Symbol.iterator]();

// iterator

// iterator.next()

// **iterator.next()
// {value: 1, done: false}
// iterator.next()
// {value: 2, done: false}
// iterator.next()
// {value: 3, done: false}
// iterator.next()
// {value: 4, done: false}
// iterator.next()

// { value: undefined, done: true }
// **

// var bob = {
//     name: 'Bob',
//     age: 40,
//     profession: 'QA'
// }

// Object.entries(bob)

// var iterator = Object.entries(bob)[Symbol.iterator]()

//     **
//         iterator.next()
// {value: Array(2), done: false}done: falsevalue: (2) ['name', 'Bob'][[Prototype]]: Object
// iterator.next();
// {value: Array(2), done: false}done: falsevalue: (2) ['age', 40][[Prototype]]: Object
// iterator.next();
// {value: Array(2), done: false}done: falsevalue: (2) ['profession', 'QA'][[Prototype]]: Object
// iterator.next();
// {value: undefined, done: true}
//     **

//Generator//

// function* makeGenerator() {
//     console.log('Function scope is active!', getFunc);

//     yield 'First action';

//     console.log('Start moving after 1st action!');

//     yield 'Second action';

//     console.log('Start moving after 2st action!');

//     function getFunc() { }
    
// }

// const gen = makeGenerator()

//     **
// gen.next()
// VM931:2 Function scope is active! ƒ getFunc() { }
// {value: 'First action', done: false}
// gen.next()
// VM931:6 Start moving after 1st action!
// {value: 'Second action', done: false}
// gen.next()
// VM931:10 Start moving after 2st action!
// { value: undefined, done: true }

// **

//     Генератор можно останавливать(yield)  и передавать туда ещё значение!


// function* makeGenerator() {
//     var b = 2;

//     console.log('1st  action', b);

//     b = yield 'First action';

//     console.log('2st action!', b);

//     b = yield 'Second action';

//     console.log('3st action!', b);

//     function getFunc() { }
    
// }

// const gen = makeGenerator()


// function* makeGenerator() {
//     console.log('Function scope is active!');

//     const value1 = yield;

//     console.log('1st action!', value1);

//     const value2 = yield;

//     console.log('2st action!', value2);

//     const value3 = yield;

//     console.log('3st action!', value3);
    
// }

// const gen = makeGenerator()

//     ** 
// gen.next()
// VM1296:2 Function scope is active!
// {value: undefined, done: false}
// gen.next('Bob');
// VM1296:6 1st action! Bob
// {value: undefined, done: false}
// gen.next('Bill');
// VM1296:10 2st action! Bill
// {value: undefined, done: false}
// gen.next('Mango');
// VM1296:14 3st action! Mango
// { value: undefined, done: true }

// **