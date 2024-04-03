const express = require("express")
const router = express.Router()

const {
    createCode,
    getCodes,
    deleteCode,
    publishCode
  } = require("../controllers/Code")

  router.post("/createCode", createCode)
  router.post("/getCodes", getCodes)
  router.delete("/deleteCode", deleteCode)
  router.put("/publishCode", publishCode)


module.exports = router