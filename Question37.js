/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with
 a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different message.*/
function large_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love Typescript."; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\"printed on it."));
}
large_shirt();
function medium_shirt(size, message) {
    if (size === void 0) { size = "medium"; }
    if (message === void 0) { message = "Allhumdulliah I am a coder."; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\"printed on it."));
}
medium_shirt();
