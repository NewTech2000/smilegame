const http = require("http");
const app = require("./app");
const sequelize = require('sequelize')
const port = 5000;

const server = http.createServer(app);

server.listen(port)