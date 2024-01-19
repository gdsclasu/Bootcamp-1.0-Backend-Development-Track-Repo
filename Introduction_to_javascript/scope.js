// scope - global, local, function

// global variable
const firstName = "Ahmad"

function myFunction() {
    // local / function variable
    let firstName = "Sheu"
    console.log(`Hello from function: ${firstName}`)
}

console.log(`Hello ${firstName}`)

myFunction()