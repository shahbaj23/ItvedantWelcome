
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserProvider.jsx";
import { UserLinkProvider } from "./context/userLink/UserLinkProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundry from "./components/errorBoundry/ErrorBoundry.jsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <ErrorBoundry>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <UserLinkProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </UserLinkProvider>
    </BrowserRouter>
  </QueryClientProvider>
  </ErrorBoundry>
);
