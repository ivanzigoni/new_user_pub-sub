const express = require("express");
const bodyParser = require("body-parser");
const {saveToMongo} = require("./db");

const app = express();

app.use(bodyParser())

app.post(
    "/",
    async (req, res) => {

    await saveToMongo(req.body);

    res.status(200).end();

    }
)

app.listen(3000);