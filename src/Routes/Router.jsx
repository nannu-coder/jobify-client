import { createBrowserRouter } from "react-router-dom";
import Landing from "../Pages/Landing";
import Dashboard from "../Pages/Dashboard";
import Error from "../Pages/Error";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
]);

export default router;
