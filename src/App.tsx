import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: { queries: { networkMode: "offlineFirst" }, mutations: { networkMode: "offlineFirst" } },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
