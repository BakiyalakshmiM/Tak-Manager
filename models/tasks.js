const mongoose = require("mongoose");

let taskSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: [true, "Name is required"],
        minlength: [3, "Name should not be less then 3 chars"],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

let Task = mongoose.model("Task", taskSchema);

module.exports = {
    Task
}
