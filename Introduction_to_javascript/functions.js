// function functionName(parameter1, parameter2,...) {
//     // code
// }

// Named functions
function sayHello(name) {
    console.log(`Hello ${name}`)
}

// Using arrow functions
const greet = name => console.log(`Hello ${name}`)

// calling a FUNCTION
// sayHello(argument1, argument2, ...)
sayHello("John")

greet("Jane")

const values = [-10, -20, 20, 40, 60, 80]

function getTotal(array) {
    let sum = 0

    console.log("Before looping")
    console.log("Sum is: " + sum)

    for (let value of array) {
        sum += value
    }

    console.log("After looping")
    console.log(`Total sum is: ${sum}`)
}

getTotal(values)

console.log("=====================")

const TotalSum = (array) => {
    let sum = 0

    console.log("Before looping")
    console.log("Sum is: " + sum)

    for (let value of array) {
        sum = sum + value
    }

    console.log("After looping")
    console.log(`Total sum is: ${sum}`)
}

TotalSum(values)

function getTotalPos(array) {
    let sum = 0

    for (let value of array) {
        if (value >= 0) {
            sum += value
        }
    }

    console.log(`Total positive value is: ${sum}`)
}

getTotalPos(values)

console.log("=================")

function getTotalNeg(array) {
    let sum = 0

    for (let value of array) {
        if (value < 0) {
            sum += value
        }
    }

    console.log(`Total negative value is: ${sum}`)
}

getTotalNeg(values)