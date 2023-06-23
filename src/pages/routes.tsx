import { Suspense, lazy, memo } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Layout from "../components/Layout";

const Calculator1 = lazy(() => import("./Calculator1"));
const Calculator2 = lazy(() => import("./Calculator2"));

const Routes = () => (
  <Layout>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" element={<Calculator1 />} />
        <Route path="/calculator1" element={<Calculator1 />} />
        <Route path="/calculator2" element={<Calculator2 />} />
      </Switch>
    </Suspense>
  </Layout>
);

export default memo(Routes);
