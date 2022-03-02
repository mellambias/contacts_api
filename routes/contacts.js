const express = require("express");
const router = express.Router();

//@route    GET api/contacts
//@desc     obtener todos los contactos
//@access   Private

router.get("/", (req, res) => {
  res.json({ contacts: "Array con todos los contactos" });
});

//@route    POST api/contacts
//@desc     crear un contacto nuevo
//@access   Private

router.post("/", (req, res) => {
  res.json({ contact: "Contacto creado" });
});

//@route    PUT api/contacts/:id
//@desc     actualiza el contacto con el id
//@access   Private

router.put("/", (req, res) => {
  res.json({ contact: "contacto actualizado" });
});

//@route    DELETE api/contacts/:id
//@desc     Elimina el contacto con el id
//@access   Private

router.delete("/", (req, res) => {
  res.json({ contact: "contacto eliminado" });
});

module.exports = router;
