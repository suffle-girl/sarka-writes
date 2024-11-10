import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Suspense } from "react";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { CVPage } from "./pages/CVPage";
import { CSPage } from "./pages/CSPage";
import { ENPage } from "./pages/ENPage";
const App = () => {
    return (_jsx(Suspense, { fallback: "loading", children: _jsx(Layout, { children: _jsx(Outlet, {}) }) }));
};
const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        errorElement: _jsx(ErrorPage, {}),
        children: [
            { path: "/", element: _jsx(HomePage, {}) },
            { path: "/cv", element: _jsx(CVPage, {}) },
            { path: "/cs", element: _jsx(CSPage, {}) },
            { path: "/en", element: _jsx(ENPage, {}) },
        ],
    },
], {
    // Cast the config to `any` to bypass TypeScript complaints about unrecognized properties
    future: {
        v7_startTransition: true,
    }, // Temporary workaround for TypeScript error
});
createRoot(document.getElementById("app")).render(_jsx(RouterProvider, { router: router }));
