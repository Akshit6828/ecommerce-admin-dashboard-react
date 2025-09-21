import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { router } from "./routes/routes.jsx";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext.jsx";
import { NotificationProvider } from "./context/notificationContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux-store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <NotificationProvider>
          <RouterProvider router={router} />
          <App />
        </NotificationProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
