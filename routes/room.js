const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomControllers");

router.get("/", roomController.get);

router.post("/", roomController.post);

router.put("/:id", roomController.put);

router.delete("/:id", roomController.delete);

module.exports = router;
