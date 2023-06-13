import {  createBrowserRouter,  createRoutesFromElements,  Route,  RouterProvider} from 'react-router-dom'

// layouts and pages
import RootLayout from './components/Layout/RootLayout'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import Workspace from './pages/Workspace'
import Ocorrencia from './pages/Ocorrencia'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Workspace /> } />
      <Route path="workspace" element={<Workspace />} />
      <Route path="create" element={<Create />} />
      <Route path="ocorrencia" element={<Ocorrencia />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )


  
}

export default App
