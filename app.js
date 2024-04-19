// create a table for the user to see how many of each flavor they ordered
// 
const flavorsInput = prompt(
    ("What froyo flavors would you like for your order?"),
    ("Vanilla, Vanilla, Vanilla, Strawberry, Coffee, Coffee")
);

const flavorsArray = flavorsInput.split(",");

const flavorsCount = {};

flavorsArray.forEach(function(flavor) {
    flavor = flavor.trim();
    if (flavorsCount[flavor]++) {
    } 
    else {
        flavorsCount[flavor] = 1;
    }
})

console.log("Froyo Flavor Counts:");
console.log(flavorsCount)
