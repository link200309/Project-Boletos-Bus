import express from "express";
import { PORT } from "./config.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.listen(process.env.PORT || 3000);
console.log(`Server is running on port ${PORT}`);

app.use(express.json());
app.use(userRoutes);