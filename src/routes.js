import React from "react";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import NotFound from "./pages/NotFound/NotFound";
// import UserPage from "./pages/UserPage/UserPage";
const routes = [
  {
    path: "/tin-nhan",
    exact: true,
    main: () => <ProjectPage />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />
  }
];

export default routes;
