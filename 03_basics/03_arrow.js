const user ={
    username : "Hitesh",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , Welcome to website`); // This corrent context ko refer karata hai
        console.log(this);
        
    }
}
        
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) // here is the empty {} because you are in the node envirment but in web console it gives the window{...}

// function chai(){
//     let username="Hello"
//     console.log(this.username);  // this can work in object not in function
// }
// chai() // gives the many things 

// const chai = () => { // Arrow function 
//     let username = "Hello"
//     console.log(this.username);
    
// }

// chai()

// Basic arrow function
// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// const addTwo = (num1,num2) => num1+num2 // impleacet return

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1, num2) => ({object : "return"}) // to return a object

console.log(addTwo(3,6))