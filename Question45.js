/*Cars: Write a function that stores information about a car in a Object.
 The function should always receive a manufacturer and a model name.
 It should then accept an arbitrary number of keyword arguments.
 Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.*/
function createCar(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    args.forEach(function (args) {
        Object.keys(args).forEach(function (Key) {
            car[Key] = args[Key];
        });
    });
    return car;
}
var Cars = createCar("Toyota", "corolla", { color: "Red", year: 2022 }, { feature: "sunroof" });
console.log(Cars);
