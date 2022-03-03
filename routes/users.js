const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const config = require("config");
const {check,validationResult} = require("express-validator");

const router = express.Router();

//@route    POST api/users
//@desc     Registra un nuevo usuario
//@access   Public

router.post(
  "/",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El correo no es valido").not().isEmpty().isEmail(),
    check("password", "El password debe tener mas de 2").isLength({min: 2})
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    // Mirar si el user ya existe

    console.log(req.body);
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "El usuario ya existe" });
      }
      user = new User({
        name,
        email,
        password,
      });

      // mongoose crea un objeto que coincide con el esquema.
      // Encriptar el password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();
      // generamos un token JWT y lo enviamos
      const payload = { user: { id: user.id } };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json(token);
        },
      );
    } catch (error) {
      console.error(error.message);
      res.status(503).send("Base de datos en mantenimiento");
    }
  },
);

module.exports = router;