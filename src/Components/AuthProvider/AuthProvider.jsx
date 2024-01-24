
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from './../Firebase/Firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignUp = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const updateProfileInfo = (firstName, photo) => {
        return updateProfile(auth.currentUser, {
             displayName: firstName, photoURL: photo
           })
     }



    useEffect( () => {
        const unSubscribe=  onAuthStateChanged(auth, currentUser => {
            console.log("Current user", currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        } 
    }, [])
    const signin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logout = () => {
        setLoading(false);
        return signOut(auth)
    }
    
    const userInfo = {
        user,
        updateProfileInfo,
        signUp,
        signin,
        loading,
        logout,
        googleSignUp

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;