const express = require("express");
const path = require("path");
const app = express();

const buildPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 8080;

app.use(express.static(buildPath));

app.get("/*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});
app.listen(port, () => {
  console.debug(`Application is up & running on port: ${port}`);
});
