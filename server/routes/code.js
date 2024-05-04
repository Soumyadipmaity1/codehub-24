const express = require("express")
const router = express.Router()

const {
    createCode,
    getCodes,
    deleteCode,
    publishCode,
    updateCode,
    isIdPresent
  } = require("../controllers/Code")

  router.post("/createCode", createCode)
  router.post("/getCodes", getCodes)
  router.delete("/deleteCode", deleteCode)
  router.put("/publishCode", publishCode)
  router.put("/updateCode", updateCode)
  router.post("/isIdPresent", isIdPresent)


module.exports = router