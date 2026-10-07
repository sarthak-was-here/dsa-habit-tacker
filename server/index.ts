import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "CodeQuest backend is running 🚀",
  });
});
app.post("/api/events", (req, res) => {
  const event = req.body;

  if (!event || !event.type) {
    return res.status(400).json({
      error: "Invalid event",
    });
  }

  console.log("Received CodeQuest event:", event);

  return res.status(201).json({
    accepted: true,
    event,
  });
});

app.listen(PORT, () => {
  console.log(`CodeQuest backend running on http://localhost:${PORT}`);
});