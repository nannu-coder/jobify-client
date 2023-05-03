import Loading from "../Components/Loading";
import useAppProvider from "../Hooks/useAppProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAppProvider();

  // if (userLoading) {
  //   return <Loading center />;
  // }

  if (!user) {
    return <Navigate to="/landing" />;
  }

  return children;
};

export default ProtectedRoute;
