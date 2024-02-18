// API - Application Programming interface
// https://localhost:3000 - url

// parameters
// https://localhost:3000/users/admin/
// https://localhost:3000/products
// https://localhost:3000/contact

// Query strings
// https://localhost:3000/users/admin/name=tokunbo
// https://localhost:3000/users/admin/id=001&name=tokunbo
// https://localhost:3000/users/admin/:id
// https://localhost:3000/products/males/product=wristwatch&model=rolex
// https://localhost:3000/contact

// HTTP Methods - GET, POST, PUT (UPDATE), DELETE

import express from 'express';
const app = express();

// IMPORTING ROUTES
import users from './users.js'
import products from './products.js'
import contact from './contact.js'

// USING MIDDLEWARE

// GET REQUESTS
app.use('/api/v1', users);
app.use('/api/v1', products);
app.use('/api/v1', contact)

app.listen(3000, () => {
    console.log("Listening to server at http://localhost:3000");
});