import React, { useState } from "react";
import firebase from "../services/firebaseConfig";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState();

    const signin = async (newUser, callback) => {
        const auth = getAuth(firebase);
        await signInWithEmailAndPassword(auth, newUser.email, newUser.password);
        await onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                setUser(authUser);
            }
        });
        callback();
    };

    const signout = async (callback) => {
        const auth = getAuth(firebase);
        await signOut(auth);
        setUser(null);
        callback();
    };

    const value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
    return React.useContext(AuthContext)
}

export default useAuth;