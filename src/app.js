import express from "express";
import morgan from "morgan";
import cors from "cors";

//Routes
import clientRoutes from "./routes/client.routes"

const app = express();

app.use(cors());

//Settings

app.set("port", 9000);

//Middleware

app.use(morgan("dev"));

//Routes

app.use("/api/clients", clientRoutes);

export default app;