export const LoginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
      };
    case "LOGOUT_SUCCESS":
      return {
        user: null,
      };
    default:
      return {
        ...state,
      };
  }
};
