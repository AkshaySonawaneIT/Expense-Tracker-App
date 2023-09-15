const ExpenseSchema = require("../models/expenseModel");


exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;
    const expense = new ExpenseSchema(req.body);
    try {
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: "All fields are required...." });
        }
        if (amount <= 0 || !amount) {
            return res.status(400).json({ message: "Amount should be a number or must be greater than zero ...." });
        }
        await expense.save();
        return res.status(200).json({ message: "Expense saved..." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error in creating expense..." });
    }

    // console.log(income);
}

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
        res.status(200).json(expenses);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error in expense income" });
    }
}

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            return res.status(200).json({ message: "Expense deleted...", result: expense });
        })
        .catch((err) => {
            return res.status(500).json({ message: "Error in deleting expense..." });
        })
}