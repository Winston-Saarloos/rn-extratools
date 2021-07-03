export {}
// import React, { useContext, useEffect, useState } from 'react';
// import firebase from './Firebase';

// export const AuthContext = React.createContext<Partial<ContextProps>>({}); //<firebase.User | null>

// export function useAuth() {
//     return useContext(AuthContext);
// }

// type ContextProps = {
//     user: firebase.User | null;
//     authenticated: boolean;
//     setUser: any;
//     loadingAuthState: boolean;
// };

// export function AuthProvider({ children }: any) {
//     const [user, setUser] = useState<firebase.User | null>(null); //<firebase.User | null>
//     const [loadingAuthState, setLoadingAuthState] = useState(true);

//     // function signup(email: string, password: string): Promise<firebase.auth.UserCredential> {
//     //     return auth.createUserWithEmailAndPassword(email, password);
//     // }

//     // useEffect(() => {
//     //     const unsubscribe = auth.onAuthStateChanged(firebaseUser => {
//     //         setUser(user);
//     //     });

//     //     return unsubscribe;
//     // }, []);

//     useEffect(() => {
//         firebase.auth().onAuthStateChanged((user: any) => {
//             setUser(user);
//             setLoadingAuthState(false);
//         });
//     }, []);

//     // const value: AuthValue = {
//     //     currentUser,
//     //     signup
//     // }

//     return (
//         <AuthContext.Provider value={{ user, authenticated: user !== null, setUser, loadingAuthState }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// //https://www.youtube.com/watch?v=PKwu15ldZ7k 25:51

// //https://medium.com/wesionary-team/react-firebase-authentication-with-context-api-a770975f33cf