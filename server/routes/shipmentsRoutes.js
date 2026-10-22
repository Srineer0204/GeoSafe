const express = require("express");
const router = express.Router();
const connection = require("../config/db");

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

  const sql = "INSERT INTO shipments (origin,destination) VALUES (?, ?)";
  
  connection.query(sql,[origin,destination], (err,results) => {
    if(err) {
      console.error("Error creating shipment:", err.message);
      return res.status(500).json({
        message: "Failed to create shipment",
      });
    }
    res.status(201).json({
      message:"Shipment created succesfully",
      shipment: {
        id: results.insertId,
        origin,
        destination
      },
    });
  });
});

module.exports = router;
