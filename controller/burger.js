const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

// this is where the routes will go

router.get("/", function (req, res) {
  res.redirect("/burgers");
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function (req, res) {
  burger.all(function (data) {
    res.render("index", { burger_data: data });
  });
});

router.post("/burgers/create", function (req, res) {
  burger.create(req.body.burger_name, function (result) {
    console.log(result);
    res.redirect("/")
  });
});

router.put("/burgers/:id", function (req, res) {

  burger.update(req.params.id, function (result) {
    console.log(result);
    res.sendStatus(200)
  });
});


// Export routes for server.js to use.
module.exports = router;
