// Filter Method

const arr = ["js", "ruby", "java", "python", "cpp"]

// const values = arr.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values); // output -> undefined

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = nums.filter( (num) => num > 4 ) // Those num which satisfies the condition num > 4 gets returned by filter method in an array.
// const newNums = nums.filter( (num) => {
//     return num > 4
// }) 

const newNums = []

// nums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    {
        title: 'Book One', genre: 'Fiction', publish: 2001,
        edition: 2004 },
    {
        title: 'Book two', genre: 'Non-Fiction', publish: 2004,
        edition: 2006 },
    {
        title: 'Book three', genre: 'History', publish: 2006,
        edition: 2008 },
    {
        title: 'Book four', genre: 'Science', publish: 1989,
        edition: 2002 },
    {
        title: 'Book five', genre: 'History', publish: 1987,
        edition: 2000 },
    {
        title: 'Book six', genre: 'Science', publish: 1981,
        edition: 2010 },
    {
        title: 'Book seven', genre: 'Fiction', publish: 1996,
        edition: 1998 },
    {
        title: 'Book eight', genre: 'Science', publish: 1997,
        edition: 1998 },
    {
        title: 'Book nine', genre: 'History', publish: 1981,
        edition: 1998 },
    
]

let userBooks = books.filter( (book) => book.genre === 'History' )
userBooks = books.filter( (book) => { 
    return book.publish >= 1995 && book.genre === 'History'
} )

console.log(userBooks);