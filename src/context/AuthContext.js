import { onAuthStateChanged } from "@firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase";
import { useEffect } from 'react'

export const AuthContext = createContext()


export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(user);
        });
        return () => {
            unsub();
        }
    }, []);
    return (
        //any component that wrapped to auth provider can reach to this current user
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
};