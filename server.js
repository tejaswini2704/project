const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("CI/CD with GitHub Actions & Docker is Successful!");
});

app.listen(PORT, () => console.log(`App running at http://localhost:${PORT}`));
