  /////////////////////
 // First Interface //
/////////////////////
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue): void {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

  /////////////////////////
 // Optional Properties //
/////////////////////////
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
};

let mySquare = createSquare(<SquareConfig>{color: "black"});
let mySquare2 = createSquare({color: "black"} as SquareConfig);
console.log(mySquare);

  /////////////////////////
 // Readonly properties //
/////////////////////////
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = {x: 10, y: 20};

// Function Types

interface SearchFunc {
  (source: string, sub: string): boolean;
}

let mySearch: SearchFunc = function(source, sub){
  let result = source.search(sub);
  return result > -1;
}
console.log(mySearch("hello", "o"))

  /////////////////////
 // Indexable Types///
/////////////////////

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr)


  /////////////////
 // Class Types //
/////////////////

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d
  }
  constructor(){
    this.currentTime = new Date()
  }
}
let a = new Clock
console.log(a.currentTime)

  ////////////////////////
 // Extends Interfaces //
////////////////////////

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;


console.log(square)



