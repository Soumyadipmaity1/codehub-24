const express = require("express")
const router = express.Router()

const {
    createCode,
    getCodes,
    deleteCode
  } = require("../controllers/Code")

  router.post("/createCode", createCode)
  router.post("/getCodes", getCodes)
  router.delete("/deleteCode", deleteCode)


module.exports = router