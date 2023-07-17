// create an object named customer with key:value pairs
// Modify the mistakes using braacket notation


// Step 2
const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false
};

// Step 3: Modifying values
customer['email'] = "Jak3Smith1992@email.com";
customer['phone'] = 3195551234;
customer['zipCode'] = 63132;
customer['favoriteFlavors'] = ["coffee", "strawberry", "matcha"]

// Step 4: Delete zipcode and favorite store
delete customer.zipCode;
delete customer.favoriteStore;

// Step 4 continued : adding keys and values using dot notation
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

// Step 4 continued: print keys in an array
console.log(Object.keys(customer))


console.log(customer);

