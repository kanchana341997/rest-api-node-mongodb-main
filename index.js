const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const studentsRouter = require("./routes/student");
app.use("/students", studentsRouter);

const rolesRouter = require("./routes/role");
app.use("/roles", rolesRouter);

const db = "mongodb://localhost:27017/school";
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("Server Running"));
