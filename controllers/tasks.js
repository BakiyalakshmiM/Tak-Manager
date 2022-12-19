const {Task} = require("../models/tasks")
const {asyncWrapper} = require("../middleware/async");

let getAllTasks = asyncWrapper(async (req, res, next)=>{
        let allTasks = await Task.find({});
        res.status(200).json(allTasks)
})

let createTask = asyncWrapper(async (req, res) => {
        let newTask = await Task.create(req.body)
        res.send(newTask)
})

let getTask = asyncWrapper(async (req, res) => {
        let { id } = req.params;
        let getTask = await Task.findOne({_id: id});
        if(!getTask){
            return res.status(404).send(`Id ${id} not found`);
        }
        res.send(getTask)
})

let updateTask = asyncWrapper(async (req, res) => {
        let {id} = req.params;
        let update = await Task.findOneAndUpdate({ _id: id}, req.body, {
            new : true,
            runValidators: true
        })
        if(!update){
            return res.status(404).json({success: false});
        }
        res.status(200).json(update)
    })

let deleteTask = asyncWrapper(async (req, res) => {
        let {id} = req.params;
        let delItem = await Task.deleteOne({_id: id});
        if(!delItem){
            return res.status(500).send(`Id ${id} not found`);
        }
        res.status(200).json(delItem)
})

module.exports = { getAllTasks, createTask, updateTask, getTask, deleteTask };