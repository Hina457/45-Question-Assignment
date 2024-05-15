"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let cars = 'subaru';
//Test 1: Equality comparison (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(cars == 'subaru');
//Test 2 :Strict equality comparison (True)
console.log("Is car === 'subaru'? I predict True.");
console.log(cars === 'subaru');
//Test 3: Inequality comparison (false)
console.log("Is car != 'subaru'? I predict false.");
console.log(cars != 'subaru');
//Test 4: Strict inequality comparison (false)
console.log("Is car !== 'subaru'? I predict false.");
console.log(cars !== 'subaru');
//Test 5: Less than comparison(false)
console.log("Is car <'subaru'? I predict false.");
console.log(cars < 'subaru');
//Test 6: Greater then comparison  (false)
console.log("Is car >'subaru'? I predict false.");
console.log(cars > 'subaru');
//Test 7: Less than or equal comparison (True)
console.log("Is car <= 'subaru'? I predict false.");
console.log(cars <= 'subaru');
//Test 8:Greater than or equal  comparison (True)
console.log("Is car >= 'subaru'? I predict false.");
console.log(cars >= 'subaru');
// Test 9 :Checking truthiness (True)
console.log("Is car?  I predict True.");
console.log(cars); //True (non-empty string is truthy)
//Test 10 :Checking falsiness (false)
console.log("Is !car?  I predict false.");
console.log(cars !== 'subaru');
