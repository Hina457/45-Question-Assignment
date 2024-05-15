"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let car = 'sabaru';
let age = 25;
let numbers = [1, 2, 3, 4];
//string tests
//Test 1: Equality  (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
//Test 2 :Strict equality (false)
console.log("Is car === 'subaru'? I predict false.");
console.log(car === 'subaru');
//Test 3: Inequality  (true)
console.log("Is car != 'toyota'? I predict true.");
console.log(car != 'toyota');
//Test 4: Strict inequality (false)
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');
//lowercase function Tests
//Test 5: Lower conversion(true)
console.log("Is car.tolowercase() == 'sabaru'? I predict true.");
console.log(car.toLocaleLowerCase() == 'sabaru');
//Test 6: LOwercase conversion (false)
console.log("Is car ===  car.tolowercase()? I predict false.");
console.log(car === car.toLocaleLowerCase());
//** Numerical Tests**
//Test 7 : Equality (True)
console.log("Is age == 25? I predict True.");
console.log(age == 25);
//Test 8: Inequality 
console.log("Is age != 30? I predict True.");
console.log(age != 30);
//Test 9: Greater than 
console.log("Is age > 30? I predict false.");
console.log(age > 30);
//Test 10: Less than or equal
console.log("Is age <= 25? I predict True");
console.log(age <= 25);
//** Logical operators**
//Test 11: AND 
console.log("Is age > 20 && age < 30? I predict True.");
console.log(age > 20 && age < 30);
//Test 12: OR 
console.log("Is age > 30 || age < 18? I predict false.");
console.log(age > 30 || age < 18);
//**Array Tests *
// Test 13: In array (true)
console.log("Is 3 in numbers? I predict true.");
console.log(3 in numbers);
//Test 14: Not in array (false)
// console.log("Is 5 not in numbers? I predict true." );
// console.log(5 not in numbers);// true (negation of "in" operator)
