import { Navigate } from "react-router-dom";
import GoogleAuthCallback from "../../../3-Pages/GoogleAuthCallback";
import Greeting from "../../../3-Pages/Greeting";
import Main from "../../../3-Pages/Main";
import Profile from "../../../3-Pages/Profile";
import Registration from "../../../3-Pages/Registration";

export const routes = [
  {
    path: "/",
    element: <Navigate to="/greetings" />,
  },
  {
    path: "main/",
    element: <Main />,
  },
  {
    path: "greetings/",
    element: <Greeting />,
  },
  {
    path: "profile/",
    element: <Profile />,
  },
  {
    path: "registration/",
    element: <Registration />,
  },
  {
    path: "client/auth/google/callback?",
    element: <GoogleAuthCallback />,
  },
];
