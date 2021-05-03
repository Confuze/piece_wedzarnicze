"use strict";

const express = require("express");
const app = express();

app.get("/", async (req, res) => {
	res.status(200).send(await fs.readFile("./src/index.html", "utf-8"));
});

require("greenlock-express")
	.init({
		packageRoot: __dirname,
		configDir: "./greenlock.d",

		maintainerEmail: "confuze.graph.11@gmail.com",

		cluster: false
	})
	.serve(app);

const fs = require("fs").promises;
let images;
(async function () {
	images = await fs.readdir("./src/img", "utf-8");
})();

app.use(express.static("src"));
app.get("/about", async (req, res) => {
	res.status(200).send(await fs.readFile("./src/about.html", "utf-8"));
});

app.get("/images", async (req, res) => {
	res.status(200).send(await images);
});

app.get("/piec", async (req, res) => {
	res.status(200).send({ link: `https://piece-wedzarnicze.herokuapp.com/img/${images[Math.floor(Math.random() * images.length)]}` });
});

app.get("*", function (req, res) {
	res.status(404).send("404 not found");
});

// images[Math.floor(Math.random * images.length)]
app.listen(process.env.PORT || 3000, () => {
	console.log(`Listening on port ${process.env.PORT || 3000}`);
});
