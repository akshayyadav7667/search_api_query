import express from "express";
import cors from "cors";

import { users } from "./user.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;
  console.log(q);

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q.toLowerCase()))
    );
  };

  res.json(search(users).slice(0, 30));
});

app.listen(5000, () => {
  console.log("Server is listing on port 5000");
});
