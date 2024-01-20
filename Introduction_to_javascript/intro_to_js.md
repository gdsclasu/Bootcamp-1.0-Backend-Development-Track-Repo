## Introduction to javascript Programming

![JavaScript](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png)

JavaScript is a versatile programming language commonly used for creating interactive and dynamic web pages. It is both client-side and server-side scripting language that allows developers to modify the behavior and content of web pages, and also make them dynamic. Here are some key features of JavaScript:

- JavaScript is lightweight and interpreted, making it easy to write and execute.
- It is an object-oriented language, enabling developers to create interactive effects within web browsers.
- JavaScript supports multiple programming paradigms, including object-oriented, imperative, and functional styles.
- It conforms to the ECMAScript [ES*] specification, ensuring compatibility across different platforms and browsers.

Click any of this links to learn everything you need to know about JavaScript:
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) - ![mark image](https://img.shields.io/badge/Recommended-Yes-green)
- [JavaScript Tutorial](https://www.javascripttutorial.net/)
- [geeksforgeeks JavaScript](https://www.geeksforgeeks.org/javascript-tutorial/)
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)
- [JavaScript Exercises](https://www.javascripttutorial.net/javascript-exercises/)
- [JavaScript Quiz](https://www.javascripttutorial.net/javascript-quiz/)
- [JavaScript Interview Questions](https://www.javascripttutorial.net/javascript-interview-questions/)
- [JavaScript Cheat Sheet](https://www.javascripttutorial.net/javascript-cheat-sheet/)
- [JavaScript Books](https://www.javascripttutorial.net/javascript-books/)

To get an overview of jaavscript, keep scrolling... !
## Scopes in JavaScript
Scoping refers to the visibility of variables. In JavaScript, variables can be declared either inside or outside of a function, which determines their scope.

__Types of Scopes in JavaScript__

There are three types of scopes in JavaScript:
- __Global Scope__: Variables declared outside of a function are global variables and are accessible throughout a program.
- __Local Scope__: Variables declared inside a function are local variables and are only accessible within that function.
- __Block Scope__: Variables declared with the let and const keywords are block-scoped and are only accessible within the block in which they are declared, either global or local.

## Variables in JavaScript
Variables are used to store data values in a program. In JavaScript, and can be declared using the `var`, `let`, or `const` keywords.
- `var`: declares variables that are globally or locally scoped to a function.
- `let`: declares variables that are block-scoped.
- `const`: declare variables that are block or global-scoped and cannot be reassigned.

## Data Types in JavaScript
JavaScript is a loosely typed language, meaning that variables do not need to be declared with a specific data type. Instead, data types are determined dynamically at runtime. There are six primitive data types in JavaScript:
- __String__: a sequence of characters enclosed in single or double quotes.
    - example: `let name = 'John';`
- __Number__: an integer or floating-point number.
    - example: `let age = 30;`
- __Boolean__: a value that is either true or false.
    - example: `let isAdult = true;`
- __Null__: a value that represents the intentional absence of an object value.
    - example: `let person = null;`
- __Undefined__: a value that is automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments.
    - example: `let person;`
- __Symbol__: a unique value that is not equal to any other value.
    - example: `let id = Symbol('id');`

## Operators in JavaScript
Operators are used to perform operations on variables and values. JavaScript supports the following types of operators:
- __Arithmetic Operators__: used to perform arithmetic operations on numeric operands.
    ```
    let x = 10;
    let y = 5;
    console.log(x + y); // 15
    ```
- __Assignment Operators__: used to assign values to variables.
    ```
    let x = 10;
    x += 5;
    console.log(x); // 15
    ```
- __Comparison Operators__: used to compare the equality of two operands.
    ```
    let x = 10;
    let y = 5;
    console.log(x > y); // true
    ```
- __Logical Operators__: used to combine conditional statements.
    ```
    let x = 10;
    let y = 5;
    console.log(x > 5 && y < 10); // true
    ```
- __Bitwise Operators__: used to perform bitwise operations on operands.
    ```
    let x = 10;
    let y = 5;
    console.log(x & y); // 0
    ```
- __String Operators__: used to concatenate strings.
    ```
    let firstName = 'John';
    let lastName = 'Doe';
    console.log(firstName + ' ' + lastName); // John Doe
    ```
- __Conditional (Ternary) Operator__: used to assign a value to a variable based on a condition.
    ```
    let age = 30;
    let isAdult = (age > 18) ? true : false;
    console.log(isAdult); // true
    ```
- __Comma Operator__: used to evaluate multiple expressions and return the last expression.
    ```
    let x = 10, y = 5;
    console.log(x, y); // 10 5
    ```

## Arrays in JavaScript
Arrays are used to store multiple values in a single variable. In JavaScript, arrays are declared using square brackets and can contain elements of any data type. Here are some key features of arrays in JavaScript:
- __Array Declaration__: an array is declared using square brackets and can contain elements of any data type.
    ```
    let fruits = ['Apple', 'Banana', 'Orange'];
    ```
- __Array Length__: the length of an array is the number of elements it contains.
    ```
    let fruits = ['Apple', 'Banana', 'Orange'];
    console.log(fruits.length); // 3
    ```
- __Array Index__: the index of an array is the position of an element in the array.
    ```
    let fruits = ['Apple', 'Banana', 'Orange'];
    console.log(fruits[0]); // Apple
    ```
- __Array Methods__: methods are used to perform operations on arrays.
    ```
    let fruits = ['Apple', 'Banana', 'Orange'];
    fruits.push('Mango'); // add element to end of array
    fruits.pop(); // remove element from end of array
    fruits.shift(); // remove element from beginning of array
    fruits.unshift('Mango'); // add element to beginning of array
    fruits.splice(1, 1, 'Kiwi'); // add element at index 1 and remove 1 element
    fruits.slice(1, 3); // return elements from index 1 to 3
    fruits.concat(['Pineapple', 'Watermelon']); // merge two arrays
    fruits.sort(); // sort elements in array
    fruits.reverse(); // reverse order of elements in array
    fruits.join(', '); // join elements in array into string
    fruits.indexOf('Banana'); // return index of element
    fruits.includes('Banana'); // return true if element exists in array
    fruits.forEach(fruit => console.log(fruit)); // iterate over array
    fruits.map(fruit => fruit.toUpperCase()); // return new array
    fruits.filter(fruit => fruit.length > 5); // return new array
    fruits.reduce((total, fruit) => total + fruit.length, 0); // return single value
    ```
- __Array Iteration__: arrays can be iterated using the for, for...of, and forEach loops.
    ```
    let fruits = ['Apple', 'Banana', 'Orange'];
    for (let i = 0; i < fruits.length; i++) { console.log(fruits[i]); }

    for (let fruit of fruits) { console.log(fruit); }

    fruits.forEach(fruit => console.log(fruit));
    ```
- __Array Destructuring__: array destructuring is used to unpack values from arrays into distinct variables.
    ```
    let fruits = ['Apple', 'Banana', 'Orange'];
    let [first, second, third] = fruits;
    console.log(first); // Apple
    console.log(second); // Banana
    console.log(third); // Orange
    ```
- __Array Spread Operator__: the spread operator is used to expand an array into individual elements.
    ```
    let fruits = ['Apple', 'Banana', 'Orange'];
    let allFruits = [...fruits, 'Mango', 'Pineapple'];

    console.log(allFruits); // ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple']
    ```

## Functions in JavaScript
Functions are reusable blocks of code that perform a specific task. In JavaScript, functions are declared using the `function` keyword and can be invoked using the function name followed by parentheses. Functions can also be assigned to variables, passed as arguments to other functions, and returned from functions. Here are some key features of functions in JavaScript:
- __Function Declaration__: a function declaration defines a named function and can be invoked using the function name.
    ```
    function add(x, y) { return x + y; } console.log(add(5, 10)); // 15
    ```
- __Function Expression__: a function expression defines a function as part of a larger expression and can be invoked using the variable name.
    ```
    let add = function(x, y) { return x + y; }
    console.log(add(5, 10)); // 15
    ```
- __Arrow Function__: an arrow function is a shorthand syntax for defining a function expression and can be invoked using the variable name.
    ```
    let add = (x, y) => x + y;
    console.log(add(5, 10)); // 15
    ```
- __Immediately Invoked Function Expression (IIFE)__: an IIFE is a function that is immediately invoked after it is defined.
    ```
    (function() {
        console.log('Hello World!'); })(); // Hello World!
    ```
- __Higher-Order Function__: a higher-order function is a function that takes another function as an argument or returns a function as a result.
    ```
    function add(x, y) { return x + y; }
    function subtract(x, y) { return x - y; }
    function multiply(x, y) { return x * y; }
    function divide(x, y) { return x / y; }
    function calculate(x, y, operation) { return operation(x, y); }

    console.log(calculate(5, 10, add)); // 15
    console.log(calculate(5, 10, subtract)); // -5
    console.log(calculate(5, 10, multiply)); // 50
    console.log(calculate(5, 10, divide)); // 0.5
    ```

## Objects in JavaScript
Objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects are declared using curly braces and can contain properties and methods. Here are some key features of objects in JavaScript:
- __Object Declaration__: an object is declared using curly braces and can contain properties and methods.
    ```
    let person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        hobbies: ['music', 'movies', 'sports'],
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY'
        }
    };
    ```
- __Object Properties__: an object property is a key-value pair where the key is a string and the value can be any valid data type.
    ```
    let person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        hobbies: ['music', 'movies', 'sports'],
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY'
        }
    };

    console.log(person.firstName); // John
    console.log(person['lastName']); // Doe
    ```
- __Object Methods__: an object method is a function that is a property of an object.
    ```
    let person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        hobbies: ['music', 'movies', 'sports'],
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY'
        },
        getBirthYear: function() {
            return 2020 - this.age;
        }
    };

    console.log(person.getBirthYear()); // 1990
    ```
- __Object Constructor__: an object constructor is a function that is used to create an object.
    ```
    function Person(firstName, lastName, age, hobbies) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.hobbies = hobbies;
    }

    let person1 = new Person('John', 'Doe', 30, ['music', 'movies', 'sports']);
    let person2 = new Person('Mary', 'Smith', 25, ['traveling', 'reading', 'shopping']);

    console.log(person1.firstName); // John
    console.log(person2.firstName); // Mary
    ```
- __Object Prototypes__: an object prototype is a property of an object that is shared among all instances of the object.
    ```
    function Person(firstName, lastName, age, hobbies) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.hobbies = hobbies;
    }

    Person.prototype.getBirthYear = function() {
        return 2020 - this.age;
    }

    let person1 = new Person('John', 'Doe', 30, ['music', 'movies', 'sports']);
    let person2 = new Person('Mary', 'Smith', 25, ['traveling', 'reading', 'shopping']);

    console.log(person1.getBirthYear()); // 1990
    console.log(person2.getBirthYear()); // 1995
    ```
- __Object Destructuring__: object destructuring is used to unpack values from objects into distinct variables.
    ```
    let person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        hobbies: ['music', 'movies', 'sports'],
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY'
        }
    };

    let { firstName, lastName, address: { city } } = person;
    console.log(firstName); // John
    console.log(lastName); // Doe
    console.log(city); // New York
    ```
- __Object Spread Operator__: the spread operator is used to expand an object into individual elements.
    ```
    let person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        hobbies: ['music', 'movies', 'sports'],
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY'
        }
    };

    let contactInfo = {
        email: '
        phone: '555-555-5555'
    };

    let personInfo = { ...person, ...contactInfo };
    console.log(personInfo); // { firstName: 'John', lastName: 'Doe', age: 30, hobbies: [ 'music', 'movies', 'sports' ], address: { street: '123 Main St', city: 'New York', state: 'NY' }, email: '
    phone: '555-555-5555' }
    ```
- __Object Iteration__: objects can be iterated using the for...in loop.
    ```
    let person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        hobbies: ['music', 'movies', 'sports'],
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY'
        }
    };

    for (let key in person) { console.log(person[key]); }
    ```
- __Object Enumeration__: object properties can be enumerated using the Object.keys(), Object.values(), and Object.entries() methods.
    ```
    let person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        hobbies: ['music', 'movies', 'sports'],
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY'
        }
    };

    console.log(Object.keys(person)); // [ 'firstName', 'lastName', 'age', 'hobbies', 'address' ]
    console.log(Object.values(person)); // [ 'John', 'Doe', 30, [ 'music', 'movies', 'sports' ], { street: '123 Main St', city: 'New York', state: 'NY' } ]
    console.log(Object.entries(person)); // [ [ 'firstName', 'John' ], [ 'lastName', 'Doe' ], [ 'age', 30 ], [ 'hobbies', [ 'music', 'movies', 'sports' ] ], [ 'address', { street: '123 Main St', city: 'New York', state: 'NY' } ] ]
    ```
- __Object Serialization__: object serialization is the process of converting an object into a string.
    ```
    let person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        hobbies: ['music', 'movies', 'sports'],
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY'
        }
    };

    let personJSON = JSON.stringify(person);
    console.log(personJSON); // {"firstName":"John","lastName":"Doe","age":30,"hobbies":["music","movies","sports"],"address":{"street":"123 Main St","city":"New York","state":"NY"}}
    ```
- __Object Deserialization__: object deserialization is the process of converting a string into an object.
    ```
    let personJSON = '{"firstName":"John","lastName":"Doe","age":30,"hobbies":["music","movies","sports"],"address":{"street":"123 Main St","city":"New York","state":"NY"}}';

    let person = JSON.parse(personJSON);
    console.log(person); // { firstName: 'John', lastName: 'Doe', age: 30, hobbies: [ 'music', 'movies', 'sports' ], address: { street: '123 Main St', city: 'New York', state: 'NY' } }
    ```
- __Object Equality__: objects are compared by reference, not value.
    ```
    let person1 = {
        firstName: 'John',
        lastName: 'Doe'
    };

    let person2 = {
        firstName: 'John',
        lastName: 'Doe'
    };

    console.log(person1 === person2); // false
    ```