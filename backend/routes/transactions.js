const { addExpense, getExpenses, deleteExpense } = require('../controllers/expenseController.js');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/incomeController.js');

const transactionRouter = require('express').Router();

transactionRouter.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpenses)
    .delete('/delete-expense/:id', deleteExpense)



module.exports = transactionRouter;