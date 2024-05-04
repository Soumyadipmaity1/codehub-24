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
      status: "Draft",
    })
    

    await Group.findByIdAndUpdate(group, {
      $push: {
        individualCodeSec: CodeSec,
      },
    })

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

exports.updateCode = async (req, res) => {
  try {
    // const userId = req.user.id
    const { codeId,  group, user, code } = req.body
    console.log("ka hua ",codeId, code, group, user)
    if (
      !codeId ||
      !code ||
      !group ||
      !user 
    ) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      })
    }

    const CodeSec = await IndividualCodeSec.findByIdAndUpdate(codeId, {
      code,
      user,
      status: "Draft",
    })
    return res.status(201).json({
      success: true,
      message: "CodeSec updated successfully",
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

exports.isIdPresent = async (req, res) => {
  try {
    const { codeId } = req.body
    const allCodes = await IndividualCodeSec.findById(codeId);
    if (allCodes) {
      res.status(200).json({
        success: true,
        data: true,
      })
    } else {
      res.status(404).json({
        success: false,
        data: false,
      })
    }

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve the code id",
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


exports.publishCode = async (req, res) => {
  try {
    const { codeId } = req.body

    // Find the course
    const code = await IndividualCodeSec.findByIdAndUpdate(codeId,{ status: "Published" })


    if (!code) {
      return res.status(404).json({ message: "Code not found" })
    }

    return res.status(200).json({
      success: true,
      data: {
        code
      },
      message: "published successfully",
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

