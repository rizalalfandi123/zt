import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/stores";

export const queryClient = new QueryClient({
  defaultOptions: { queries: { networkMode: "offlineFirst" }, mutations: { networkMode: "offlineFirst" } },
});

const App = () => {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </ReduxProvider>
  );
};

export default App;
