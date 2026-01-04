import express from "express";
import cors from "cors";

// import { users } from "./user.js";
import connectDb from "./config/db.js";

import userRoutes from "./routes/user.js";

connectDb();

const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("Server is listing on port 5000");
});
