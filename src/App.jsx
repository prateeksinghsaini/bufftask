import React, { Suspense, useCallback, useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./screens/Home";
import PageNotFound from "./screens/PageNotFound";
import { Toaster } from "react-hot-toast";

function App() {
  const allRoutes = useMemo(
    () => [
      {
        path: "/",
        element: MainLayout,
        children: [{ path: "", element: Home }],
      },
      {
        path: "*",
        element: PageNotFound,
      },
    ],
    []
  );

  const wrapRoutes = useCallback((routes) => {
    return routes.map(({ path, element: Element, children }) => ({
      path,
      element: (
        <Suspense
          fallback={
            <img src="/images/logo.png" alt="loading" className="h-20 w-20" />
          }
        >
          <Element />
        </Suspense>
      ),
      children: children ? wrapRoutes(children) : undefined,
    }));
  }, []);

  const router = useMemo(() => {
    return createBrowserRouter(wrapRoutes(allRoutes));
  }, [allRoutes, wrapRoutes]);

  return (
    <div className="relative overflow-hiden">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
