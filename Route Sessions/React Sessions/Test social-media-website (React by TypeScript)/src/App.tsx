import Layout from './Layout/Layout';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import AuthContextProvider from './Context/AuthContextValue';
import BeforeLoggingProtectedRoute from "./ProtectedRoute/BeforeLoggingProtectedRoute"
import AfterLoggingProtectedRoute from './ProtectedRoute/AfterLoggingProtectedRoute';



function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout/>,
      children: [
        {index :true, element: <BeforeLoggingProtectedRoute> <Home/> </BeforeLoggingProtectedRoute>},
        {path: "home", element: <BeforeLoggingProtectedRoute> <Home/> </BeforeLoggingProtectedRoute>},
        {path: "profile", element: <BeforeLoggingProtectedRoute> <Profile/> </BeforeLoggingProtectedRoute>},
        {path: "login", element: <AfterLoggingProtectedRoute> <Login/> </AfterLoggingProtectedRoute> },
        {path:"register", element: <AfterLoggingProtectedRoute> <Register/> </AfterLoggingProtectedRoute> }
      ]
    }
  ])
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={routers}></RouterProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
