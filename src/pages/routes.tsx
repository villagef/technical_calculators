import { Suspense, lazy, memo } from "react";
import Layout from "../components/Layout";

const HomePage = lazy(() => import("./Home"));

const Routes = () => (
  <Layout>
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  </Layout>
);

export default memo(Routes);
