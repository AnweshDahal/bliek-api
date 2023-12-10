const express = require("express")

const router = new express.Router();

router.use("/", require("./test.route"))

module.exports = router
