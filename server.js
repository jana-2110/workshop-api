const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Custom website
server.use(jsonServer.bodyParser);

server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API
server.use(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Workshop API running on port ${PORT}`);
});