//Conexion com moongose
const mongoose = require('mongoose');
const config = require('config');
const db = config.get("mongoURI");

const connectDB = async () => {
    try {
        await mongoose.connect(db, {});
        console.log('la conexion con la bd ha sido establecida');
    } catch (error) {
        console.error(error.message);
        process.exit(1);    // hace que node salga con un error
    }
}

module.exports = connectDB;