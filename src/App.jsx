import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import AppProvider from "./Context/AppProvider";

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
