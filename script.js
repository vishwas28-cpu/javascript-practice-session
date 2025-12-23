// basic operator
// a. create two numbers a=10 and b=3.
// perform and log: a + b, a-b , a* b , a/b , a % b
// answer 
// a = 10; b = 3,   
//    console.log(a + b);
//    console.log(a-b);
//    console.log(a*b);
//    console.log(a / b);
//    console.log(a % b);

// b. write: let x = 5; x = x + 3;
// now rewrite the same +=.
// do the same for -=, *=, /=.
// answer 
//x = 5 ; x = x + 3
//x +=3; //8
//x-=3 //11
//x*=3 //33
//x/=3 //3
//x%3 //0
// console.log(x);

 // c. let count = 5;
 // use count ++ and log value before 
 // answer
 // let count = 5; 
// count++;
// console.log(count); // the answer is 6
// count--;
// console.log(count);// the answer is 5

// d. compare two vakues 5 == "5" and 5 === "5".
// observe difference
//answer
// 5 == "5" // it will give true it only check if the value are same
// 5 ==== "5" // it wil give false it check both datatype and the value

// e. check if 10 is greater than 5, less than 20, and equal to 10
console.log(10>5);   // true
console.log(10<20);  // true
console.log(10 = 10);  // true

// f. try logical AND and OR:
// true && false
// true || false
// !(true)
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!(true)); // false

// g. predict the result of:
// (5>3 && 10>8)
// (5>3 || 10<8)
console.log(5>3 && 10>8);  // true
console.log(5>3 || 10<8);  // true

// h. bitwise (light intro);
// evaluate 5 & 1 and 5 | 1
// write result and your observation (no deep explanation needed now).
console.log(5 & 1);
console.log(5 | 1);

// what are variable 
// variable are used to store data in programming
// you can create a variable using var, let or const keywords

// var - old and risky 
// functioned scope hai aur blocks ki respect nhi karta
// redclare aur reassign hota hai
// var hoisted hota hai aur uski default value undifined hoti hai

// let - new and safe
// block scope hai
// sirf reassign hota hai aur redclare nhi hota
// let hoisted hota hai par uski value undifined nhi hoti
// temporal dead zone hote hai

// const - new and safest
// block scope hot hai
// ek baar value assign ki toh chang nhi kar sakte
// const hoisted hota hai par uski value undifined nhi hai
// temporal dead zone hote hai

//data types
// there are 2 ypes of data type 
// primitive and reference

// primitive data types : dierectly store the value 
// 1, number - ye sirf number hota hai ex 1, 2, 3, 13, 15, 55.
// 2. string - ye text hota hai jo single ya double quote me hota hai ex "hello", 'world' .
// 3. boolean - ye true ya false hota hai ex true, false .
// 4. undefined - jab variable ko value assign nhi kiya jata toh wo undefined hota hai ex let a; console.log(a); // undefined
// 5. null - ye empty value hota hai ex let b = null; console.log(b); // null
// 6. symbol - ye unique identifier hota hai ex let sym = Symbol('id'); console.log(sym); // Symbol(id)
// 7. bigint - ye large number ko represent karta hai ex let big = 1234567890123456789012345678901234567890n; console.log(big); // 1234567890123456789012345678901234567890n

// reference data types : ye value ka reference store karta hai
// 1. function - ye reusable code block hota hai ex function greet() { console.log("Hello"); } greet(); // Hello
// 2. object - ye key-value pairs ka collection hota hai ex let obj = { name: "John", age: 30 }; console.log(obj); // { name: "John", age: 30 }
// 3. array - ye ordered collection of items hota hai ex let arr = [1, 2, 3, 4, 5]; console.log(arr); // [1, 2, 3, 4, 5]

// typeof operator : data type check karne ke liye use hota hai
// typeof 42; // "number"
// typeof "hello"; // "string"
// typeof true; // "boolean"
// typeof undefined; // "undefined"
// typeof null; // "object" (ye ek bug hai JavaScript me)
// typeof [] ; // "object"
// typeof {}; // "object"
// typeof function() {}; // "function"


// type conversion : ek data type ko dusre data type me convert karna
// "5" + 1; // "51" (string concatenation) plus ka meaning addition aur concatenation dono ho sakta hai
// "5" - 1; // 4 (string to number conversion)
// true + 1; // 2 (boolean to number conversion)
// false + 1; // 1 (boolean to number conversion)
// null + 1; // 1 (null to number conversion)
// undefined + 1; // NaN (undefined cannot be converted to number)


// loose vs strict equality
// == ye sirf value dekhta hai aur datatype ko ignore karta hai
// === ye value aur datatype dono ko check karta hai
// exxamples:
// 5 == "5"; // true
// 5 === "5"; // false
// always use strict equality (===) to avoid unexpected type coercion issues

// naN : not a number
// ye ek special value hai joh indicate karte hai voh number nahi hai par iska typeof number hota hai

