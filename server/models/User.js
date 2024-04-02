// Import the Mongoose library
//done
const mongoose = require("mongoose")

// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
  {
    // Define the name field with type String, required, and trimmed
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    // lastName: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    // Define the email field with type String, required, and trimmed
    email: {
      type: String,
      required: true,
      trim: true,
    },

    // Define the password field with type String and required
    password: {
      type: String,
      required: true,
    },
    // Define the role field with type String and enum values of "Admin", "Student", or "Visitor"
    accountType: {
      type: String,
      enum: ["Admin", "Student", "Instructor"],
      required: true,
    },
    // active: {  //dont know
    //   type: Boolean,
    //   default: true, 
    // },
    // approved: {  //dont know
    //   type: Boolean,
    //   default: true,
    // },
    // additionalDetails: { // 1 profile for 1 user so no array
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "Profile",
    // },
    // courses: [  //multiple number of courses a user can purchase so used array of courses 
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Course",
    //   },
    // ],
    token: {  //use token to take out the user so  that pwd can be updated // this token is used in resetpassword inside controllers  
      type: String,
    },
    groups: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",}],
    // resetPasswordExpires: {  //dont know // this is used in resetpassword inside controllers 
    //   type: Date,
    // },
    // image: {  //make image link using dicebear
    //   type: String,
    // },
    // courseProgress: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "courseProgress",  //how moch progress in multiple courses if user have purchased multiple courses
    //   },
    // ],

    // Add timestamps for when the document is created and last modified
  },
//   { timestamps: true }  // dont know
)

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("user", userSchema)
