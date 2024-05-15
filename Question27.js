"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color = "yellow";
//• If the alien is green, print a message that the player earned 5 points.
if (alien_color == "yellow") {
    console.log("The player just earned 5 points for shooting the alien.");
}
//• If the alien is yellow, print a message that the player earned 10 points.
else if (alien_color == "green") {
    console.log("The player just earned 10 points for shooting the alien.");
}
//• If the alien is red, print a message that the player earned 15 points.
else if (alien_color == "red") {
    console.log("The player just earned 15 points for shooting the alien.");
}
else {
    console.log("please select right color");
}
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
//version 2
alien_color = "red";
if (alien_color == "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else if (alien_color == "yellow") {
    console.log("The player just earned 10 points for shooting the alien.");
}
else if (alien_color == "red") {
    console.log("The player just earned 15 points for shooting the alien.");
}
else {
    console.log("please select right color");
}
//version 3
alien_color = "yellow";
if (alien_color == "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else if (alien_color == "yellow") {
    console.log("The player just earned 10 points for shooting the alien.");
}
else if (alien_color == "red") {
    console.log("The player just earned 15 points for shooting the alien.");
}
else {
    console.log("please select right color");
}
