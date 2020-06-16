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
    res.json({ burgers: data });
  });
});

router.post("/burgers", function (req, res) {
  burger.create(req.body.burger_name, function (result) {
    console.log(result);
    res.redirect("/burgers")
  });
});

router.put("/burgers/:id", function (req, res) {

  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
   devoured: req.body.devour
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.json({ id: req.params.id });
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
