const express = require("express");
const router = express.Router();
const hotelControllers = require("../controllers/hotelController");

router.get("/", hotelControllers.get);

router.post("/", hotelControllers.post);

router.put("/:id", hotelControllers.put);

router.delete("/:id", hotelControllers.delete);

module.exports = router;
