//done1 next is auth middleware
const bcrypt = require("bcrypt")
const User = require("../models/User")
const jwt = require("jsonwebtoken")
require("dotenv").config()



//signup done
// Signup Controller for Registering USers
exports.signup = async (req, res) => {
  try {
    // Destructure fields from the request body
    const {
      firstName,
      // lastName,
      email,
      password,
      confirmPassword,
      accountType,
      // contactNumber,
      // otp,
    } = req.body
    // Check if All Details are there or not
    if (
      !firstName ||
      // !lastName ||
      !email ||
      !password ||
      !confirmPassword 
      // !otp
    ) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      })
    }
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Password and Confirm Password do not match. Please try again.",
      })
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      })
    }

    // const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1) 
   
    // console.log(response)
    // if (response.length === 0) {
    //   // OTP not found for the email
    //   return res.status(400).json({
    //     success: false,
    //     message: "The OTP is not valid",
    //   })
    // } else if (otp !== response[0].otp) { // not understoood console it
    //   // Invalid OTP
    //   return res.status(400).json({
    //     success: false,
    //     message: "The OTP is not valid",
    //   })
    // }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create the user
    // let approved = ""
    // approved === "Instructor" ? (approved = false) : (approved = true) // not understood

    // Create the Additional Profile For User
    // const profileDetails = await Profile.create({ // set them all to null
    //   gender: null,
    //   dateOfBirth: null,
    //   about: null,
    //   contactNumber: null,
    // })
    const user = await User.create({
      firstName,
      // lastName,
      email,
      // contactNumber,  //doubt : contact number not written in the USER model
      password: hashedPassword,
      accountType: accountType,
      // approved: approved,      // not understood
      // additionalDetails: profileDetails._id,  // store the id of the profileDetails that's why we created it before it
      // image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,  //dicebar image for dashboard
    })

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    })
  }
}



//done
// Login controller for authenticating users
exports.login = async (req, res) => {
  try {
    // Get email and password from request body
    const { email, password } = req.body

    // Check if email or password is missing
    if (!email || !password) {
      // Return 400 Bad Request status code with error message
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      })
    }

    // Find user with provided email
    const user = await User.findOne({ email })  // populate not needed but put it

    // If user not found with provided email
    if (!user) {
      // Return 401 Unauthorized status code with error message
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      })
    }

    // Generate JWT token and Compare Password
    if (await bcrypt.compare(password, user.password)) {  // can use payload also
      const token = jwt.sign(
        { email: user.email, id: user._id, role: user.role }, //instead of payload
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      )

      // Save token to user document in database
      user.token = token
      user.password = undefined
      // Set cookie for token and return success response
      const options = {
        expires: new Date(Date.now() + 1 * 60 * 60 * 1000), // cookie expire in 1 hours
        httpOnly: true,
      }
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: `User Login Success`,
      })
    } else {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      })
    }
  } catch (error) {
    console.error(error)
    // Return 500 Internal Server Error status code with error message
    return res.status(500).json({
      success: false,
      message: `Login Failure Please Try Again`,
    })
  }
}




//done
// Send OTP For Email Verification
// exports.sendotp = async (req, res) => {
//   try {
//     const { email } = req.body

//     // Check if user is already present
//     // Find user with provided email
//     const checkUserPresent = await User.findOne({ email })
//     // to be used in case of signup

//     // If user found with provided email
//     if (checkUserPresent) {
//       // Return 401 Unauthorized status code with error message
//       return res.status(401).json({
//         success: false,
//         message: `User is Already Registered`,
//       })
//     }

//     var otp = otpGenerator.generate(6, {
//       upperCaseAlphabets: false,
//       lowerCaseAlphabets: false,
//       specialChars: false,
//     })
//     const result = await OTP.findOne({ otp: otp })
//     console.log("Result is Generate OTP Func")
//     console.log("OTP", otp)
//     console.log("Result", result)
//     while (result) {  //if the same otp is present in the db for other users then change  untill the otp gets uniique
//       otp = otpGenerator.generate(6, {  // bad code bcz db is searched frequently so we should use some library which will give unique otp
//         upperCaseAlphabets: false,
//       }) // not understood : if result gets true then we get the infinite loop
//     }
//     const otpPayload = { email, otp }
//     const otpBody = await OTP.create(otpPayload) // stored in db
//     console.log("OTP Body", otpBody)
//     res.status(200).json({
//       success: true,
//       message: `OTP Sent Successfully`,
//       otp,
//     })
//   } catch (error) {
//     console.log(error.message)
//     return res.status(500).json({ success: false, error: error.message })
//   }
// }





//done
// Controller for Changing Password
// exports.changePassword = async (req, res) => {
//   try {
//     // Get user data from req.user
//     const userDetails = await User.findById(req.user.id)  // not understood

//     // Get old password, new password, and confirm new password from req.body
//     const { oldPassword, newPassword } = req.body

//     // Validate old password
//     const isPasswordMatch = await bcrypt.compare(
//       oldPassword, //password which user have given now
//       userDetails.password // password which the server will check from DB
//     )
//     if (!isPasswordMatch) {
//       // If old password does not match, return a 401 (Unauthorized) error
//       return res
//         .status(401)
//         .json({ success: false, message: "The password is incorrect" })
//     }

//     // Update password
//     const encryptedPassword = await bcrypt.hash(newPassword, 10)
//     const updatedUserDetails = await User.findByIdAndUpdate(
//       req.user.id,
//       { password: encryptedPassword },
//       { new: true }
//     )

//     // Send notification email
//     try {
//       const emailResponse = await mailSender(
//         updatedUserDetails.email,
//         "Password for your account has been updated",
//         passwordUpdated(
//           updatedUserDetails.email,
//           `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
//         )
//       )
//       console.log("Email sent successfully:", emailResponse.response)
//     } catch (error) {
//       // If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
//       console.error("Error occurred while sending email:", error)
//       return res.status(500).json({
//         success: false,
//         message: "Error occurred while sending email",
//         error: error.message,
//       })
//     }

//     // Return success response
//     return res
//       .status(200)
//       .json({ success: true, message: "Password updated successfully" })
//   } catch (error) {
//     // If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
//     console.error("Error occurred while updating password:", error)
//     return res.status(500).json({
//       success: false,
//       message: "Error occurred while updating password",
//       error: error.message,
//     })
//   }
// }
