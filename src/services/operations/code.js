import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis"

const {
    GET_CODES_SUMMARY,
    DELETE_CODE_API
  } = endpoints


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