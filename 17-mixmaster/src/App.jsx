import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Landing,
  Cocktail,
  HomeLayout,
  Newsletter,
  Error,
  About,
} from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cocktail",
        element: <Cocktail />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
