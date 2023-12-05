const functions = require("firebase-functions");
const express = require('express');
require("dotenv").config();
const cors = require("cors");
require("./config/database.js")

const doctorRouter = require('./routers/doctorRouter')
const app = express();

app.use(express.json())
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    })
);

app.get("/", (req, res) => {
    res.send("servidor creado")
});

app.use('/api', doctorRouter)
const PORT = process.env.PORT || 4000;
app.set("port", PORT);
app.listen(PORT, () => {
    console.log("servidor corriendo en el puerto: " + app.get('port'))
})

exports.app = functions.https.onRequest(app)
