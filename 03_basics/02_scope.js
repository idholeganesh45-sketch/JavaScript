if (true){
    let a=10
    const b = 20
    var c =30
}

// console.log(a);
// console.log(b);
// console.log(c); // var deckared the global variable

// scope is different in windows and the node 

// 

function one(){
    const username = "Hitesh"
    function two(){
        const website ="youtube"
        console.log(username)    
    }
    // console.log(website);

    two()
    
}
// one()

// Nasted function : child function can access the parent function's variable 

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username);
    }
}
// console.log(username);



// ++++++++++ interesting ++++++++++++++
addone(5)// here we call the function before the declaration it not shows any error 
function addone(num){
    return num+1
}

addTwo(5) // here we call the function before the declaration but here shows the error because of the we declare function in variable 
const addTwo = function(num){
    return num + 2
}

