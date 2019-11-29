const multer = require("multer");
const { uploads } = require("./environment");

// Settings
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploads);
  },
  filename: async function(req, file, cb) {
    //Esté nombre es el que se guarda en la base de datos
    let filename = `${file.fieldname}-${Date.now()}`;
    const extension = file.mimetype.split('/')[1];
    req.body.imagen = `${filename}.${extension}`;
    cb(null, `${filename}.${extension}`);
  }
});
const upload = multer({ storage });

module.exports = upload;
