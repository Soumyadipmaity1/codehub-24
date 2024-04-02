const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
  LOGIN_API: BASE_URL + "/auth/login",
  GET_ALL_GROUP_API: BASE_URL + "/group/getAllGroups",
  GET_VERIFIED_GROUP_API: BASE_URL + "/group/verifyGroup",
  GET_CODES_SUMMARY: BASE_URL + "/code/getCodes"
}