"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _express = require("express");
var _express2 = _interopRequireDefault(_express);
var _users = require("../controllers/users.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express2["default"].Router();
router.get("/", _users.getAllUsers);
router.post("/addUser", _users.addUser);
router.get("/delete", function (req, res) {
  res.send("Xoá 1 User");
});
router.get("/*", function (req, res) {
  return res.send("Server none");
});
exports["default"] = router;