var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/", function (req, res, next) {
  // res.setHead({ "Content-Type": "text/html;charset=utf-8" }); //设置response编码为utf-8
  res.send(
    JSON.stringify({
      responseCode: "000000",
      responseMsg: "欢迎使用 在线客服!",
    })
  );
});

module.exports = router;
