import {  createBrowserRouter,  createRoutesFromElements,  Route,  RouterProvider} from 'react-router-dom'
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak"


// layouts and pages
import RootLayout from './components/Layout/RootLayout'
import Create from './pages/Create'
import Workspace from './pages/Workspace'
import Ocorrencia from './pages/Ocorrencia'
import PrivateRoute from './utils/PrivateRoute';
import AppRouter from './routes';



function App() {
  return (
  
    <ReactKeycloakProvider authClient={keycloak}>
      <AppRouter />
      
    </ReactKeycloakProvider>
   
  )


  
}

export default App
