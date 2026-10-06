import { createContext, useState, type Dispatch, type SetStateAction, type ReactNode } from "react";
// import {useEffect} from "react"


type AuthContextType ={
  userToken: string | null;
  setuserToken : Dispatch<SetStateAction<string | null>>; // here 2 generic [<>] and Dispatch is type of functions , setStateAction is type for setState function
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext =  createContext<AuthContextType>({ // hena al craeteContext byb2a 3ayz ye3rf ana k context ha-provide eh, fah 3amlna generic 34an ne7ot feh type l al hagat aly howa a provide it [gwa value]
    userToken: null, // feh bedaya 5als
    setuserToken: () => {}, // keda 2olt ano no3o function
});

export default function AuthContextProvider({children} : {children: ReactNode }){
    const [userToken, setuserToken] = useState(function(){return localStorage.getItem("userToken")}); //lazy initialization // 3amlt state 34an a7t feha al token 34an awl ma yegey al state te8yr feh UI wa hateto feh context 34an mmkn asta5dm al token feh aktr mn component
    // mmkn bdl function kamla keda teb2a arrow function: () => localStorage.getItem("userToken")

    
    // useEffect(()=>{   // dah a3mlo lw 3ayza an lma al user ye3ml refresh may3ml4 refresh l al AuthContext file wa al token feh al state yerg3 null tany badl aly feh local storage 
    //     if(localStorage.getItem("userToken")){
    //      setuserToken(localStorage.getItem("userToken"))
    //     }
    // },[])

    return <AuthContext.Provider value={{userToken,setuserToken}}>
            {children}
         </AuthContext.Provider> 
}
