const express = require('express');
const User = require('../models/User');

const router = express.Router();

//@route    POST api/users
//@desc     Registra un nuevo usuario
//@access   Public

router.post('/', (req, res) => {
    // Validar los datos
    // Mirar si el user ya existe
    
    console.log(req.body);
    const { name, email, password } = req.body;
  try {
    let user = User.findOne({ email });
    if (user) {
      res.status(400).json({msg:'El usuario ya existe'});
    }
      user = new User({
        name,
        email,
        password,
      });
        // mongoose crea un objeto que coincide con el esquema.
      user.save();
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error en el servidor');
    }
    res.json(req.body);
});

module.exports = router;