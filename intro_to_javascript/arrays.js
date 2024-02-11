var basket = ["apple", "banana", "pineapple", "Peas"]

console.log(`The first item is ${basket[0]}`)
console.log(`The second item is ${basket[1]}`)
console.log(`The third item is ${basket[2]}`)

basket[1] = "watermelon"
console.log() // space

console.log(`The first item is ${basket[0]}`)
console.log(`The second item is ${basket[1]}`)
console.log(`The third item is ${basket[2]}`)


const basket_length = basket.length
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

var basket = ["apple", "banana", "pineapple", "Peas"]

basket.push("peach") // basket[4] = "peach"
const rev_basket = basket.reverse()
// ==========
console.log(basket)

console.log()
console.log("After popping")
const popped_element = basket.pop()

console.log(`Popped item is: ${popped_element}`)
console.log(basket)

// Using concat - array_1.concat(array_2)
var basket = ["apple", "banana", "pineapple", "peas"]
var otherFruits = ["melon", "orange", "berries"]

var allFruit = basket.concat(otherFruits)
console.log(allFruit)

// Using sort - array.sort()
sorted_fruits = allFruit.sort()
console.log(sorted_fruits)


// Array iterations

// Using for loop
for (let i = 0; i < allFruit.length; i++) {
    console.log(allFruit[i])
}

// Using for loop II - for..of
for (let fruits of allFruit) {
    console.log(fruits)
}

// Using forEach
allFruit.forEach(items => {
    console.log(items)
})

console.log()

// // using map
allFruit.map(items => {
    console.log(items)
})

// Array destructuring

const [firstItem, secondItem, thirdItem] = allFruit

console.log(firstItem)
console.log(secondItem)
console.log(thirdItem)

// spread operator (...)
const [firstitem, seconditem, thirditem, ...rest] = allFruit

console.log(firstitem)
console.log(seconditem)
console.log(thirditem)
console.log(rest)

// rest (...)
const new_fruit = [...allFruit, "Mango", "Coco"]

console.log(new_fruit)