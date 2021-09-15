var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "jim"];

for (var name in names) {
    if (names[name][0].toUpperCase() == "J") {
        console.log("Goodbye " + names[name]);
    }
    else {
        console.log("Hello " + names[name]);
    };
    
};