// for loop

// const array = [2,3,5,6,4,8,5,9,8]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }
 

// for (let i= 1; i<= 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("5 is best");
//     }
//     console.log(element);
// }


for (let i = 0; i < 10; i++) {
    // console.log(`Outer loop ${i}`);
    
    for (let j = 0; j < 2; j++) {
        // console.log(`Inner loop ${j}`,`Outer loop ${j}`)  
    }  
}

// break and continue

for (let index = 1; index < 20; index++) {
    if(index == 5){
        console.log(`5 Detected`);  
        break 
    }
    console.log(`value of i ${index}`);
}


for (let index = 1; index < 10; index++) {
    if(index == 5){
        console.log(`5 Detected`);  
        continue 
    }
    console.log(`value of i ${index}`);
}