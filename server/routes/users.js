/*
File name: assignment2 comp229(301157840)
Student name: Hyunjin Park
Student Id: 301157840
Date: 2022/10/31
*/

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Placeholder");
});

module.exports = router;
