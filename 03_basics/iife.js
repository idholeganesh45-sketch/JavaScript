// Immediately Invoked Function Expression (IIFE)

(function chai(){ // named iife
    console.log(`DB CONNECTED`);
})(); // for two iife ; is important to end first iife

((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}) ("Main") // arrow function iife