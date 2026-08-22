// const marvelHeroes = ["Thor","IronMan","Captain"]
// const dcHeroes = ["SuperMan","BatMan","Flash"]
// // // marvelHeroes.push(dcHeroes) // it add the array as element in original array

// // console.log(marvelHeroes);
// // let heroes = marvelHeroes.concat(dcHeroes) // it return new array as merging both arrays
// // console.log(heroes)
// const allHeroes = [...marvelHeroes,...dcHeroes]
// console.log(allHeroes)

// let another_array = [2,2,4,6,5,[5,9,6,8,[4,[52,53,65],85,5,4,5],2,6],52,[456,1],48];
// console.log(another_array[5][4][1])

// console.log(another_array.flat(Infinity)) // remove all sub array and return full array


console.log(Array.from("ganesh")) // convert all letters as single element in array
console.log(Array.of("ganesh")) // take hold string as one element of array
console.log(Array.of(20,52,36,10,"lkj",41))

console.log(Array.from({Name:"ganesh"})) // return empty array

console.log(Array.of({Name:"ganesh"})) // return  array contain object
