const express = require("express")
const router = express.Router()

const {
    createCode,
    getCodes
  } = require("../controllers/Code")

  router.post("/createCode", createCode)
  router.post("/getCodes", getCodes)

module.exports = router