var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/", function (req, res, next) {
  res.send(`{
    responseCode:000000,
    responseMsg:请求成功,
  }`);
});

module.exports = router;
