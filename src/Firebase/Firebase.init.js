import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
};

export default initializeAuthentication;

/* steps for authentication
-------------------------
initial setUp step- 1
1. firebase: create project
2. create web app
3. get configaration
4. initialize firebase
5. enable auth method
step-2 "setup component"
1.Create login component
2.Create Register component
3.Create Route for login and register
step-3 set auth system
1. setup sign in method
2. setup sign out method
3. user state
4. special observer
5.return necessary methods and states from useFirebase
step-4 "create auth context hook (useAuth)"
1.create a auth context 
2.Create context provider
3.useAuth provider
4.set context provider, context value
5.create useAuth HOOK
step-5
1.create private route
2.set private route
step-6 redirect after logIn
1.after login redirect user to their desired route!

*/