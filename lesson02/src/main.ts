let myName: string = 'Dung';
let meaningOfLife: number;
let isLoading: boolean;
// let album: any;
let album: string | number;

// myName = 42 // Error
myName = 'Dung Bui';
meaningOfLife = 42;
isLoading = true;
album = 'The Wall';
album = 2022;

const sum = (a: number, b: string) => {
  return a + b;
}

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;