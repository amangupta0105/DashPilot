import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DashBoard from "./screens/DashBoard";
import TaskContextProvider from "./context/TaskContextProvider";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<DashBoard />} />)
  );

  return (
    <>
    <TaskContextProvider>
      <RouterProvider router={router} />
    </TaskContextProvider>
    </>
  );
}

export default App;
