import Dashboard from "./views/Dashboard";
import CoreUIIcons from "./views/Icons/CoreUIIcons";
import Flags from "./views/Icons/Flags";
import SimpleLineIcons from "./views/Icons/SimpleLineIcons";
import Users from "./views/Users/components/Users";
import User from "./views/Users/components/User";
import StrikeReports from "./views/StrikeReports/StrikeReports";
import Donations from "./views/Donations/Donations";

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  {
    path: "/icons/simple-line-icons",
    name: "Simple Line Icons",
    component: SimpleLineIcons,
  },
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
