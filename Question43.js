/*Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array
  to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magiciansnames = ["Teller", "Dynamo", "Criss Angel"];
//making  a copy of an array 
var magiciansnamescopy = __spreadArray([], magiciansnames, true);
function show_magicians(greet) {
    var withgreetings = "";
    for (var _i = 0, magiciansnamescopy_1 = magiciansnamescopy; _i < magiciansnamescopy_1.length; _i++) {
        var item = magiciansnamescopy_1[_i];
        withgreetings += "".concat(greet, " ").concat(item);
    }
    return withgreetings;
}
;
var mygreetings = show_magicians(" hello");
var makearray = mygreetings.split("\n");
console.log(makearray);
