// routes.js

const express = require("express");
const router = express.Router();
const decider = require("../../Algorithm/Predefined/route_decider");
router.post("/route", (req, res) => {
  try {
    const { source_lat, source_long, destination_lat, destination_long, intermediates } = req.body;
    const route_decide = decider.route_decide([source_lat, source_long],[destination_lat, destination_long], intermediates);
    res.send(route_decide);
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log("Backend error: ", error);
  }
});

module.exports = router;