const express = require("express");
const bodyParser = require("body-parser");
var cookies = require("cookie-parser");

const cors = require("cors");
const PORT = 5000;
const app = express();
const userApi = require("./routes/userApi");
const eventApi = require("./routes/eventApi");
const serviceApi = require("./routes/serviceApi");

app.use(cookies());

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use("/service", serviceApi);

app.use("/auth", userApi);
app.use("/event", eventApi);
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("Hello from server aaa");
});
app.listen(PORT, function() {
  console.log("server running on localhost:" + PORT);
});
