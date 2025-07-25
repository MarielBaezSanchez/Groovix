const mongoose = require("mongoose");
require("dotenv").config();

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexión a MongoDB exitosa");
    } catch (error) {
        console.error("Error en conexión con MongoDB:", error);
    }
};

module.exports = { connectMongoDB };
