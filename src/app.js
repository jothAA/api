const express = require ("express");
const userRouter = require("./router/userRouter.js");
const bodyParser = require("body-parse"); 
const PORT = 3000;
const app = express();

app.get ("/", (req, res) => {
    res.send('<h1> Hello World!</h1');

});

app.use("/api", userRouter);
app.use(bodyParser.json());
app.listen (PORT, () => {
    console.log ("Servidor online");

});