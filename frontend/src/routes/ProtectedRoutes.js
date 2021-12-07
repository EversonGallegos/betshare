import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './private_list'; // Route list

const ProtectedRoutes = () => (
  <Routes>
    <Suspense
      fallback={<h2>Loading...</h2>}
    >
      {routes.map(({ component: Component, path, exact }) => (
        <Route
          path={`/${path}`}
          key={path}
          exact={exact}
        >
          <Component />
        </Route>
      ))}
    </Suspense>
  </Routes>
);

export default ProtectedRoutes;