import { Suspense, lazy, memo } from "react";
import Layout from "../components/Layout";
import { Route, Routes as Switch } from "react-router-dom";

const HomePage = lazy(() => import("./Home"));

const Routes = () => (
  <Layout>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="#" element={<HomePage />} />
      </Switch>
    </Suspense>
  </Layout>
);

export default memo(Routes);
