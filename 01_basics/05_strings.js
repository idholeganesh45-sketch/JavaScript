const name = "Ganesh"
console.log(`Hii ${name} welcome to Javascript its day ${5+2} today`);

const test = new String("Hello World") // return[String: 'Hello World']

let user = "//https//google.com.@ganesh%59idhole";
console.log(user);
console.log(test);
console.log(user.__proto__)

 // functions for string
// anchor :ƒ anchor()
// at :ƒ at()
// big :ƒ big()
// blink:ƒ blink()
// bold:ƒ bold()
// charAt: ƒ charAt()
// charCodeAt:ƒ charCodeAt()
// codePointAt: codePointAt()
// concat: ƒ concat()
// constructor:ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// isWellFormed: ƒ isWellFormed()
// italics: ƒ italics()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll:ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// toWellFormed: ƒ toWellFormed()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
console.log(user.anchor("ganesh")); // create an anchor 

console.log("  heloo ".trim())
console.log("  heloo ".trimStart()+"hiii")
console.log("  heloo ".trimEnd()+"heee")
console.log("Hello+=+=+=World".replace("="," ")) //replace only first occurense

console.log(user.substring(1,9));
console.log(user.sub(1,9));

