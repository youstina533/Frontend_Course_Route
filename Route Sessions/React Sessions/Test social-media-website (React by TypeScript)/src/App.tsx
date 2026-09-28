import Layout from './Layout/Layout';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';

function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout/>,
      children: [
        {index :true, element: <Home/>},
        {path: "home", element: <Home/>},
        {path: "profile", element: <Profile />},
        {path: "login", element: <Login/>},
        {path:"register", element: <Register/>}
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
