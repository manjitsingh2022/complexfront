import { userConstants } from "../actions/types/user.constants";

let user = localStorage.getItem("token");
let role = localStorage.getItem("user_role");
const storedUserDetail = localStorage.getItem("userDetail");
const userDetail = storedUserDetail ? JSON.parse(storedUserDetail) : null;

const initialState = user && role && userDetail? { loggedIn: true, user,role,userDetail, message: null } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
        role: action.role,
        userDetail: action.userDetail,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        message: action.data.message,
      };
    case userConstants.RESET_MESSAGE:
      return {
        message: null,
      };

    default:
      return state;
  }
}
