// Reduce Method

const nums = [1, 2, 3]

const initialValue = 0

// const total = nums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currval: ${currVal}`);
//     return acc + currVal
// }, 0)

const total = nums.reduce( (acc, currVal) => (acc + currVal), 0)

console.log(total);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "py Course",
        price: 999
    },
    {
        itemName: "mobile dev Course",
        price: 5999
    },
    {
        itemName: "data science Course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(priceToPay);