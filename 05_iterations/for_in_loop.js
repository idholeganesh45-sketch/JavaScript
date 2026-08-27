const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    py: "python"
}

for (const key in myObj) { 
    // console.log(`${key} :- ${myObj[key]}`);
 
}

const programming = ["java", "python","js","ruby"]

for (const key in programming) {
    console.log(key); // prints the indexes
}