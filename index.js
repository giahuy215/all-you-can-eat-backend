const express = require("express");
const app = express();
const router = express.Router();

const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

require("./configs/config.json");

app.use(router);
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// 404 error
app.use((req, res, next) => {
	return res.status(404).send({ message: req.url + "not found" });
});

app.use((err, req, res, next) => {
	return res.status(500).send({ error: err });
});

const nodePort = global.gConfig.node_port;

app.listen(nodePort, () => {
	console.log(`App listening on port ${nodePort}`);
});

module.exports = server;
