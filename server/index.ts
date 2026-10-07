import express from "express";
import cors from "cors";
import type { CodeQuestEvent } from "./events/types";
import {
  hasEvent,
  saveEvent,
} from "./events/eventStore";

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
  const event = req.body as CodeQuestEvent;

  if (!event || !event.type) {
    return res.status(400).json({
      accepted: false,
      error: "Invalid event",
    });
  }

  if (hasEvent(event)) {
    console.log("Duplicate event ignored:", event);

    return res.status(200).json({
      accepted: false,
      duplicate: true,
      event,
    });
  }

  saveEvent(event);

  console.log("Accepted event:", event);

  return res.status(201).json({
    accepted: true,
    duplicate: false,
    event,
  });
});

app.listen(PORT, () => {
  console.log(`CodeQuest backend running on http://localhost:${PORT}`);
});