import { LoaderIcon } from "@/components/icons";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

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
            <React.Suspense fallback={<Indicator />}>
              <Layout header={null} sidebar={<Sidebar />} />
            </React.Suspense>
          }
        >
          <Route
            path="/today"
            element={
              <React.Suspense fallback={<Indicator />}>
                <Today />
              </React.Suspense>
            }
          />
          <Route
            path="/upcoming"
            element={
              <React.Suspense fallback={<Indicator />}>
                <Upcoming />
              </React.Suspense>
            }
          />
          <Route
            path="/inbox"
            element={
              <React.Suspense fallback={<Indicator />}>
                <Inbox />
              </React.Suspense>
            }
          />
          <Route
            path="/filter-and-label"
            element={
              <React.Suspense fallback={<Indicator />}>
                <FilterAndLabel />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="/update-project/:id"
            element={
              <React.Suspense fallback={<Indicator />}>
                <UpdateProject />
              </React.Suspense>
            }
          />
          <Route
            path="/create-project"
            element={
              <React.Suspense fallback={<Indicator />}>
                <CreateProject />
              </React.Suspense>
            }
          />
        </Routes>
      )}
    </>
  );
};

const Indicator = () => {
  return <LoaderIcon className="fixed w-6 h-6 top-1 right-1 z-50 text-red-500 animate-spin" />;
};
