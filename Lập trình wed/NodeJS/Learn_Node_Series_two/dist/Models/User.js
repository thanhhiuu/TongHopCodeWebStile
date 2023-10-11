"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _mongoose = require("mongoose");
var _mongoose2 = _interopRequireDefault(_mongoose);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var UserSchema = new _mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  role_code: {
    type: String,
    required: true
  }
});
exports["default"] = _mongoose2["default"].model("User", UserSchema);