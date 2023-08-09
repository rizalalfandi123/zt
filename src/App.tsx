import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/stores";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ReduxProvider>
  );
};

export default App;
