const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'testkey',
    resave: false,
    saveUninitialized: true
}))

app.listen(9192, () => console.log("Server is on 9192"))