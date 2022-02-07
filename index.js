const express = require("express");
const router = require("./routes/route");
const app = express();
const ownRouter = require("./routes/route")

require('dotenv').config()

app.use(express.json())
app.use("/api", ownRouter)

router.get('/', (req, res) => {
    res.send("heyyy")
})

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}
const PORT = process.env.PORT || 5000;
app.listen(PORT)