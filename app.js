const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = 3000;

connectDB();

// middleware

app.use(express.json());

//Definir las rutas
app.use('/api/users', require('./routes/users'));
app.use('/api/login', require('./routes/login'));
app.use('/api/contacts', require('./routes/contacts'));




app.listen(PORT, () => console.log(`servidor escuchando ${PORT}`));