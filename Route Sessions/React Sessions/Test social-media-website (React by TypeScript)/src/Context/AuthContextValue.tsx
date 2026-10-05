import { createContext, useState } from "react";

export const AuthContext =  createContext();

export default function AuthContextProvider({children}){
    const [userToken, setuserToken] = useState(null); // 3amlt state 34an a7t feha al token 34an awl ma yegey al state te8yr feh UI

    return <AuthContext.Provider value={{userToken,setuserToken}}>
        {children}
    </AuthContext.Provider> 
}
