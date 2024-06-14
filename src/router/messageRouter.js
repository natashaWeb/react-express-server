const express = require("express");

const router = express.Router();

const {read} = require("../controller/messageController")

router.get("/get", read);


module.exports = router;
