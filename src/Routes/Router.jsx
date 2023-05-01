import { createBrowserRouter } from "react-router-dom";
import Landing from "../Pages/Landing";
import Dashboard from "../Pages/Dashboard";
import Error from "../Pages/Error";
import Register from "../Pages/Register";
import AddJob from "../Pages/Dashboard/AddJob";
import AllJob from "../Pages/Dashboard/AllJob";
import Profile from "../Pages/Dashboard/Profile";
import Stats from "../Pages/Dashboard/Stats";
import Layout from "../Pages/Dashboard/Layout";
import ProtectedRoute from "../Pages/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />,
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "addjob",
        element: <AddJob />,
      },
      {
        path: "alljob",
        element: <AllJob />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "/",
        element: <Stats />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
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
