// 在线客服
const express = require("express");
const expressWs = require("express-ws");

const router = express.Router();

expressWs(router);
console.log("进入到这里");

router.ws("/", function (ws, req) {
  console.log("连接成功");
  ws.send("链接成功");
  ws.on("message", function (msg) {
    ws.send("pong:", +msg);
  });
  ws.on("close", function () {
    console.log("socket断开连接");
  });
});

module.exports = router;
