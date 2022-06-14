import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider);
    }
    const signUsingEmailAndPassword = (email,password) => {
       return  createUserWithEmailAndPassword(auth, email, password)
           .then((userCredential) => {
               const user = userCredential.user; 
               console.log("user : ",user);
           })
           
  .catch((error) => {
      const errorMessage = error.message;
      console.log("Error : ",errorMessage);
    // ..
  });
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    },[])
    
    return {
        user,
        signInUsingGoogle,
        signUsingEmailAndPassword,
        logOut
    }
}


export default useFirebase;