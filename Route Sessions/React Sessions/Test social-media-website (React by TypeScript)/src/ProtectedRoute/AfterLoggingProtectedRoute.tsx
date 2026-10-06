import {Navigate} from "react-router-dom";

export default function AfterLoggingProtectedRoute({children}) {
    if(!localStorage.getItem("userToken")){
       return <>{children}</>
    } 
    else{
       return <Navigate to="/home"/>
  }
}