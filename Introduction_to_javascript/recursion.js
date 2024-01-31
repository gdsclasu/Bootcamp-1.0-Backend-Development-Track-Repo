for (let i = 1; i <= 10; i++) {
    console.log(i)
}

function count(start, stop) {
    let i = start // 1
    if (i <= stop) { // 1 <= 10
        console.log(i) // print i
        count(start + 1, stop) // call function
    }
}

// function count(start, stop) {
const count = (start, stop) => { // ECMAScript 6
    let i = start // 1

    if (i <= stop) { // 1 <= 10
        console.log(i) // print i
        count(start + 1, stop) // call function
    }
}

count(1, 10) // GIGO - Gabbage In, Gabbage Out
console.log("===============")
count(5, 200)