import { userConstants } from "../actions/types/user.constants";
export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETUSER_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GETUSER_SUCCESS:
      return {
        items: action.users.data,
      };
    case userConstants.GETUSER_FAILURE:
      return {
        error: action.error,
      };
    case userConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map((user) =>
          user.id === action.id ? { ...user, deleting: true } : user
        ),
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter((user) => user.id !== action.id),
      };
    case userConstants.DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map((user) => {
          if (user.id === action.id) {
            const { deleting, ...userCopy } = user;
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        }),
      };


      case userConstants.GETUSERS_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GETUSERS_SUCCESS:
      return {
        message: action.users.message,
        data: action.users.data.users,
        total_count: action.users.data.pagination.totalItems,
        page: action.users.data.pagination.page,
        itemsPerPage: action.users.data.pagination.itemsPerPage,
        totalItems: action.users.data.pagination.totalItems,
        status: action.users.status,
      };
    case userConstants.GETUSERS_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
