import botLogic from "./logic_bot";

import express from "express";
import firebaseLogic from "./logic_firebase";
const app = express();
const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => res.send("Hello from server!"));
app.listen(PORT, () =>
  console.log(`⚡Server is running here 👉 https://localhost:${PORT}`),
);

firebaseLogic();
botLogic();