const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = mynums.map((num) => num + 10)
// console.log(newNums);

// mynums.forEach((nums) => {
//     console.log(nums+20);
        
// });

const newNums2 = mynums.map((num) => num*10).map((num) => num+1 ).filter ( (num)=> num > 50)
console.log(newNums2 );