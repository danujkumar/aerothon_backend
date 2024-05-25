// server.js

const express = require("express");
const path = require("path");
const routes = require("./src/routes/database_morning");
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON
app.use(express.json());

// Use CORS middleware to allow requests from your frontend domain
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's URL
  })
);

// Use the routes defined in routes.js
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});