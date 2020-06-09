export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "",
      },
    },
    {
      title: true,
      name: "User Admin",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {}, // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "", // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Pending Users",
      url: "/users",
      icon: "icon-people",
    },
    {
      name: "Strike Reports",
      url: "/reports",
      icon: "cui-circle-x",
    },
    {
      title: true,
      name: "Stats",
      wrapper: {
        element: "",
        attributes: {},
      },
    },
    {
      name: "User Donations",
      url: "/donations",
      icon: "cui-dollar",
    },
    {
      name: "New Signups",
      url: "/newsignups",
      icon: "icon-user-follow",
    },
    {
      name: "Campaign Stats",
      url: "/campaignstats",
      icon: "cui-globe",
    },
  ],
};
