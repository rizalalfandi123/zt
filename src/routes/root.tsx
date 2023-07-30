import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout/layout";
import { Sidebar } from "@/components/sidebar/sidebar";
import Inbox from "@/pages/inbox";
import Today from "@/pages/today";
import Upcoming from "@/pages/upcoming";
import FilterAndLabel from "@/pages/filter-and-label";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout header={null} sidebar={<Sidebar />} />,
    children: [
      {
        element: <Inbox />,
        path: "/inbox",
      },
      {
        element: <Today />,
        path: "/today",
      },
      {
        element: <Upcoming />,
        path: "/upcoming",
      },
      {
        element: <FilterAndLabel />,
        path: "/filter-and-label",
      },
    ],
  },
]);
