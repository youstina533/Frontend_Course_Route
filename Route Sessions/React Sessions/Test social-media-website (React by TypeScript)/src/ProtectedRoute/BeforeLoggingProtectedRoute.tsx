import {Navigate} from "react-router-dom";
import {type ReactNode} from "react";

export default function BeforeLoggingProtectedRoute({children} : {children: ReactNode }) {
    // const navigate = useNavigate();  // function navigate m4 btrg3 haga hena 34an keda masta5dmnha4 ba3d al return feh al if 34an m4 hatrg3 login component aw m4 hatwdeny leh

    if(!localStorage.getItem("userToken")){
      return <Navigate to="/login"/> // mkan al useNavigate 34an heya b-return haga wa kman btro7 te7ot al path aly gowa to feh al URL 34an routerProvider ye4ofo
    } // wa maktbt4 return <Login/> 3latol keda 34an keda howa ah hayro7 l login 3ady bs feh URL hatb2a still profile or home aly katbha al user fo2
    else{
      return <>{children}</>
    }

}
