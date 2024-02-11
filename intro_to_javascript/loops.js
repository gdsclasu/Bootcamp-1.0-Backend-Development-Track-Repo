var basket = ["apple", "banana", "pineapple"]
basket[3] = "Peas"

// for loop: for (assignment, condition, increment or function)
// first arg: let i = 0
// second arg: condition to check
// third arg: increment or function
const basket_length = basket.length
console.log(`The no of items in basket is ${basket_length}`)

console.log()

for (let i = 0; i < basket_length; i = i + 1) {
    console.log(`Item at position ${i} is ${basket[i]}`)
}

console.log()

console.log("Reversed")
console.log("=====================")
for (let i = basket_length - 1; i >= 0; i = i - 1) {
    console.log(`Item at position ${i} is ${basket[i]}`)
}

console.log()

console.log("Using array methods")
console.log("=====================")
console.log(basket.reverse())

console.log()

console.log("Using array methods with loop")
console.log("=====================")

var basket_rev = basket.reverse()

for (let i = 0; i < basket_length; i = i + 1) {
    console.log(`Item at position ${i} is ${basket_rev[i]}`)
}
