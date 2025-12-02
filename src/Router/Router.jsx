import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home";
import AllGames from "../Components/AllGames";
import FeaturedDevelopers from "../Components/FeaturedDevelopers";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ErrorPage from "../Components/ErrorPage";
import MyProfile from "../Components/MyProfile";
import PopularGameDetails from "../Components/PopularGameDetails";
import PrivateRouter from "../Components/PrivateRouter";
import AllGamesCardsDetails from "../Components/AllGamesCardsDetails";
import ForgetPassword from "../Components/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: MainLayouts,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/popularGames.json"),
      },
      {
        path: "/allGames",
        element: <AllGames></AllGames>,
        loader: () => fetch("/popularGames.json"),
      },
      {
        path: "/featuredDevelopers",
        Component: FeaturedDevelopers,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/myProfile",
        Component: MyProfile,
      },
      {
        path: "/popularGameDetails/:id",
        element: <PopularGameDetails></PopularGameDetails>,
        loader: () => fetch("/popularGames.json"),
      },
      {
        path: "/allGamesCardsDetails/:id",
        element: <AllGamesCardsDetails></AllGamesCardsDetails>,
        loader: () => fetch("/popularGames.json"),
      },
      {
        path: "/forgetPassword",
        Component: ForgetPassword,
      },
    ],
  },
]);

export default router;
