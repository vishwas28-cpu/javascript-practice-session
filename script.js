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

// let - new and safe
// block scope hai
// sirf reassign hota hai aur redclare nhi hota

// const - new and safest
// block scope hot hai
// ek baar value assign ki toh chang nhi kar sakte