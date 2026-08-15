let myArr = [1,2,3,5,6]

// console.log(myArr[1]);

// Array Methods

// myArr.push(9)
// console.log(myArr)
// myArr.pop();
// console.log(myArr)

// myArr.unshift(9) // add valuye in start of arr
// console.log(myArr);
// myArr.shift() // remove the startting element of arr
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(12))

// const newArr = myArr.join() // return arr as string
// console.log(newArr)

// slice and splice

console.log("Original Arr",myArr)

const myn1 = myArr.slice(1,3) // only return the the elemrnt between range and exclude the last end index
console.log(myn1)
console.log("After slice", myArr) 

const myn2 = myArr.splice(1,3) // include last index index and revome the sliced part of array from the original array
console.log(myn2)
console.log("after splice" , myArr)

