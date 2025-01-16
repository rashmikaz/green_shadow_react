import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Field } from './pages/Field'


function App() {


  const routes = createBrowserRouter([
    {
      path:"",
      element:<RootLayout/>,
      children:[
        {path: '', element: <Dashboard/>},
        {path: '', element: <Field/>},
        {path: '', element: <Crop/>},
        {path: '', element: <Staff/>},
        {path: '', element: <Equipment/>},
        {path: '', element: <Log/>},
        {path: '', element: <Vehicle/>}
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}
export default App;