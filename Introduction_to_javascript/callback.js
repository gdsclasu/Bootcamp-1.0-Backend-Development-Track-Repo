// function myfunc(function1, function2, ...)
function function1() {
    console.log("This is from function 1")
}

function function2() {
    console.log("This is from function 2")
}

function functionCaller(function1, function2) { // On declaration - parameters
    function2()
    function1()
}

functionCaller(function1, function2) // On call - arguments
