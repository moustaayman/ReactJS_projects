import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
import { action } from "./pages/Newsletter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: loader(queryClient),
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
        action: action,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>;
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
export default App;
