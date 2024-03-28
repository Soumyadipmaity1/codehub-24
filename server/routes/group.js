// Import the required modules
const express = require("express")
const router = express.Router()

const {
  addGroup,
  getAllGroups,
  verifyGroup
} = require("../controllers/Group")

router.post("/addGroup", addGroup)
router.get("/getAllGroups", getAllGroups)
router.post("/verifyGroup", verifyGroup)

module.exports = router
