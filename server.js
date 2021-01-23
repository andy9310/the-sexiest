const express = require("express");
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname,"frontend", 'build')));

const bodyParser = require("body-parser");
const profilesRoute = require("./routes/profiles");
require("dotenv/config");
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
app.use(bodyParser.json());
app.use("/api/profile", profilesRoute);
app.get("/", (req, res) => {
  res.send("this is home");
});
const frontend_url = ["/","/play","/result"];
app.get(frontend_url, function (req, res) {
  res.sendFile(path.join(__dirname, "frontend",'build', 'index.html'));
});
// import routes
mongoose.connect(
  process.env.DB_URL,
  (Option = { useNewUrlParser: true, useUnifiedTopology: true }),
  () => {
    console.log("connected to mongodb!");
  }
);

app.listen(port, () => console.log(`server listening at port ${port}`));
