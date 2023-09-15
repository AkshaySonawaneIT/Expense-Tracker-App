const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect("mongodb+srv://akshaysonawane1958:Akshay2023@cluster0.rg6y3nv.mongodb.net/?retryWrites=true&w=majority");
        console.log("DB connected...");
    }
    catch (error) {
        console.log("DB connection error");
    }
}

module.exports = { db };