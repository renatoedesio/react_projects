import {  createBrowserRouter,  createRoutesFromElements,  Route,  RouterProvider} from 'react-router-dom'
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak"


// layouts and pages
import RootLayout from './components/Layout/RootLayout'
import Create from './pages/Create'
import Workspace from './pages/Workspace'
import Ocorrencia from './pages/Ocorrencia'
import PrivateRoute from './utils/PrivateRoute';

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Workspace /> } />
      <Route path="workspace" element={<Workspace />} />
      <Route path="create" element={<Create />} />
      <Route path="ocorrencia" element={
         <PrivateRoute>
          <Ocorrencia />
        </PrivateRoute>
        } 
      />
     
    </Route>
  )
)

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <RouterProvider router={router} />
    </ReactKeycloakProvider>
  )


  
}

export default App
