import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Landing,
  Cocktail,
  HomeLayout,
  Newsletter,
  Error,
  About,
  SinglePageError,
} from "./pages/index";
import { loader } from "./pages/Landing";
import { cocktailLoader } from "./pages/Cocktail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: loader,
        element: <Landing />,
        errorElement: <SinglePageError />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <SinglePageError />,
      },
      {
        path: "/cocktail/:id",
        loader: cocktailLoader,
        element: <Cocktail />,
        errorElement: <SinglePageError />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
