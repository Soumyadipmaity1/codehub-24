import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis"

const {
    GET_ID_PRESENT,
    GET_CODES_SUMMARY,
    DELETE_CODE_API,
    PUBLISH_CODE_API,
    CREATE_CODE_API,
    UPDATE_CODE_API,
  } = endpoints

  export const createCode = async (codeName, code, group, user, codeId) => {
    const toastId = toast.loading("Loading...");
    let result;

    try {
        const codeExists =await checkCodeExists(codeId);
        if (codeExists) {
            const response = await apiConnector("PUT", UPDATE_CODE_API, { codeId, group, user, code });
            if (!response?.data?.success) {
                throw new Error("Could not update code");
            }
            result = response.data;
        } else {
            const response = await apiConnector("POST", CREATE_CODE_API, { group, user, codeName, code });
            if (!response?.data?.success) {
                throw new Error("Could not create code");
            }
            result = response.data;
        }
    } catch (error) {
        console.error("Error in createCode:", error);
        toast.error(error.message);
    }

    toast.dismiss(toastId);
    return result;
};


const checkCodeExists = async (codeId) => {
  try {
      const response = await apiConnector("POST", GET_ID_PRESENT, { codeId });
      return response?.data?.success;
  } catch (error) {
      console.error("Error checking code existence:", error);
      return false;
  }
};



  export const getCodes = async (groupId) => {
    const toastId = toast.loading("Loading...")
    // console.log("kya hai ye",codePassKey)
    let result
    try {
      const response = await apiConnector("POST", GET_CODES_SUMMARY ,{groupId})
      console.log("code vale ke niche ji",response);
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch codes") //it is only error if no response is taken
      }
      result = response.data
      console.log(result);
    } catch (error) {
      console.log("GET_CODES_SUMMARY API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }

  export const deleteCode = async (data) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("DELETE", DELETE_CODE_API, data)
      console.log("DELETE COURSE API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Delete Course")
      }
      toast.success("Course Deleted")
    } catch (error) {
      console.log("DELETE COURSE API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
  }

  export const publishCode = async (data) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("PUT", PUBLISH_CODE_API, data)
      console.log("PUBLISH COURSE API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Publish Course")
      }
      toast.success("Course PUBLISHED")
    } catch (error) {
      console.log("PUBLISH COURSE API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
  }