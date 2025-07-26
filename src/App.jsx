import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DashBoard from "./screens/DashBoard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<DashBoard />} />)
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
