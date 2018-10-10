const express = require("express");
const path = require("path");

// create en express server instance
const app = express();

// variables
const buildPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 8080;

// tell the server where he can find the public assets
app.use(express.static(buildPath));

// tell the server to respond to any request he gets by sending back index.html( the application)
// because the routing is a client-side routing
// and so the main task of this server is to serve static files.
app.get("/*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// start the server
app.listen(port, () => {
  console.debug(`Application is up & running on port: ${port}`);
});
