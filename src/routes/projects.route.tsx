import React from "react";
import { AppRoute } from "@/schema-and-types";
import { LazyLoadIndicator } from "@/components/lazy-load-indicator/lazy-load-indicator";

const Project = React.lazy(() => import("@/pages/project"));
const Projects = React.lazy(() => import("@/pages/projects"));

export const projectRoutes: AppRoute[] = [
  {
    path: "/project/:id",
    element: (
      <React.Suspense fallback={<LazyLoadIndicator />}>
        <Project />
      </React.Suspense>
    ),
    isModal: false,
  },

  {
    path: "/projects",
    element: (
      <React.Suspense fallback={<LazyLoadIndicator />}>
        <Projects />
      </React.Suspense>
    ),
    isModal: false,
  },
];
