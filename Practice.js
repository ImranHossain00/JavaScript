//============================================================
// Objects =>
// Object is variable type.
// Here car object is referring a box where have some multiple types variables.
// Here we used 'const' for that we can't reassign 
const car = {
    name: "BMW",
    model: "1AB0",
    color: "white",
    wigth: "100kg",
    start: function () {
        console.log("car has started");
    },
    drive: function () {
        console.log("car is driven");
    }
};

console.log(car.wigth);