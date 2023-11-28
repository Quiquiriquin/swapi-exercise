import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
]);

export default Router;
