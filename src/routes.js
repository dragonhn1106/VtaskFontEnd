import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import NotFound from "./pages/NotFound/NotFound";
import UserPage from "./pages/UserPage/UserPage";
import ReportPage from "./pages/ReportPage/ReportPage";
import DocumentPage from "./pages/DocumentPage/DocumentPage";
import JobPage from "./pages/JobPage/JobPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />
  },
  {
    path: "/du-an",
    main: () => <ProjectPage />
  },
  {
    path: "/thanh-vien",

    main: () => <UserPage />
  },
  {
    path: "/bao-cao",
    main: () => <ReportPage />
  },
  {
    path: "/tai-lieu",
    main: () => <DocumentPage />
  },
  {
    path: "/cong-viec",
    main: () => <JobPage />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />
  }
];

export default routes;
