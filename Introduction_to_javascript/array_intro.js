var basket = ["apple", "banana", "pineapple"]

console.log(`The first item is ${basket[0]}`)
console.log(`The second item is ${basket[1]}`)
console.log(`The third item is ${basket[2]}`)

basket[1] = "watermelon"
console.log() // space

console.log(`The first item is ${basket[0]}`)
console.log(`The second item is ${basket[1]}`)
console.log(`The third item is ${basket[2]}`)

basket[3] = "Peas"

console.log()

let basket_length = basket.length
console.log(`The no of items in basket is ${basket_length}`)

console.log()

for (let i = 0; i < basket.length; i = i + 1) {
    console.log(`Item at position ${i} is ${basket[i]}`)
}

console.log("===========================")

const const_basket = ["apple", "banana", "pineapple"]

console.log(`The first item is ${const_basket[0]}`)
console.log(`The second item is ${const_basket[1]}`)
console.log(`The third item is ${const_basket[2]}`)

basket[1] = "watermelon"
console.log() // space

console.log(`The first item is ${const_basket[0]}`)
console.log(`The second item is ${const_basket[1]}`)
console.log(`The third item is ${const_basket[2]}`)

basket[3] = "Peas"

console.log()

let const_basket_length = const_basket.length
console.log(`The no of items in basket is ${const_basket_length}`)

console.log()

for (let i = 0; i < const_basket.length; i = i + 1) {
    console.log(`Item at position ${i} is ${const_basket[i]}`)
}

// const numbers = [1, 2, 3, 4, 5, 6]