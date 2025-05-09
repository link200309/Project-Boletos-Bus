import express from "express";
import userRoutes from "./routes/user.routes.js";
import travelRouter from "./routes/travel.routes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT || 4000);
console.log(`Server is running on port ${PORT}`);

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use("/travel", travelRouter);
