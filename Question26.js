"use strict";
//Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color2 = "yellow";
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alien_color2 == "yellow") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
alien_color2 = "Green";
if (alien_color2 == "yellow") {
    console.log("The player just earned 5 points for shooting the alien.");
}
