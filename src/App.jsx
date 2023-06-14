import {  BrowserRouter, createBrowserRouter,  createRoutesFromElements,  Route,  RouterProvider} from 'react-router-dom'
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak"


// layouts and pages
import RootLayout from './components/Layout/RootLayout'
import Create from './pages/Create'
import Workspace from './pages/Workspace'
import Ocorrencia from './pages/Ocorrencia'
import PrivateRoute from './utils/PrivateRoute';
import Login from './pages/Login';

// router and routes

function App() {
  const eventLogger = (event, error) => {
    console.log('onKeycloakEvent', event, error)
  }
  
  const tokenLogger = (tokens) => {
    console.log('onKeycloakTokens', tokens)
  }
  
  const dev = false;
  // const redirect = dev ? '/pops' : 'https://formbuilder.ace-unb.com/pops';
  const redirect = dev ? '/pops' : 'http:localhost:3000';
  return (
  
    <ReactKeycloakProvider 
      authClient={keycloak}
      initOptions={{
    
        clientSecret: '6cb12e18-3d70-409c-b73e-2a65d4249b5a'
      }}
      onEvent={eventLogger}
      onTokens={tokenLogger} >

     
      
    </ReactKeycloakProvider>
   
  )


  
}

export default App
