import Parent from '../src/Components/Parent'
import Gallery from '../src/Components/Gallery'
import Web from '../src/Components/Web'
import Products from '../src/Components/Products'
import Graphic from '../src/Components/Graphic'
import Photography from '../src/Components/Photography'
import Layout from '../src/Layout/Layout'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
function App() {
  const routes = createBrowserRouter([
    {
      path : "",
      element: <Layout /> ,
      children: [
        {index: true, element: <p>home</p>}, // default route
        { path: "parent", element: <Parent /> },
        { path: "products", element: <Products /> },
        { path: "*", element: <p>404</p> }, // catch-all route for undefined paths
        { path:"gallery", element: <Gallery />, children:[
          {index: true, element:<Web />}, // default route gwa gallery
          { path: "graphic", element: <Graphic /> },
          { path: "photography", element: <Photography /> },
        ]},
      ]
    }
  ])
   
  return (
    <>
      <div className="container">
        <RouterProvider router={routes}></RouterProvider>
       </div>
    </>   
  )
}

export default App
