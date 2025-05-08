import express from "express";
import { PORT } from "./config.js";
import userRoutes from "./routes/user.routes.js";
import travelRouter from "./routes/travel.routes.js";

const app = express();

app.listen(process.env.PORT || 4000);
console.log(`Server is running on port ${PORT}`);

app.use(express.json());
app.use(userRoutes);
app.use('/travel',travelRouter);
