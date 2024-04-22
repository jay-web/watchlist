import { createContext, useContext, useState } from "react";

type Auth = {
    user: string,
    setUser: React.Dispatch<React.SetStateAction<string>>

};

const initialState = {
    user: "",
    setUser: () => ""
}


const AuthContext = createContext<Auth>(initialState);

interface AuthContextProps {
    children: React.ReactNode
}

export const AuthProvider = ({children}: AuthContextProps) => {
    const [user, setUser ] = useState("");

    return <AuthContext.Provider value={{user, setUser}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);