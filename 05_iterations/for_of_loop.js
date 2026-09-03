// for of
const mynums = [2,3,5,6,4]
mynums.forEach((nums) => {
    return (nums+20);
        
});

const arr = [1,2,3,4,5,6,7]

for (const val of arr) {
//    console.log(val);
}

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(greet)
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")

for (const [key,value] of map) {
    // console.log(key,":-",value);
}

