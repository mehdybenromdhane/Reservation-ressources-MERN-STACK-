const express = require("express");
const router = express.Router();
let path = require("path");

const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let Service = require("../models/service");
let Categorie = require("../models/categorie");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "images");
  },
  filename: function(req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

router.post("/add", upload.single("photo"), (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const categorie = req.body.categorie;

  const photo = req.file.filename;

  const newServiceData = {
    title,
    photo,
    price,
    description,
    categorie,
  };

  const newService = new Service(newServiceData);

  newService
    .save()
    .then(() => res.json("Service Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/addCat", function(req, res) {
  var newCat = new Categorie();

  newCat.name = req.body.name;

  newCat.save(function(err, insertedCat) {
    if (err) {
      console.log("Error saving  categorie");
    } else {
      res.json(insertedCat);
      console.log(insertedCat);
    }
  });
});

router.get("/categories", function(req, res) {
  console.log("Get request for all cat");
  Categorie.find({}).exec(function(err, cat) {
    if (err) {
      console.log("error categories");
    } else {
      res.json(cat);
    }
  });
});
module.exports = router;
