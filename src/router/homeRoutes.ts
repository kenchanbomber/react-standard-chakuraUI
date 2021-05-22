import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagiment } from "../components/pages/UserManagiment";
export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: Home
  },
  {
    path: "/user_management",
    exact: false,
    children: UserManagiment
  },
  {
    path: "/setting",
    exact: false,
    children: Setting
  },
  {
    path: "*",
    exact: false,
    children: Page404
  }
];
