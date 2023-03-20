"use strict";
let stringArr = ['one', 'two', 'three'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Dung';
stringArr.push('four');
guitars[0] = 1984;
guitars.unshift('Dung');
guitars = stringArr;
mixedData = guitars;
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['Dung', 42, true];
let mixed = ['Dung Bui', 2, false];
myTuple[0] = 'Dung Bui';
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dung',
    prop2: true,
};
exampleObj.prop1 = 'Dung Bui';
exampleObj.prop2 = false;
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    albums: ['I', 'II', 'IV']
};
// evh = jp;
const greetGuitarist = (guitarist) => {
    if (guitarist.name)
        return `Hello ${guitarist.name.toUpperCase()}`;
    return 'Hello!';
};
console.log(greetGuitarist(evh));
console.log(greetGuitarist(jp));
// Enums
// "Unlike most TypeScript features, enums are not a type-level addition to JavaScript
//  but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
