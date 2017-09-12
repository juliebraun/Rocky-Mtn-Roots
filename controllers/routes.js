var express = require("express");
var router = express.Router();
var items = require("../app/models/items.js");

router.get("/", function(req, res) {
  items.all(function(item_data) {
    console.log(item_data);
    res.render("items", { item_data });
  });
});

// router.put("/item/update", function(req, res) {
//   items.update(req.body.item_id, function(result) {
//     console.log(result);
//     res.redirect("/");
//   });
// });

// router.post("/item/create", function(req, res) {
//   burger.create(req.body.item_name, function(result) {
//     res.redirect("/");
//   });
// });

module.exports = router;
