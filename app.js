const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const {connectDB} = require("./db/connection")
const {notFound} = require("./middleware/not-found")
const {errorHandlerMiddleWare} = require("./middleware/error-handler")

app.use(connectDB)

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('./public'))

app.use('/api/v1/tasks', tasks)

app.use(notFound);

app.use(errorHandlerMiddleWare);


app.listen(3000, ()=> console.log("Listening port 3000"))