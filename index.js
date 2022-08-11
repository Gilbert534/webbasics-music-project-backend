const express = require('express');
const cors = require('cors');

const badBunny = require("./src/db/badBunny.json")
const romeo = require("./src/db/romeo.json")
const danny = require("./src/db/danny.json")
const jenni = require("./src/db/jenni.json")
const ivan = require("./src/db/ivan.json")


const fs = require("fs");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors("*"))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send("Hello World!"))


app.get('/bad_bunny', (req, res) => res.send(badBunny))
app.get('/romeo', (req, res) => res.send(romeo))
app.get('/danny', (req, res) => res.send(danny))
app.get('/jenni', (req, res) => res.send(jenni))
app.get('/ivan', (req, res) => res.send(ivan))

app.listen(PORT, () => console.log(`server now listening on port ${PORT}`))