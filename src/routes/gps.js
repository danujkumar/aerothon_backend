//We will use two method first estimated by mathematics
// routes.js

const express = require("express");
const router = express.Router();
const estimated = require("../../Algorithm/Realtime/estimated");
router.post("/estimated", (req, res) => {
  try {
    const { source_lat, source_long, current_speed, headings, intervals } = req.body;
    const current_pos = estimated.calculateNewPosition(source_lat, source_long, current_speed, headings, intervals);
    res.send(current_pos);
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log("Backend error: ", error);
  }
});

module.exports = router;

//We will use second method by sensor of airplane
