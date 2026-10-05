import { createContext, useState } from "react";
// import {useEffect} from "react"

export const AuthContext =  createContext();

export default function AuthContextProvider({children}){
    const [userToken, setuserToken] = useState(null); // 3amlt state 34an a7t feha al token 34an awl ma yegey al state te8yr feh UI, wa hateto feh context 34an mmkn asta5dm al token feh aktr mn component

    // useEffect(()=>{   // dah a3mlo lw 3ayza an lma al user ye3ml refresh may3ml4 refresh l al AuthContext file wa al token feh al state yerg3 null tany badl aly feh local storage 
    //     if(localStorage.getItem("userToken")){
    //      setuserToken(localStorage.getItem("userToken"))
    //     }
    // },[])
    
    return <AuthContext.Provider value={{userToken,setuserToken}}>
        {children}
    </AuthContext.Provider> 
}
