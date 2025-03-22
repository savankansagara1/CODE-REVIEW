const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express();

// ✅ Allow all origins (Universal CORS)
app.use(cors({
  origin: "*",  // Allows requests from any domain
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json()); // ✅ Parse JSON body

app.get("/", (req, res) => {
  res.send("Hello Savan!");
});

app.use("/ai", aiRoutes);

module.exports = app;
