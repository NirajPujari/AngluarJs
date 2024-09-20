const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

// Initialize dotenv to load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the "src" directory
app.use(express.static(path.join(__dirname, "src")));

// Routes
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "src/index.html"));
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});