// truthy and falsy values
// truthy values : jo values condition me true evaluate hoti hai
// ex : 1, "hello", [], {}, function() {}
// falsy values : jo values condition me false evaluate hoti hai
// ex : 0, "", null, undefined, NaN, false

// operators
// operators special symbols hote hai jo variables aur values ke upar operations perform karte hai

// arthmetic operators : +, -, *, /, %, ++, --

// assignment operators : =, +=, -=, *=, /=, %=

// comparison operators : ==, ===, !=, !==, >, <, >=, <=

// logical operators : &&, ||, !

// ternary operator : condition ? expr1 : expr2

// unary operators : typeof, delete, void

// typeof operator : data type check karne ke liye use hota hai


// control flow 
// control flow decide karega ki code kaunsa part execute hoga aur kab hoga
//if, else if, else
// example:
// if (condition1) {
// runs if condition1 is true
// } else if (condition2) {
// runs if condition2 is true
// } else {
// runs if both condition1 and condition2 are false
// }

// switch case
// bohot saare values ko compare karne ke liye use hota hai
// switch case saare cases ko check agar break na diya jaye toh sab execute ho jayega
// example:
// let fruit = "apple";
// switch (fruit) {
//   case "banana":
// console.log("yellow");
//     break;
//   case "apple":
// console.log("red");
// break;
// default:
// console.log("unknown color");
// }

// early return pattern
// functions mai use hota hai jaldi se function se bahar nikalne ke liye agar koi conditions fail ho jati hai
// example:
// function checkAge(age) {
// if (age < 18) return "denied";
// return "allowed";
// }


// loops
// loops koi code baar baar chalene ke liye use hote hai bina koi code likhe

// for loop
// example:
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// while loop
// condition check karta hai chalene se pehle
// example:
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// do while loop
// ek baar chaltha hai agar condition false bhi ho toh bhi
// example:
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// break and continue
// break loop ko pura terminate kar deta hai
// continue current iteration ko skip kar deta hai aur next iteration pe chala jata hai
// example:
// for (let i = 0; i < 5; i++) {
// if (i === 3) continue; // skip 3
// console.log(i);
// }

// for-of- arrays aur strings
// yeh iterable (arrays, strings) pe use hota hai
// example:
// for (let char of "hello") {
//   console.log(char);
// }

// forEach - arrays
// cleaner than (for) for arrays, but you cannot break/continue
// example:
// let nums = [10, 20, 30];
// nums.forEach((num) => {
//   console.log(num);
// });

// for-in - objects (arrays if needed)
// objects ke keys pe iterate karta hai
// example:
// let user = {name: "harsh"; age: 25};
// for (let key in user) {
//   console.log(key, user[key]);
// }

// mindset for loops
// loops = data processor
// use the right loop for the job:
// for = best for number/indexes
// for-of = for arrays value
// for-in = for objects keys
// while = for unpredictable conditions

// functions
// functions reusable code blocks hote hai jo specific task perform karte hai

// function declaration
// function greet() {
// console.log("welcome to sheryians");
// }
// greet(); // welcome to sheryians

// parameters vs arguments
// example:
// function greet(name){
// console.log("hello " + name);
// }
// greet("harsh");
// name is parameter
// "harsh" is argument

// return value
// example:
// function sum(a, b) {
// return a + b;
// }
// let result = sum(5, 10); // 15

// function expression
// const greet = function () {
// console.log("hello world");
// };
// function ko variable me store karte hai
// ye hoisted nhi hota

// arrow functions
// const greet = () => {
// console.log("hi!");
// };
// cleaner syntax

// default parameters
// a = 1 --> default parameter
// function multiply(a = 1, b = 2) {
// return a * b;
// }

// rest parameters
// ....nums --> rest parameter
// function sum(...nums){
// return nums.reduce((acc, curr) => acc + curr, 0);
// }

// spread operator
// ...nums (in calls) --> spread operator
// let nums = [1, 2, 3];
// console.log(...nums); 

// first class functions
// javascript funnction ko value ki tarah treat karta hai
// functions can be assigned to variables, passed as arguments, and returned from other functions
// example:
// function shout(msg) {
// return msg.toUpperCase();
// }
// function processMessage(fn) {
// console.log(fn("hello"));
// }
// processMessage(shout); // "HELLO"

// higher order functions
// functions joh dusre function ko accept karte hai ya return karta hai 
// example:
// function createMultiplier(x) {
// return function (y) {
// return x * y;
// };
// }
// const double = createMultiplier(2);
// console.log(double(5)); // 10

// closures and lexical scope
// closures : ek function joh apne parent functions ko remember karta hai uske baad bhi jab parent function finiish ho chuka hai
// function outer() {
// let count = 0;
// return function inner() {
// count++;
// console.log(count);
// };
// }
// const counter = outer();
// counter(); // 1
// counter(); // 2
// even after outer() has finished, inner() remembers count

// iffe - immediately invoked function expression
// yeh function private scope create karta hai
// (function(){
// console.log("runs immediately");
// })();

