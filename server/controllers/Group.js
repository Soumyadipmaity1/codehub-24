const Group = require("../models/Group");

exports.addGroup = async (req, res) => {
    try {
      // Destructure fields from the request body
      const {
        groupName,
        groupDescription,
        passKey,
      } = req.body
      // Check if All Details are there or not
      if (
        !groupName ||
        !groupDescription ||
        !passKey
      ) {
        return res.status(403).send({
          success: false,
          message: "All Fields are required",
        })
      }
  
      const group = await Group.create({
        groupName,
        groupDescription,
        passKey,    
    })
  
      return res.status(200).json({
        success: true,
        group,
        message: "Group registered successfully",
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "Group cannot be registered. Please try again.",
      })
    }
  }
  

exports.getAllGroups = async (req, res) => {
    try {
        // Fetch all groups from the database
        const groups = await Group.find({});

        return res.status(200).json({
            success: true,
            groups,
            message: "Retrieved all groups successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to retrieve groups. Please try again.",
        });
    }
};

exports.verifyGroup = async (req, res) => {
  try {
    const { groupId, userPassKey } = req.body;
    if (!groupId || !userPassKey) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }

    const myGroup = await Group.findOne({ _id: groupId }).exec();

    if (!myGroup) {
      return res.status(400).json({
        success: false,
        message: `Could not find group with id: ${groupId}`,
      });
    }

    if (myGroup.passKey !== userPassKey) {
      return res.status(400).json({
        success: false,
        message: `Could not match the PassKey`,
      });
    }
    
    return res.status(200).json({
      success: true,
      group: myGroup,
      message: "Group credentials added successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Group credentials not valid. Please try again.",
    });
  }
};