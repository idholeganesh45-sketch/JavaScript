function add(num1, num2){
    console.log(num1+ num2)
}


function add2(num1, num2){
    return num1+ num2 
    // funtion is terminated after return keyword
}


// add(3,5)
// add(3,"4") //  it convert both as string and performe concatanation

result = add2(5,6) // function return value to the variable
console.log(result);

function loginUser(username){
    if(username === undefined){
        return "Please enter a username"
    }
    return `${username} just logged in..`
}

// console.log(loginUser("Ravi"));
// console.log(loginUser()); // gives undefined


function calculateCartPrice(...num1){ // ...num1 called as rest operator and return as array of all the parameter given at function call 
    return num1
}
function calculateCartPrice1(v1,v2,...num1){
    return num1
    // first two are given two v1 and v2 other goes into the array num1
}

console.log(calculateCartPrice1(200,300,400));

// object in function
let User = {
    name : "Ganesh",
    price : 485
}

function priceCal(anyobj){
    console.log(`name : ${anyobj.name} price : ${anyobj.price}`);
    
}

priceCal(User)
