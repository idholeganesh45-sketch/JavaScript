const myNums = [1,2,3,5]

// const total = myNums.reduce( function (acc, currVal) {
//     return acc + currVal
// },0)
// console.log(total);


// const total = myNums.reduce((acc, currVal) => acc + currVal, 0)
// console.log(total);


const shoppingCart = [
    {
        product : "Shirt",
        price : 425
    },
    {
        product : "T-Shirt",
        price : 199
    },
    {
        product : "Bag",
        price : 1599
    },
    {
        product : "Book",
        price : 2652
    }
]

const total = shoppingCart.reduce( (acc,product) => acc + product.price, 0)

console.log(total);
