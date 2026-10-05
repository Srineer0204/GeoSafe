const express = require("express");

const router = express.Router();

router.post("/", (req,res) => {
    res.json({
        message: "Shipment created successfully",
        shipment: req.body,
    });
});

module.exports = router;