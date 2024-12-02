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

const WrappedErrorPage = (): JSX.Element => {
  return (
    <Layout>
      <ErrorPage />
    </Layout>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <WrappedErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/cv", element: <CVPage /> },
        { path: "/cs", element: <CSPage /> },
        { path: "/en", element: <ENPage /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    } as any,
  }
);

createRoot(document.getElementById("app")!).render(
  <RouterProvider router={router} />
);
