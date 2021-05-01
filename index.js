const express = require("express");
const app = express();
const fs = require("fs").promises;

app.use(express.static("src"));

app.get("/", async (req, res) => {
	res.status(200).send(await fs.readFile("./src/index.html", "utf-8"));
});

app.get("/about", async (req, res) => {
	res.status(200).send(await fs.readFile("./src/about.html", "utf-8"));
});

app.get("/images", async (req, res) => {
	res.status(200).send(await fs.readdir("./src/img", "utf-8"));
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`Listening on port ${process.env.PORT || 3000}`);
});
