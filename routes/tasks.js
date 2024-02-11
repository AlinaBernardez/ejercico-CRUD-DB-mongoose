const express = require('express');
const router = express.Router();
const Task = require('../models/Task')

router.post("/create", async(req, res) => {
    try {
        const newTask = await Task.create(req.body);
        res.status(201).send({ message: 'Task created!', newTask});
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a new task" });
    }
});

router.get('/', async(req, res) => {
    try {
        const allTasks = await Task.find({})
        return res.status(200).send({ message: 'Task deleted!', allTasks })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'There was a problem searching for your tasks' })
    }
});

router.get('/id/:_id', async(req, res) => {
    try {
        const thisTask = await Task.findById(req.params.id)
        if(!thisTask) return res.status(404).json({ message: 'No such Task found!'})
        return res.json(thisTask)
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'There was a problem searching for your task' })
    }
});

router.put('/markAsCompleted/:_id', async(req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {completed: true})
        if(!updatedTask) return res.status(404).json({ message: 'No such Task found!'})
        return res.json(updatedTask)
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'There was a problem updating your task' })
    }
});

router.put('/id/:_id', async(req, res) => {
    try {
        const updateObject = req.body
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, updateObject)
        if(!updatedTask) return res.status(404).json({ message: 'No such Task found!'})
        return res.json(updatedTask)
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'There was a problem updating your task' })
    }
});

router.delete('/id/:_id', async(req, res) => {
    try {
        const taskToDelete = await Task.findByIdAndDelete(req.params.id)
        if(!taskToDelete) return res.status(404).json({ message: 'No such Task found!'})
        return res.status(200).send({ message: 'Task deleted!' })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'There was a problem deleting your task' })
    }
});

module.exports = router;