const mongoose = require("mongoose");
require("dotenv").config();

function connectDB(req, res, next){
    mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(()=>{
    console.log("Connected")
    next();
    }).catch(()=> {
        res.write("Error");
        console.log(err)});
}

module.exports = {
    connectDB
}