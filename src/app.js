const express = require ("express");
const userRouter = require ("./router/userRouter.js");

const PORT = 3000;

const app = express();

app.get ("/", (req, res) => {
    res.send('<h1> Hello World!</h1');

});

app.use(';api', )

app.listen (PORT, () => {
    console.log ("Servidor online");

});