import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';

import Login from '../pages/Login';
import { UserProvider } from '../contexts/userContext';
import { FormsProvider } from '../contexts/formsContext';
import Route from './Route';

import { useKeycloak } from '@react-keycloak/web'


import Workspace from '../pages/Workspace';
import Create from '../pages/Create';
import PrivateRoute from '../utils/PrivateRoute';

export const AppRouter = () => {
  const { initialized, keycloak } = useKeycloak();

  useEffect(() => {
    !keycloak.authenticated && localStorage.removeItem('access_token');
  }, [keycloak]);

  if (!initialized) {
    return <div>Loading...</div>
  }

  return (
    <Switch>
      {
        keycloak.authenticated ?
          <UserProvider>
            <FormsProvider>
              <Route path="/" exact component={Login} />
              <PrivateRoute path="/dashboard" component={Workspace} />
              <Route path="/workspace" component={Workspace} />
              <Route path="/ocorrencia" component={Create} />
              <Route path="/pops" component={PopList} />
            </FormsProvider>
          </UserProvider>
          :
          <Route path="/*" component={Login} />
      }
    </Switch>
  );
}

export default AppRouter;

