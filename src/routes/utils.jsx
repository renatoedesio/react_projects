import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useKeycloak } from '@react-keycloak/web';

export default function PrivateRoute({
  component: Component,
  ...rest
}) {
  const { keycloak } = useKeycloak();

  return (
    <Route
      {...rest}
      render={(props) => (keycloak?.authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/workspace',
            state: { from: props.location },
          }}
        />
      ))}
    />
  );
}
