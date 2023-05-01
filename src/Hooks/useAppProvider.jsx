import { useContext } from "react";
import { AppContext } from "../Context/AppProvider";

const useAppProvider = () => {
  return useContext(AppContext);
};

export default useAppProvider;
