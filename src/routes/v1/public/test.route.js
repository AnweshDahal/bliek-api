const express = require("express")

const router = new express.Router();

const testController = require("../../../controllers/v1/public/test")

router.get("/test", testController.get)

module.exports = router;
