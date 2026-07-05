import express from "express";
import authRoutes from "./src/routes/auth.routes.js";
import staticdataRoutes from "./src/routes/staticdata.routes.js";
import simulationRoutes from "./src/routes/simulation.routes.js";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/staticdata", staticdataRoutes);
app.use("/simulation", simulationRoutes);


export default app;
