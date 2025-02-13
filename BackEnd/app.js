import express from "express";
import cors from "cors";
import aiRoutes from "./src/routes/ai.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/ai", aiRoutes);

export default app;
