// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userProvider.jsx";
import { UserLinkProvider } from "./context/userLink/userLinkProvider.jsx";
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
//strictmode? StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants. It helps with identifying unsafe lifecycles, legacy API usage, and other side effects.
//useParams hook? The useParams hook in React Router is used to access the parameters of the current route. It allows you to extract dynamic segments from the URL, making it easy to work with route parameters in your components. When a route is defined with parameters (e.g., /user/:id), you can use the useParams hook to retrieve the values of those parameters as an object. This is particularly useful for rendering content based on specific identifiers, such as user IDs or product IDs, that are part of the URL. By using useParams, you can easily access and utilize these parameters within your component logic.
