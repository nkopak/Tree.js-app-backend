const express = require("express")
const apiRouter = require("./router/apiRouter")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectDB()

app.use("/", apiRouter)

const PORT = 5002

app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}`)
})

function connectDB() {
  mongoose.connect("mongodb://localhost:27017/threeJS")

  const { connection } = mongoose

  connection.on("error", error => {
    console.log(error)
  })
}
