import React, {createContext, useState} from 'react'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {

    const [access, setAccess] = useState(() => 
    localStorage.getItem('access_betshare') ? 
    JSON.parse(localStorage.getItem('access_betshare')) : 
    null)

    const [refresh, setRefresh] = useState(() => 
    localStorage.getItem('refresh_betshare') ? 
    JSON.parse(localStorage.getItem('refresh_betshare')) : 
    null)
    const [isAuthenticated, setIsAuthenticated] = useState(() => access ? true : false)


    const context = {
        access_token: access,
        refresh_token: refresh,
        isAuthenticated: isAuthenticated,
    }

    return (
        <AuthContext.AuthProvider value={context}>
            {children}
        </AuthContext.AuthProvider>
    )
}

