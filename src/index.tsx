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

const App = (): JSX.Element => {
  return (
    <Suspense fallback="loading">
      <Layout>
        <Outlet />
      </Layout>
    </Suspense>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/cv", element: <CVPage /> },
        { path: "/cs", element: <CSPage /> },
        { path: "/en", element: <ENPage /> },
      ],
    },
  ],
  {
    // Cast the config to `any` to bypass TypeScript complaints about unrecognized properties
    future: {
      v7_startTransition: true,
    } as any, // Temporary workaround for TypeScript error
  }
);

createRoot(document.getElementById("app")!).render(
  <RouterProvider router={router} />
);
