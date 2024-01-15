import { userConstants } from "./types/user.constants";
import { userService } from "../../services/user.service";
import { alertActions } from "./alert.action";
// import userService from '../../services/userService';

export const userActions = {
  login,
  getUserData,
  register,getUsers
};



 function getUsers(page) {
  console.log(page,'page1211212121')
  return async (dispatch) => {
    dispatch(request());
    try {
      const users = await userService.getUsers(page);
      dispatch(success(users));
    } catch (error) {
      dispatch(failure(error.toString()));
    }
  };

  function request() {
    return { type: userConstants.GETUSERS_REQUEST };
  }

  function success(users) {
    if (users.code === 200) {
      console.log(users, 'codee');
      return { type: userConstants.GETUSERS_SUCCESS, users };
    }
  }

  function failure(error) {
    return { type: userConstants.GETUSERS_FAILURE, error };
  }
}



function getUserData() {
  return (dispatch) => {
    dispatch(request());
    userService.getUserData().then(
      (users) => dispatch(success(users)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GETUSER_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETUSER_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETUSER_FAILURE, error };
  }
}



function login(email, password, from) {
  return (dispatch) => {
    dispatch(request({ email }));

    userService.login(email, password).then(
      (user) => {
        console.log(user,'chekkduser')
        if (user.code === 200) {
          let token = user.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("user_role", user.data.user.role);
          localStorage.setItem("userDetail", JSON.stringify(user.data.user));

          dispatch(success(user));

          window.location.href = "/";
        } else {
          dispatch(failure(user));
          setTimeout(() => {
            dispatch(resetMsg());
          }, 15000);
        }
      },
      (error) => {
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(data) {
    return { type: userConstants.LOGIN_FAILURE, data };
  }
  function resetMsg() {
    return { type: userConstants.RESET_MESSAGE };
  }
}



function register(name, email, password, role) {

  return (dispatch) => {
    dispatch(request({ email }));

    userService.register(name, email, password, role).then(
      (user) => {
        console.log(user,'checkkkckdkddk')
        if (user.code === 200) {
          dispatch(success(user));
          window.location.href = "/login";
        } else {
          dispatch(failure(user));
          setTimeout(() => {
            dispatch(resetMsg());
          }, 5000);
        }
      },
      (error) => {
        dispatch(alertActions.error(error.toString()));
      }
    );
  }

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }

  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }

  function failure(data) {
    return { type: userConstants.REGISTER_FAILURE, data };
  }

  function resetMsg() {
    return { type: userConstants.RESET_MESSAGE };
  }
}





