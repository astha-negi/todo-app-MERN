const TodoItem = require("../models/TodoItem");
exports.createTodoItem = async(req, res, next) => {
    console.log(req.body);
    const { task, date } = req.body;
    const todoItem = new TodoItem({ task, date });
    await todoItem.save();
    res.status(201).json(todoItem );
}

exports.getTodoItem = async(req, res, next) => {
    const todoItems = await TodoItem.find();
    res.status(200).json(todoItems);
}

exports.deleteTodoItem = async(req, res, next) => {
    const { id } = req.params;
    await TodoItem.findByIdAndDelete(id);
    res.status(204).json({ message: "Todo item deleted successfully" });
}

exports.markCompleted = async(req, res, next) => {
    try {
        const { id } = req.params;
        const todoItem = await TodoItem.findByIdAndUpdate(id, { completed: true }, { returnDocument: 'after' });
        if (!todoItem) return res.status(404).json({ message: 'Todo item not found' });
        res.status(200).json(todoItem);
    } catch (err) {
        next(err);
    }
}