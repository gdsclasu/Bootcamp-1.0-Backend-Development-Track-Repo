// // Syntax: const object = {key: value} - key/value pairs
// // keys, values, entries

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        city: "Manhattan",
        state: "New York",
        Country: "USA"
    },
    getFullName: function () {
        return this.firstName + " " + this.lastName
    }
}

// // accessing items in an object
// // object.key

// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(person.address)
// console.log(person.getFullName())

// // Get keys in objects
// const keys = Object.keys(person)
// console.log(keys)

// // // Get values in objects
// const values = Object.values(person)
// console.log(values)

// // // Get all entries in objects - person or Object.entries(person)
// const entries = Object.entries(person)
// console.log(entries)

// // Destructuring objects
// const { firstName, lastName, address } = person

// console.log(firstName)
// console.log(lastName)
// console.log(address)

// // spread operator in objects
// const { firstname, ...otherInfo } = person

// console.log(firstname)
// console.log(otherInfo)

// interation of objects
// for (items in person) {
//     console.log(`The items are ${person[items]}`)
// }

// Serialization of objects
console.log(person)

console.log("========================")

let personJSON = JSON.stringify(person)

console.log(personJSON)

console.log("========================")
// Deserialization of Objects
let normalObject = JSON.parse(personJSON)
console.log(normalObject)