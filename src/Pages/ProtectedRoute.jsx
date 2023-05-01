import useAppProvider from "../Hooks/useAppProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAppProvider();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!isLoading && !user) {
    return <Navigate to="/landing" />;
  }

  return children;
};

export default ProtectedRoute;
