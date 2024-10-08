import React, {useState, useContext, createContext} from "react";
import { api } from "../../Api";
const AuthContext = createContext()

export function AuthProvider({children}){
    const [user, setUser] = useState(null)
    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)
    return context;
}