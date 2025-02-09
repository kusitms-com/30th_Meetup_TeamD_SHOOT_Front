import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import routes from "./constants/routes";
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import MainPage from './pages/MainPage';
import OAuthPage from './pages/login/components/GoogleOAuthPage';
import UserPage from './pages/user/ProfilePage';
import ConnectDiscord from "./pages/signup/components/ConnectDiscord";
import ConnectFigma from "./pages/signup/components/ConnectFigma";
import Header from "./components/Header";
import FigmaOAuthPage from "./pages/login/components/FigmaOAuthPage";
import DiscordOAuthPage from "./pages/login/components/DiscordOAuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <>
          <Header />
          <App />
        </>
      ),    children: [
      {
        path: routes.main,
        element: <MainPage />,
      },
      {
        path: routes.signIn,
        element: <LoginPage />,
      },
      {
        path: routes.signUp,
        element: <SignupPage />,
      },
      {
        path: routes.outhPage,
        element: <OAuthPage />,
      },
      {
        path: routes.connectFigma,
        element: <ConnectFigma />,
      },
      {
        path: routes.connectDiscord,
        element: <ConnectDiscord />,
      },
      {
        path: routes.user,
        element: <UserPage />,
      },
      {
        path: routes.loginFigma,
        element: <FigmaOAuthPage />,
      },
      {
        path: routes.loginDiscord,
        element: <DiscordOAuthPage />,
      },
    ],
  },
]);

export default router;