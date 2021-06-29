const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingControllers");

router.get("/", bookingController.get);

router.post("/", bookingController.post);

router.put("/:id", bookingController.put);

router.delete("/:id", bookingController.delete);

module.exports = router;
