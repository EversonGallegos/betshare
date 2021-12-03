import React, {createContext, useState} from 'react'
import { service } from '../services/api'
const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
    const [access, setAccess] = useState(() => 
    localStorage.getItem('access_betshare') ? 
    localStorage.getItem('access_betshare') : 
    null)
    const [refresh, setRefresh] = useState(() => 
    localStorage.getItem('refresh_betshare') ? 
    localStorage.getItem('refresh_betshare') : 
    null)

    const Login = async (username, password) => {
        const status = await service.Login(username, password)
        if(status === 200){
            setAccess(() => localStorage.getItem('access_betshare'))
            setRefresh(() => localStorage.getItem('refresh_betshare'))
        }
        return status
    }

    const context = {
        access_token: access,
        refresh_token: refresh,
        login: Login
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}
