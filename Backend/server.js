require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

//Proposal Routes
const proposalRoutes = require("./routes/proposals");
const loginRoutes = require("./routes/login");

//express app
const app = express();

//Middleware
//Basic
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Middleware
//Attach body to requests
app.use(express.json());

// Routes
app.use("/api/proposals", proposalRoutes);
app.use("/api/login", loginRoutes);

//Connecting to MongoDB
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    //Listening for Requests
    app.listen(process.env.PORT, () => {
      console.log("Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
