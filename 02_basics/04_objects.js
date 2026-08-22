// const tinderUser = new Object // singleton object
const tinderUser = {}
// console.log(tinderUser)

tinderUser.id = "324A1"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullName: {username:{
        firstname: "hitesh",
        lastname: "chavhan"
    }
    }
}
// console.log(regularUser.fullName)
// console.log(regularUser.fullName.username)
// console.log(regularUser.fullName.username.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1, obj2) // {} optional parameter to combine the two object in the empty object if we not given the {} it combine the give obj in obj 1 and mpdify it 

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user =[
    {
        id : 1,
        email: "hitesh@gamil.com"
    },
    {
        id : 1,
        email: "hitesh@gamil.com"
    },
    {
        id : 1,
        email: "hitesh@gamil.com"
    },
    {
        id : 1,
        email: "hitesh@gamil.com"
    }
]

// console.log(user[0].email);
 
console.log(tinderUser);
console.log(Object.keys(tinderUser))// return the array of all keys of given object
console.log(Object.values(tinderUser))// return the array of all values of given object
console.log(Object.entries(tinderUser)); // array between array which first index is key and second is value

console.log(tinderUser.hasOwnProperty('id'))

const course = {
    coursename: "js course",
    price: "999",
    courseInstructor : "Hetesh"
}

const {courseInstructor : instructor} = course
console.log(instructor );

//JSON 
//  {
//     "name" : "Ganesh",
//     "Course" : "Javascript",
//     "Price" : "Free"
//  }

//array JSON 
[
    {},
    {},
    {},
]