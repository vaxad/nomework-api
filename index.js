import express from "express"
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
import cors from "cors"
import textPrompt from "./routes/textprompt.js"
app.use(cors())

app.use("/textprompt", textPrompt);
app.get("/", (req, res) => {
    res.send("workin")
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})