

//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

 interface item{
    name: string
    price: number
 }


 //create  two  objects

 const book: item ={
    name:'Essential Typescript',
    price:450
 }
const Book2: item={
    name:'HTML5',
    price:1000
}

console.log(`book name:${book.name}, \nprice: $${book.price}`)
console.log(`Book2 name:${Book2.name}, price: $${Book2.price}`)