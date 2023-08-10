import React from "react";
import LazyLoadIndicator from "@/components/lazy-load-indicator";
import { Route, Routes, useLocation } from "react-router-dom";
import { projectRoutes } from "./projects.route";

const Inbox = React.lazy(() => import("@/pages/inbox"));
const Today = React.lazy(() => import("@/pages/today"));
const Upcoming = React.lazy(() => import("@/pages/upcoming"));
const FilterAndLabel = React.lazy(() => import("@/pages/filter-and-label"));
const CreateProject = React.lazy(() => import("@/pages/project/create-project"));
const UpdateProject = React.lazy(() => import("@/pages/project/update-project"));

const Layout = React.lazy(() => import("@/components/layout"));
const Sidebar = React.lazy(() => import("@/components/sidebar"));

export const AppRoutes = () => {
  const location = useLocation();

  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<LazyLoadIndicator />}>
              <Layout header={null} sidebar={<Sidebar />} />
            </React.Suspense>
          }
        >
          <Route
            path="/today"
            element={
              <React.Suspense fallback={<LazyLoadIndicator />}>
                <Today />
              </React.Suspense>
            }
          />
          <Route
            path="/upcoming"
            element={
              <React.Suspense fallback={<LazyLoadIndicator />}>
                <Upcoming />
              </React.Suspense>
            }
          />
          <Route
            path="/inbox"
            element={
              <React.Suspense fallback={<LazyLoadIndicator />}>
                <Inbox />
              </React.Suspense>
            }
          />
          <Route
            path="/filter-and-label"
            element={
              <React.Suspense fallback={<LazyLoadIndicator />}>
                <FilterAndLabel />
              </React.Suspense>
            }
          />
          
          {projectRoutes.map((route, index) => {
            return <Route key={index} {...route} />
          })}
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="/update-project/:id"
            element={
              <React.Suspense fallback={<LazyLoadIndicator />}>
                <UpdateProject />
              </React.Suspense>
            }
          />
          <Route
            path="/create-project"
            element={
              <React.Suspense fallback={<LazyLoadIndicator />}>
                <CreateProject />
              </React.Suspense>
            }
          />
        </Routes>
      )}
    </>
  );
};

