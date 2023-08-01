import { Route, Routes, useLocation } from "react-router-dom";

import Inbox from "@/pages/inbox";
import Today from "@/pages/today";
import Upcoming from "@/pages/upcoming";
import FilterAndLabel from "@/pages/filter-and-label";
import Layout from "@/components/layout";
import Sidebar from "@/components/sidebar";
import CreateProject from "@/pages/create-project"

export const AppRoutes = () => {
  const location = useLocation();

  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout header={null} sidebar={<Sidebar />} />}>
          <Route path="/today" element={<Today />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/filter-and-label" element={<FilterAndLabel />} />
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes >
          <Route path="/create-project" element={<CreateProject />} />
        </Routes>
      )}
    </>
  );
};
