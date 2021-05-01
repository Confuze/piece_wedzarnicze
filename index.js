const express = require("express");
const app = express();
const fs = require("fs").promises;
let images;
(async function () {
	images = await fs.readdir("./src/img", "utf-8");
})();

app.use(express.static("src"));

app.get("/", async (req, res) => {
	res.status(200).send(await fs.readFile("./src/index.html", "utf-8"));
});

app.get("/about", async (req, res) => {
	res.status(200).send(await fs.readFile("./src/about.html", "utf-8"));
});

app.get("/images", async (req, res) => {
	res.status(200).send(await images);
});

app.get("/piec", async (req, res) => {
	res.status(200).send({ link: `https://piece-wedzarnicze.com/img/${images[Math.floor(Math.random() * images.length)]}` });
});

// images[Math.floor(Math.random * images.length)]
app.listen(process.env.PORT || 3000, () => {
	console.log(`Listening on port ${process.env.PORT || 3000}`);
});
