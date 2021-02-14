const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    console.log(`${req.method} ${req.path} from ${req.ip}`)
    res.send(`${Math.random()*200/2*5-90}`)
})

app.listen(port, 
    () => console.log(`Server start at 0.0.0.0:${port}`
    ))