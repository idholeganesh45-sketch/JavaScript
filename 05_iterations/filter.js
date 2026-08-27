// const coding = ["js","python","cpp","ruby","swift"]

// const values = coding.forEach((item) => {
//     //console.log(item);
// });

// console.log(values) // for each not return any thing

const myNums=[1,2,3,4,5,6,7,8,10,9]

// const newNum = myNums.filter( (num) => num>4) // return the values

// console.log(newNum);

const newNum = myNums.filter( (num) => {
    return num<5
}) // return the values

console.log(newNum);
