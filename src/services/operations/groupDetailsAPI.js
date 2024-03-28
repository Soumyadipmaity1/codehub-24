import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis"


const {
    GET_ALL_GROUP_API,
    GET_VERIFIED_GROUP_API
  } = endpoints


export const getAllGroups = async () => {
    const toastId = toast.loading("Loading...")
    let result
    try {
      const response = await apiConnector("GET", GET_ALL_GROUP_API)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Group") //it is only error if no response is taken
      }
      result = response.data.groups
    //   console.log(result);
    } catch (error) {
      console.log("GET_ALL_GROUP_API API ERROR............", error)
      toast.error(error.message)
    }
    // console.log(result);
    toast.dismiss(toastId)
    return result
  }

  export const verifyGroup = async (userPassKey,groupId,navigate) => {
    const toastId = toast.loading("Loading...")
    let result
    try {
      const response = await apiConnector("POST", GET_VERIFIED_GROUP_API ,{userPassKey, groupId})
      console.log("get ke niche ji",response);
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Group") //it is only error if no response is taken
      }
      navigate(`/Mygroup/${groupId}`)
      result = response.data
      console.log(result);
    } catch (error) {
      console.log("GET_ALL_GROUP_API API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }