import { createBrowserRouter, RouterProvider } from "react-router";
import Applayout from "./ui/Applayout";
import Home from "./features/home/Home";
import CountryDetails from "./features/countryDetails/CountryDetails";
import GlobalStyles from "./styles/GlobalStyles";
const App = () => {
  const router = createBrowserRouter([
    {
      element: <Applayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/country-details", element: <CountryDetails /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
