// Primitive Data Type 

// Types : String, Number, Null, Undefined, Boolean, Symbol, BigInt

// reference type (Non premitive)

// Array Objects, Functions


// JavaScript is Dynamic type langauge

// const score = 12;
// const CGPA = 7.17;
// let totalScore;
// let total = Symbol('123');
// const newtotal = Symbol('123');

// console.log(total === newtotal);

// let arr = [12,25,35,14]
// const myObject = {
//     Name : "Ganesh",
//     age : 20,
//     Gender : "Male"
// }
// console.log(myObject)
// console.log(arr[0])


// let myFuction = function(){
//     if(1){
//         console.log("Hii I am a Function");
//     }
    
    
// }

// myFuction()

// console.log(myObject);



// ******************* Memory allocation in JS ****************

// Stack (Primitive), Heap (Non primitive)

// In Stack Give the copy of original data when we change new one it not chenge the original value

let userName = "Its_Pandit";
let newName = "Its_Addi";
console.log(userName);
console.log(newName);

// In Heap (Non primitive) it gives the reference of original data when we change the new one the original also gate changed

let userOne = {
    Name : "Pandit",
    email : "pandit@gmail.com",
    age :26
}

let userTwo = userOne;
userTwo.age = 35;
console.log(userOne); // its changed the original userOnes age
console.log(userTwo);

