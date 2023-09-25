import { createContext, useContext, useEffect, useReducer } from "react";
import { LoginReducer } from "./AuthReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const LoginContext = createContext(INITIAL_STATE);

export const LoginContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LoginReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <LoginContext.Provider
      value={{
        user: state.user,
        dispatch,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