// hoisting: declaration vs expression 
// function declarations hoisted hote hai
// function expressions hoisted nhi hote
// example:
// hello(); // works
// function hello() {
// console.log("hi");
// }

// greet(); // error
// const greet = function() {
// console.log("hello");
// };

// arrays
// arrays ek row of boxes ki tarah hote hai jahah har ek box mai value store hoti hai aur index hoti hai(1,2,3...)
// arrays apko multiple values ek variable mai store karene mai help karte hai - strings, numbers, booleans, objects, functions, etc.
// let fruits = ["apple", "banana", "cherry"];

// creating and accessing arrays
// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers[0]); // 10
// console.log(numbers[2]); // 30
// index 0 se start hota hai 
// you can access, update, and manipulate array elements using their index positions.

// common array methods
// modifiers (change the original array):
// let arr = [1, 2, 3];
// arr.push(4); // add to end
// arr.pop(); // remove from end
// arr.unshift(0); // add to start
// arr.shift(); // remove from start
// arr.splice(1, 1, "a"); // at index 1, remove 1 item, add "a"
// aar.reverse(); // reverse the array

// extractors (do not change original array):
// let newArr = arr.slice(1, 3); // copy from index 1 to 2
// arr.sort(); // sort the array

// iteration methods:

// map()
// returns a new array with modified values.
// let prices = [100, 200, 300];
// let taxes = prices.map(p => p *1.18);

// filter()
// filter out elements based on condition.
// let numbers = [1, 2, 3, 4, 5];
// let evens = numbers.filter(n => n % 2 === 0);

// reduce()
// reduce array to a single value.
// let total = numbers.reduce((acc, curr) => acc + curr, 0);

// forEach()
// performs action for each element.
// nums.forEach(n => console.log(n));

// find(), some(), every()
// nums.find(n => n > 2); // first match
// nums.some(n => n > 5); // at least one true
// nums.every(n => n > 0); // all true

// destructuring & spread
// let [first, second] = ["a", "b", "c"];
// let newArr = [...nums, 99];

// common confusions
// splice changes original array, slice does not
// forEach vs map: forEach does not return new array, map does
// sort() converts values to strings unless compareFn provided:
// [10,2,3].sort() => // [10,2,3] --> ["10","2","3"] --> wrong order
// use:
// arr.sort((a,b) => a-b); // correct numeric sort

// mindset for arrays
// arrays are structured, transfromable data.
// you loop over them transform them, filter them, reduce them - all to control what shows up in your ui and logic.

// objects
// objects javascript mai real world records kei tarah hote hai
// objects key-value pairs ka collection hote hai
// object structured data store karne mai madad karte hai
// example:
// let person = {
//  name: "harsh",
//  age: 25,
//  isStudent: false
// };

// keys-value structure
// keys hamesha strings hi hote hai agar tumnhe number likha toh bhi voh string mai convert ho jayega
// values kisi bhi data type ki ho sakti hai - strings, numbers, booleans, arrays, functions, even other objects
// console.log(person["name"]); // "harsh"
// console.log(person.age); // 25

// dot vs bracket notation
// dot notation : jab key valid identifier ho tab use karte hai
// bracket notation : jab key variable ho ya special characters ho tab use karte hai

// nesting and deep access
// objects ke andar objects ya arrays nest kar sakte hai
// example:
// let user = {
//  name: "harsh",
//  address: {
//    city: "delhi",
//    pincode: 110001
//  }
// };
// console.log(user.address.city); // "delhi"

// object destructuring
// value ko directly extract kar sakte hai
// let { name, age } = person;
// nested object ke liye:
// let { address: { city, pincode } } = user;

// looping through objects
// for-in loop use karte hai
// ex: for (let key in person) {
//  console.log(key, person[key]);
// }
// Object.keys(), Object.values(), Object.entries()
// object.keys(person); // ["name", "age", "isStudent"]
// object.values(person); // ["harsh", 25, false]
// object.entries(person); // [["name", "harsh"], ["age", 25], ["isStudent", false]]

// copying objects

// shallow copy : one level deep copy karta hai
// let newStudent = { ...student };
// newOne.name = Object.assign({}, student);

// deep copy : pura object copy karta hai nested objects ke sath
// let deepCopy = JSON.parse(JSON.stringify(student));
// note: ye method functions aur undefined values ko copy nhi karta sirf plain data types ko copy karta hai

// optional chaining
// avoid errors jab nested properties undefined hoti hai
// console.log(user?.address?.city); // "delhi" or undefined if address doesn't exist
// console.log(user?.contact?.phone); // undefined instead of error

// computed properties
// variable ko key ki tarah use kar sakte hai
// let key = "marks";
// let report = {
// [key]: 95
// };

// common confusions
// shallow copy copies only first level
// for-in includes inherted keys (be catious).
// delete obj.key remove the property
// spread ≠ deep copy

// mindset for objects
// objects are structured state- perfect for modeling anything complex: a user, a product, a blog post, etc.
// use destructuring, chaining, and dynamic keys wisely.