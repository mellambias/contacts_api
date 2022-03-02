// Permite logear usuarios
const express = require("express");
const router = express.Router();

//@route    GET api/login/:id
//@desc     devuelve el usuario logeado
//@access   Private

router.get("/", (req, res) => {
  res.json({ user: "usuario logueado" });
});

//@route    POST api/login/:user/:password
//@desc     autenticar el usuario
//@return   token
//@access   Public

router.post("/", (req, res) => {
  res.json({ token: "devuelve un nuevo token" });
});



module.exports = router;