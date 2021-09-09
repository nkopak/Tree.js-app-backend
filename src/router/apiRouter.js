const router = require("express").Router()

const userRouter = require("./userRouter")

router.get("/", (req, res) => {
  res.json("Api router")
})

router.use("/user", userRouter)

module.exports = router
