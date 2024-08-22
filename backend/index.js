import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import questionsRoute from "./routes/questionsRoute.js";
import { UserModel } from "./models/User.js";
import cors from "cors";

const app = express();

// Parsing request body
app.use(express.json());

// Handling CORS policy
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Connected to MongoDB");
});

app.use(questionsRoute);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Password incorrect");
      }
    } else {
      res.json("User not exist");
    }
  });
});

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
