import React, {useContext, createContext, useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../Firebase/Firebase.js"
import { getUserProfile } from "../Firebase/users.js";

export const UserContext = createContext(null)

export function UserContextProvider({children}){
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser){
                const profile = await getUserProfile(firebaseUser.email)
                setUser(profile);
            } else{
                setUser(null);
            }
        });
    }, []);

    return (
    <UserContext.Provider 
    value={{
        user,
        }}
        >
        {children}
    </UserContext.Provider>
    );
}

export function useUser(){
    return useContext(UserContext)
}