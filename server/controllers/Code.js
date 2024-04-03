const Group = require("../models/Group");
const IndividualCodeSec = require("../models/IndividualCodeSec");

exports.createCode = async (req, res) => {
  try {
    // const userId = req.user.id
    const { codeName, code, group, user, status } = req.body
    if (
      !codeName ||
      !code ||
      !group ||
      !user ||
      !status
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
      status
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



exports.categoryPageDetails = async (req, res) => {
  try {
    const { categoryId } = req.body

    // Get courses for the specified category
    const selectedCategory = await Category.findById(categoryId)
      .populate({
        path: "courses",
        match: { status: "Published" },// dot know
        populate: "ratingAndReviews",
      })
      .exec()

    console.log("SELECTED COURSE", selectedCategory)


    // Handle the case when the category is not found
    if (!selectedCategory) {
      console.log("Category not found.")
      return res
        .status(404)
        .json({ success: false, message: "Category not found" })
    }


    // Handle the case when there are no courses
    if (selectedCategory.courses.length === 0) {
      console.log("No courses found for the selected category.")
      return res.status(404).json({
        success: false,
        message: "No courses found for the selected category.",
      })
    }



    // Get courses for other categories for marketing purpose
    const categoriesExceptSelected = await Category.find({
      _id: { $ne: categoryId }, // not equal to category id
    })
    let differentCategory = await Category.findOne(
      categoriesExceptSelected[getRandomInt(categoriesExceptSelected.length)] //for only one course
        ._id
    )
      .populate({
        path: "courses",
        match: { status: "Published" },
      })
      .exec()
    console.log()


    // Get top-selling courses across all categories
    const allCategories = await Category.find()
      .populate({
        path: "courses",
        match: { status: "Published" },
      })
      .exec()
    const allCourses = allCategories.flatMap((category) => category.courses) //method to extract all the individual courses from the array of categories. This results in an array of all the courses across all categories.
    const mostSellingCourses = allCourses
      .sort((a, b) => b.sold - a.sold)//not understood
      .slice(0, 10) // for top 10 course

    res.status(200).json({
      success: true,
      data: {
        selectedCategory,
        differentCategory,
        mostSellingCourses,
      },
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}
