import { createContext, useReducer } from "react";
import reducer from "./Reducer";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./Action";

const initialState = {
  showAlert: true,
  alertText: "",
  alertType: "",
  isLoading: false,
};

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      });
    }, 3000);
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
