// singlton if we create it using constructor

// Object.create


// object literal

const mySym = Symbol("Key1")

const jsUser= {
    name : "Ganesh",
    "Full Name" : "Ganesh Idhole",
    age : 21,
    [mySym] : "mykey1" , // Syntax to access the symbol
    location : "Kolhapur",
    email : "idhole$5@gmail.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["name"])

// console.log(jsUser["Full Name"]) // only way to access the string key

// console.log(jsUser [mySym]);
// console.log(typeof jsUser[mySym]);

// jsUser.email = "Ganesh@gmail.com"
// Object.freeze(jsUser)
// jsUser.email= "@macro.com"
// console.log(jsUser);

jsUser.greeting = function () {
    console.log(`Hello JS user , ${this.name}`); // this use to access the perticular key
    // return "hey hiii"   
}

// console.log(jsUser.greeting());
jsUser.greeting()