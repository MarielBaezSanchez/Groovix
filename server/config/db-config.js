const mongoose = require("mongoose");
const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Conexión a MongoDB exitosa");
    } catch (error) {
        console.error("Error en conexión con MongoDB:", error);
    }
};

module.exports = { connectMongoDB };
