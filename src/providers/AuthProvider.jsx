import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    return (
        <div>
         <AuthContext.Provider value={'dark'}>
            {children}
        </AuthContext.Provider>   
        </div>
    );
};

export default AuthProvider;