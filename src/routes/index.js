import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { Box } from "@material-ui/core";

import NavBar from 'components/NavBar';
import routes from 'config/routes';

const pageComponents = {
  'Home': lazy(() => import('pages/Home')),
  'Gallery': lazy(() => import('pages/Gallery')),
  'Traits': lazy(() => import('pages/Traits')),
}

const Routes = () => (
  <Suspense fallback={<div />}>
    <Switch>
      {routes.map((route, i) => {
        const PageComponent = pageComponents[route.name];
        return <Route key={i} exact path={route.path} render={props => (
          <Box flexDirection='column' display='flex'>
            <NavBar />
            <PageComponent {...props} />
          </Box>
        )} />
      })}
      <Redirect from='/' to='/home' />
    </Switch>
  </Suspense>
);

export default Routes;
export { Routes };