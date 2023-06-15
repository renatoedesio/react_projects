import React from 'react';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import Ocorrencia from '../pages/Ocorrencia';
import Workspace from '../pages/Workspace';
import Create from '../pages/Create';
import Login from '../pages/Login';

import RootLayout from '../components/Layout/RootLayout';
import { Switch } from '@chakra-ui/react';
import keycloak from '../keycloak';

import { useKeycloak } from '@react-keycloak/web'
import { useEffect } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Workspace /> } />
      <Route path="workspace" element= {
          <PrivateRoute> <Workspace /> </PrivateRoute> }  
      />
      <Route path="create" element= {
          <PrivateRoute> <Create /> </PrivateRoute> } 
      />
      <Route path="ocorrencia" element= {
          <PrivateRoute> <Ocorrencia /> </PrivateRoute> } 
      /> 
    </Route>
  )
) 

const login = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<Login />}>

    </Route>
  )
)


function AppRouter() {
  const { initialized, keycloak } = useKeycloak();

  useEffect(() => {
    !keycloak.authenticated && localStorage.removeItem('access_token');
  }, [keycloak]);

  if (!initialized) {
    return <div>Loading...</div>
  }

  return (
    <div> 
       {
        keycloak.authenticated ?
        <RouterProvider router={router} />
        :
        <RouterProvider router={login} />
      }
    </div>
  );
}


export default AppRouter;
