import { createContext } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth()
    const [user, setUser] = useState(null);

    useEffect(() => {
    onAuthStateChanged(auth,(person) => {
    setUser(person)
    })
    }, []);



return (
    <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
);
};



export {AuthContext, AuthProvider};
