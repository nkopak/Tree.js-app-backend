const userController = require("../controller/userController")

const router = require("express").Router()

router.get("/", userController.getAllUsers)

router.get("/:userId", userController.getUserById)

router.post("/", userController.createUser)

module.exports = router
