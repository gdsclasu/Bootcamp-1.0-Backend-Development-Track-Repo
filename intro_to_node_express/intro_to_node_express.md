## Intro to Node/Expressjs
This section will cover the basics of Node.js and Express.js.
We will cover the following topics:
- What is Node.js?
- What is Express.js?
- How to create a simple server using Node.js and Express.js
- How to create a simple REST API using Node.js and Express.js
- How to use the following in express/Node.js:
    - middleware
    - routing
    - templates
    - databases
    - authentication
    - sessions
    - cookies
    - websockets
    - testing
    - deployment
    - security
    - logging
    - error handling
    - performance
    - monitoring
    - scaling
    - microservices
    - GraphQL
    - REST
    - gRPC
    - WebSockets
    - WebRTC
- How to use Node.js and Express.js with other technologies:
    - React.js
    - Angular.js
    - Vue.js
    - MongoDB
    - MySQL

## What is Node.js?
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is designed to build scalable network applications. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

## What is Express.js?
Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is designed for building web applications and APIs. It is the de facto standard server framework for Node.js.

## How to create a simple server using Node.js and Express.js
To create a simple server using Node.js and Express.js, you can follow these steps:
1. Install Node.js and npm
2. Create a new directory for your project
3. Create a new file called `app.js` in the project directory
4. Install Express.js using npm
5. Write the code to create a simple server in `app.js`
6. Run the server using the `node` command

Here is an example of how to create a simple server using Node.js and Express.js:
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```

## How to create a simple REST API using Node.js and Express.js
To create a simple REST API using Node.js and Express.js, you can follow these steps:
1. After following the previous section on how to create a simple server using Node.js and Express.js, you can add routes to handle different HTTP methods (GET, POST, PUT, DELETE) and return JSON data.
2. You can use the `express.Router` class to create modular, mountable route handlers.

Here is an example of how to create a simple REST API using Node.js and Express.js:
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```

## How to use middleware in Express/Node.js
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. They can perform the following tasks:
- Execute any code
- Make changes to the request and the response objects
- End the request-response cycle
- Call the next middleware function in the stack

Here is an example of how to use middleware in Express/Node.js:
```javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware function
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```

## How to use routing in Express/Node.js
Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, PUT, DELETE). Each route can have one or more handler functions, which are executed when the route is matched.

Here is an example of how to use routing in Express/Node.js:
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.send('Got a POST request');
});

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```

## How to use templates  in Express/Node.js
Templates are used to generate dynamic HTML content. You can use template engines with Express to create views and render them to the client.

Some of the popular template engines for Express are Pug, EJS, and Handlebars.

Here is an example of how to use templates in Express/Node.js:
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

console.log(__dirname); // This will print the current directory

app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```
You can create a file called `index.ejs` in a `views` directory with the following content:
```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <h1><%= title %></h1>
  </body>
</html>
```

## How to use databases in Express/Node.js
You can use databases with Express/Node.js to store and retrieve data. Some of the popular databases that you can use with Express/Node.js are MongoDB, MySQL, PostgreSQL, SQLite, and Redis.

### Using MongoDB (with Mongoose library)
Here is an example of how to use a database in Express/Node.js with MongoDB (mongoose library):
```javascript
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose'); // You need to install mongoose using npm

const mongoURI = 'mongodb://localhost/test';
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(mongoURI, mongooseOptions);

const Cat = mongoose.model('Cat', { name: String });

app.get('/cats', (req, res) => {
  Cat.find({}, (err, cats) => {
    if (err) {
      res.status(500).send()
    }
    res.json(cats);
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```
### Using MongoDB with the native driver
Here is an example of how to use a database in Express/Node.js with MongoDB (native driver):
```javascript
const express = require('express');
const app = express();
const port = 3000;
const MongoClient = require('mongodb').MongoClient; // You need to install mongodb using npm

const mongoURI = 'mongodb://localhost:27017';
const mongoOptions = {
    // This is to avoid deprecation warnings
    useNewUrlParser: true,
    useUnifiedTopology: true
};

MongoClient.connect(mongoURI, mongoOptions, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }
  const db = client.db('test');
  const collection = db.collection('cats');

  app.get('/cats', (req, res) => {
    collection.find({}).toArray((err, cats) => {
      if (err) {
        res.status(500).send();
      }
      res.json(cats);
    });
  });

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
});
```

### Using MySQL
Here is an example of how to use a database in Express/Node.js with MySQL:
```javascript
const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql'); // You need to install mysql using npm

const connectionDetails = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test'
};

const connection = mysql.createConnection(connectionDetails);
connection.connect();

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      res.status(500).send();
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```
