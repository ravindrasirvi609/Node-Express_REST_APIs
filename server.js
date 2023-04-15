const express = require("express");

const app = express();

app.use(midleware);
app.use(express.json());

function midleware(req, res, next) {
  console.log("inside the middle ware");
  next();
}

require("./routes/idea.routes")(app);

app.listen(8080, () => {
  console.log("Server Started");
});

