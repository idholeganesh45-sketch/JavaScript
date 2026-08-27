const coding = ["js","python","cpp","ruby","swift"]

// coding.forEach( function (item){
//     console.log(item); 
    
// })

// coding.forEach( (item)=>{
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index , arr)=>{
//     console.log(item,index,arr);
    
// })

const mycoding  = [
    {
    langaugeName: "Java",
    fileName: "java"
    },
    {
    langaugeName: "python",
    fileName: "py"
    },
    {
    langaugeName: "ruby",
    fileName: "rb"
    },
    {
    langaugeName: "C++",
    fileName: "cpp"
    }
]

mycoding.forEach((item)=>{
    console.log(item.langaugeName);
    
})