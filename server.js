"use strict";

const app = require("./app.js");

require("greenlock-express")
	.init({
		packageRoot: __dirname,
		configDir: "./greenlock.d",

		maintainerEmail: "confuze.graph.11@gmail.com",

		cluster: false
	})
	.serve(app);
