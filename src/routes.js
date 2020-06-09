import Dashboard from "./views/Dashboard";
import Users from "./views/Users/components/Users";
import User from "./views/Users/components/User";
import StrikeReports from "./views/StrikeReports/StrikeReports";
import Donations from "./views/Donations/Donations";

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
  {
    path: "/reports",
    exact: true,
    name: "Strike Reports",
    component: StrikeReports,
  },
  {
    path: "/donations",
    exact: true,
    name: "Donations",
    component: Donations,
  },
];

export default routes;
