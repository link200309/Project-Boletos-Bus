import express from "express";
import { PORT } from "./config.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(userRoutes);

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
