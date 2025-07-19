const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public")); // Serve HTML
app.use(express.json()); // Parse JSON body

// Handle comment POST
app.post("/api/comment", (req, res) => {
  const { name, message } = req.body;
  console.log(`📥 New comment from ${name || "Anonymous"}:`, message);
  res.json({ message: "✅ Comment received. Thanks!" });
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
