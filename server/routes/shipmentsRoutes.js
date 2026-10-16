const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {

  if(!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    return res.status(400).json({
      message: "Request body must be a JSON object",
    });
  }

  const origin = req.body.origin?.trim();
  const destination = req.body.destination?.trim();

  if (!origin || !destination) {
    return res.status(400).json({
      message: "Origin and destination are required",
    });
  }

  res.status(201).json({
    message: "Shipment created successfully",
    shipment: {origin, destination},
  });
});

module.exports = router;
