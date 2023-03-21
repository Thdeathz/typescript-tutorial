type One = string; 
type Two = string | number;
type Three = 'hello';

// convert to more or less specific
let a: One = 'hello';
let b = a as Two; // less specific
let c = a as Three;// more specific

let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if(c === 'add')
    return a + b;
  return '' + a + b;
}

// doesn't work on TSX
let myVal: string = <string>addOrConcat(2, 2, 'concat');

// be careful! TS sees no problem - but a string is returned
let nextVal: number = <number>addOrConcat(2, 2, 'concat');

// :))
(10 as unknown) as string;

// The DOM
const img = document.querySelector('img')!;
const myImg = document.getElementById('#img') as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById('#img');

img.src
myImg.src