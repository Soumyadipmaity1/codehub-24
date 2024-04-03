const Group = require("../models/Group");
const IndividualCodeSec = require("../models/IndividualCodeSec");

exports.createCode = async (req, res) => {
  try {
    // const userId = req.user.id
    const { codeName, code, group, user } = req.body
    if (
      !codeName ||
      !code ||
      !group ||
      !user
    ) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      })
    }

    const CodeSec = await IndividualCodeSec.create({
      codeName,
      code,
      group,
      user,
    })
    

    // Add the rating and review to the course
    await Group.findByIdAndUpdate(group, {
      $push: {
        individualCodeSec: CodeSec,
      },
    })
    //   await courseDetails.save()//not understand

    return res.status(201).json({
      success: true,
      message: "CodeSec added successfully",
      CodeSec,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}

exports.getCodes = async (req, res) => {
  try {
    const { groupId } = req.body
    const allCodes = await IndividualCodeSec.find({
      group:groupId
    })
      .populate({
        path: "group",
        select: "groupName", //course is id and uska course name// Specify the fields you want to populate from the "Course" model
      })
      .populate({
        path: "user",
        select: "firstName", //course is id and uska course name// Specify the fields you want to populate from the "Course" model
      })
      .exec()

    res.status(200).json({
      success: true,
      data: allCodes,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve the codes for the group",
      error: error.message,
    })
  }
}

exports.deleteCode = async (req, res) => {
  try {
    const { codeId } = req.body

    // Find the course
    const code = await IndividualCodeSec.findById(codeId)
    if (!code) {
      return res.status(404).json({ message: "Code not found" })
    }

    await IndividualCodeSec.findByIdAndDelete(codeId)

    return res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    })
  }
}