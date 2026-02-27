import express from 'express';
import http from 'http';
import { router as routerFromV1 } from "./V1/routes.js";
import fs from "fs";

const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || 3000);

app.use(express.static('Public'));
app.use("/V1", routerFromV1);

app.post("/fromTally", (req, res) => {
    const file = fs.createWriteStream("./Data/dump.json");
    req.pipe(file);
    req.on("end", () => res.send("ok"));
});

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);
});