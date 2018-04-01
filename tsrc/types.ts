
// Boolean
let isDone: boolean = false;
console.log("boolean:", isDone);

// Number
let decimal: number = 6;
console.log("number", decimal);

// String
let color: string = "blue";
console.log("string:", color);

// Array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // this is curious
console.log("list1", list1);
console.log("list2", list2);

// Tuple
let x: [string, number];
x = ["hello", 10];
console.log(x);

// Enum
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c); // console the position of enum

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
console.log(notSure);

// Void
let unusabled: void = undefined;
console.log(unusabled);

// Null and Undefined
let u: undefined = undefined;
let n: null = null;
console.log(u);
console.log(n);

// Never
function fail(): never{
  throw Error("Something failed");
};
fail();

// Assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;
console.log(strLength)
