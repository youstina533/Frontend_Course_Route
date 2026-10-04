import { createContext, useState } from "react";

export const AuthContext =  createContext();

export default function AuthContextProvider({children}){
    const [userToken, setuserToken] = useState(null);

    return <AuthContext.Provider value={{userToken,setuserToken}}>
        {children}
    </AuthContext.Provider> 
}