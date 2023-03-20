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
let bands: string[] = [];
bands.push('Van Halen');

// Tuple
let myTuple: [string, number, boolean] = ['Dung', 42, true];

let mixed = ['Dung Bui', 2, false];

myTuple[0] = 'Dung Bui';

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: 'Dung',
  prop2: true,
}

exampleObj.prop1 = 'Dung Bui';
exampleObj.prop2 = false;

// type Guitarist = {
//   name: string,
//   active?: boolean,
//   albums: (string | number)[]
// }

interface Guitarist {
  name?: string,
  active?: boolean,
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
  albums: ['I', 'II', 'IV']
}

// evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
  if(guitarist.name)
    return `Hello ${guitarist.name.toUpperCase()}`;
  return 'Hello!';
}

console.log(greetGuitarist(evh));
console.log(greetGuitarist(jp));

// Enums
// "Unlike most TypeScript features, enums are not a type-level addition to JavaScript
//  but something added to the language and runtime."

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
console.log(Grade.U);