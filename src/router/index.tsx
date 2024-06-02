import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "@/components";
import Home from "@/views/home";
import NotionAuth from "@/views/auth/notion";
import Privacy from "@/views/privacy";
import Terms from "@/views/terms";
import RefundPolicy from "@/views/refund-policy";

const LinearProgress = () => {
  return <div>loading...</div>;
};

const NotFound = () => {
  return <div>not found...</div>;
};

const InternalRoute: React.FC<{ title: string; children?: React.ReactNode }> = ({ children, title, ...rest }) => {
  useEffect(() => {
    const title = document.title;
    document.title = `${title}`;
    return () => {
      document.title = title;
    };
  }, [title]);
  return <>{children}</>;
};
const RouterView = () => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <BrowserRouter basename="/">
        <ErrorBoundary hasError={false}>
          <Routes>
            <Route
              path="/"
              element={
                <InternalRoute title="index">
                  <Home />
                </InternalRoute>
              }
            />
            <Route path="/auth">
              <Route path="notion" element={<NotionAuth />}></Route>
            </Route>
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund_policy" element={<RefundPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route
              path="*"
              element={
                <InternalRoute title="404">
                  <NotFound />
                </InternalRoute>
              }
            />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </Suspense>
  );
};

export default RouterView;
