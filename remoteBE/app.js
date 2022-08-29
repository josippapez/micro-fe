const express = require("express");
const cors = require("cors");
const { loadModules, loadRoutes } = require("./src/utils/index");

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

loadModules();

// Express Routes
loadRoutes(app);

app.get("/", (req, res) => {
  res.send("Remote app API...");
});
app.listen(process.env.PORT || 8000);
