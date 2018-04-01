"use strict";
// Boolean
var isDone = false;
console.log("boolean:", isDone);
// Number
var decimal = 6;
console.log("number", decimal);
// String
var color = "blue";
console.log("string:", color);
// Array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3]; // this is curious
console.log("list1", list1);
console.log("list2", list2);
// Tuple
var x;
x = ["hello", 10];
console.log(x);
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c); // console the position of enum
// Any
var notSure = 4;
notSure = "maybe a string instead";
console.log(notSure);
// Void
var unusabled = undefined;
console.log(unusabled);
// Null and Undefined
var u = undefined;
var n = null;
console.log(u);
console.log(n);
// Never
function fail() {
    throw Error("Something failed");
}
;
fail();
// Assertions
var someValue = "this is a string";
var strLength = someValue.length;
var strLength2 = someValue.length;
console.log(strLength);
