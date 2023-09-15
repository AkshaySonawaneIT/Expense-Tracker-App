const IncomeSchema = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;
    const income = new IncomeSchema(req.body);
    try {
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: "All fields are required...." });
        }
        if (amount <= 0 || !amount) {
            return res.status(400).json({ message: "Amount should be a number or must be greater than zero ...." });
        }
        await income.save();
        return res.status(200).json({ message: "Income saved..." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error in creating income" });
    }

    // console.log(income);
}

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
        res.status(200).json(incomes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error in fetching income" });
    }
}

exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            return res.status(200).json({ message: "Income deleted...", result: income });
        })
        .catch((err) => {
            return res.status(500).json({ message: "Error in deleting income..." });
        })
}